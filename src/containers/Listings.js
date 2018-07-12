import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProperty } from '../redux/actions/property'
import _ from 'lodash'
import uuid from 'uuid/v1'
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Button,
  Card,
  CardBody
} from 'reactstrap'
import AvailabilityChecker from '../components/AvailabilityChecker/AvailabilityChecker'
import FontAwesome from '../components/FontAwesome'


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
                      <span className="font-weight-bold">Description</span>
                      <p className="mt-2">{this.props.property.description}</p>
                    </Col>
                    <Col md={12}><hr/></Col>
                    <Col md={12} className="mt-2">
                      <span className="font-weight-bold">Operating Hours</span>
                      <Row className="mt-2">
                        <Col md={6}>
                          { _.chunk(Object.keys(this.props.property.operation), 4)[0].map(k => (
                            <span 
                              className="d-block my-2" 
                              key={ uuid() }>
                              { _.upperFirst(k) }
                              { this.props.property.operation[k].isOpened ? (
                                <small 
                                  className="ml-2"
                                  style={{ color: '#2ecc71' }}>
                                  open
                                </small>
                              ) : (
                                <small 
                                  className="ml-2"
                                  style={{ color: '#e74c3c' }}>
                                  closed
                                </small>
                              )} 
                            </span>
                          ))}
                        </Col>
                        <Col md={6}>
                          { _.chunk(Object.keys(this.props.property.operation), 4)[1].map(k => (
                            <span 
                              className="d-block my-2" 
                              key={ uuid() }>
                              { _.upperFirst(k) }
                              { this.props.property.operation[k].isOpened ? (
                                <small 
                                  className="ml-2 align-middle"
                                  style={{ color: '#2ecc71' }}>
                                  open
                                </small>
                              ) : (
                                <small 
                                  className="ml-2 align-middle"
                                  style={{ color: '#e74c3c' }}>
                                  closed
                                </small>
                              )} 
                            </span>
                          ))}
                        </Col>
                      </Row>
                    </Col>
                    <Col md={12}><hr/></Col>
                    <Col md={12} className="mt-2">
                      <span className="font-weight-bold">Amenities</span>
                      <Card 
                        className="mt-3 mb-3"
                        style={{
                          borderRadius: '0',
                          minHeight: '200px',
                          maxHeight: '200px',
                          overflowY: 'scroll'
                        }}>
                        <CardBody>
                          <Row>
                            { this.props.property.amenities.map(a => (
                              <Col
                                key={a._id}
                                md={4}
                                className="mt-2">
                              <FontAwesome 
                                className="align-middle mr-2" 
                                icon="check-circle"
                                style={{ color: '#2ecc71'}} />
                              <span 
                                className="align-middle">
                                {a.name}
                              </span>
                            </Col>
                            ))}
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <AvailabilityChecker />
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

