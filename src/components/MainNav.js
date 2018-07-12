import React, { Component } from 'react';
import { connect } from 'react-redux'
import { syncUser, logout, resetLogoutStatus } from '../redux/actions/auth'
import { fetchProperties } from '../redux/actions/displayProperty'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap'
import { Redirect, Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'


const DropDown = ({data, logout}) => {
    return (
        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            {data.email}
        </DropdownToggle>
        <DropdownMenu right>
        <DropdownItem>
            <Link to={`/profile/${data._id}`}>Manage Profie</Link>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
            <a onClick={() => logout()}>Logout</a>
        </DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown>
    )
}

class MainNav extends Component {
  
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        if (token) {
            this.props.syncUser()
        }
    }

    componentWillReceiveProps() {
        this.props.resetLogoutStatus()
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        if (this.props.logoutSuccess) {
            return <Redirect to="/" />
        }        

        return (
            <Navbar color="light" light expand="md">
              <Container>
              <Link to="/" className="navbar-brand">Coworker</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    { this.props.userDetails && !this.props.loginIsLoading ? (
                        <NavItem>
                            <Link to="/bookings" className="nav-link">My Bookings</Link>
                        </NavItem>
                    ) : null }
                    { this.props.syncUserIsLoading ? (
                        <BeatLoader 
                            color={'#2ecc71'} /> 
                    ) : (
                        <div>
                            { !this.props.userDetails ? (
                                <NavItem>
                                    <Link to="/login" className="nav-link">Login</Link>
                                </NavItem> 
                            ) : <DropDown 
                                    data={this.props.userDetails} 
                                    logout={this.props.logout} />
                            }
                        </div>
                    )}
                    </Nav>
                </Collapse>
              </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
        userDetails: state.userDetails,
        syncUserIsLoading: state.syncUserIsLoading,
        logoutSuccess: state.logoutSuccess,
        properties: state.displayPropertySuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        syncUser: () => dispatch(syncUser()),
        logout: () => dispatch(logout()),
        resetLogoutStatus: () => dispatch(resetLogoutStatus()),
        fetchProperties: () => dispatch(fetchProperties())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNav)