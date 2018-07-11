import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProperty } from '../redux/actions/property'
import {
  Container,
  Jumbotron
} from 'reactstrap'

class Listings extends Component {

  constructor(props) {
    super(props)

    let { host, property } = this.props.match.params

    this.state = {
      params: { host, property }
    }

  }

  componentDidMount() {
    this.props.fetchProperty(
      this.state.params.host,
      this.state.params.property
    )
  }

  render() {
    //TODO: https://stackoverflow.com/questions/43115246/how-to-detect-when-a-image-is-loaded-when-is-a-prop-and-change-a-state-on-react
    return (
      <div>
        { this.props.propertyIsLoading || !this.props.property ? (
          // component is loading
          <div>
            <Jumbotron style={{ 
              backgroundColor: '#95a5a6',
              height: '40vh' }}>
            </Jumbotron>
            <Container>
              loading..
            </Container>
          </div>
        ) : (
          <div>
            <Jumbotron style={{ 
              backgroundImage: `url(http://localhost:9000/${this.props.property.coverPhoto.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '40vh' }}>
            </Jumbotron>
            <Container>
              qweqwe
            </Container>
          </div>
        )}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails,
    property: state.propertySuccess,
    propertyIsLoading: state.propertyIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProperty: (hostSlug, propertySlug) => {
      dispatch(fetchProperty(hostSlug, propertySlug))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)

