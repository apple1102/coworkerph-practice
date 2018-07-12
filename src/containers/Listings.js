import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProperty } from '../redux/actions/property'
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Button,
  Card,
  CardBody
} from 'reactstrap'
import Datepicker from '../components/Datepicker/Datepicker'
import Timepicker from '../components/Timepicker/Timepicker'
import NumericInput from '../components/NumericInput/NumericInput'

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
    console.log(this.props.property)
    //TODO: https://stackoverflow.com/questions/43115246/how-to-detect-when-a-image-is-loaded-when-is-a-prop-and-change-a-state-on-react
    //TODO: https://github.com/IRIdeveloper/react-iron-image
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
              <Row>
                {/*===== SPLIT ========*/}
                <Col md={8} sm={12}>
                  <Row>
                    <Col md={12}>
                      <h1>{this.props.property.name}</h1>
                      <span className="text-uppercase">{this.props.property.host.name}</span>
                    </Col>
                    <Col md={12} className="mt-4">
                      <p>{this.props.property.description}</p>
                    </Col>
                  </Row>
                </Col>
                {/*===== SPLIT ========*/}

                {/*===== SPLIT ========*/}
                <Col md={4}>
                  <Row>
                    <Col md={12}>
                      <Card>
                        <CardBody>
                          {/*===== DATE PICKER =====*/}
                          <Row>
                            <Col md={12}>
                              <small className="mr-1 text-uppercase">Start / End Date</small>
                              <Datepicker/>
                            </Col>
                          </Row>
                          {/*===== DATE PICKER =====*/}

                          {/*===== TIME PICKER ======*/}
                          <Row>
                            <Col md={6}>
                              <Row>
                                <Col className="mt-1" md={12}>
                                  <small className="mr-1 text-uppercase">Start time</small>
                                </Col>
                                <Col className="mt-1" md={12}>
                                  <Timepicker />
                                </Col>
                              </Row>
                            </Col> 
                            <Col md={6}>
                              <Row>
                                <Col className="mt-1" md={12}>
                                  <small className="mr-1 text-uppercase">End time</small>
                                </Col>
                                <Col className="mt-1" md={12}>
                                  <Timepicker />
                                </Col>
                              </Row>
                            </Col> 
                          </Row>
                          {/*===== TIME PICKER ======*/}


                          {/*===== NUMBER OF PEOPLE ======*/}
                          <Row>
                            <Col md={12} className="mt-1">
                              <small className="mr-1 text-uppercase">No. of people</small>
                              <NumericInput />
                            </Col>
                          </Row>
                          {/*===== NUMBER OF PEOPLE =======*/}

                          {/*===== CHECK AVAILABILITY =======*/}
                          <Row>
                            <Col md={12} className="mt-3">
                              <a
                                className="btn btn-success btn-block text-white"
                                style={{
                                  borderRadius: '0',
                                  textTransform: 'uppercase',
                                  fontSize: '12px'
                                }}
                                >
                                Check availability
                              </a>
                            </Col>
                          </Row>
                          {/*===== CHECK AVAILABILITY =======*/}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  
                </Col>
                {/*===== SPLIT ========*/}
              </Row>
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

