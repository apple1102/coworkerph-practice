import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/actions/auth'
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import { BeatLoader } from 'react-spinners'
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault()
        
        let email = e.target.email.value
        let password = e.target.password.value
 
        this.props.login({ email, password })

    }

    render() {
        if (this.props.userDetails) {
            return <Redirect to="/" />
        }
        return (
            <section id="login-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={5} >
                            <Card className="mt-5">
                                <CardBody>
                                    <CardTitle className="">Login to Coworker.ph</CardTitle>
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormGroup className="mt-3">
                                            <Label for="email">Email</Label>
                                            <Input id="email" type="text" />
                                        </FormGroup>
                                        <FormGroup className="mt-3">
                                            <Label for="password">Password</Label>
                                            <Input id="password" type="password" />
                                        </FormGroup>
                                        <Button color="success" type="submit" className="px-3 btn-block">
                                            { this.props.loginIsLoading 
                                                ? <BeatLoader color={'#fff'} />
                                                : 'Login' }
                                        </Button>
                                        <Link 
                                            to="/signup"
                                            className="d-flex justify-content-center mt-3">
                                            Not yet a member?
                                        </Link>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        token: state.token,
        userDetails: state.userDetails,
        loginSuccess: state.loginSuccess,
        loginHasErrored: state.loginHasErrored,
        loginIsLoading: state.loginIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);