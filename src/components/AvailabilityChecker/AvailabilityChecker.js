import React, { Component } from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Button
} from 'reactstrap'
import Datepicker from '../Datepicker/Datepicker'
import Timepicker from '../Timepicker/Timepicker'
import NumericInput from '../NumericInput/NumericInput'

const DatePickerType = () => (
  <Row>
    <Col md={12}>
      <small className="mr-1 text-uppercase">
        Start / End Date
      </small>
      <Datepicker/>
    </Col>
  </Row>
)

const TimepickerType = () => (
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
)

class AvailabilityChecker extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      //rent types
      isHourlySelected: true,
      isHourlyEnabled: true,
      isDailySelected: false,
      isDailyEnabled: true,
      isMonthlySelected: false,
      isMonthlyEnabled: true

    }

    this.onRentTypeClick = this.onRentTypeClick.bind(this)
  }

  onRentTypeClick(selected) {
    switch(selected) {
      case 'hourly':
        this.setState({
          isHourlySelected: true,
          isDailySelected: false,
          isMonthlySelected: false,
        })
        break
      case 'daily':
        this.setState({
          isHourlySelected: false,
          isDailySelected: true,
          isMonthlySelected: false,
        })
        break
      case 'monthly':
        this.setState({
          isHourlySelected: false,
          isDailySelected: false,
          isMonthlySelected: true,
        })
        break
    }
  }

  render() {
    return (
      <Col md={4}>
        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
    
                {/*===== RENT TYPE =====*/}
                <Row>
                  <Col md={12} className="mb-2">
                    <small className="mb-2 mr-1 text-uppercase">
                      Rent Type
                    </small>
                    <Row>
                      <Col md={4}>
                        <Button
                          onClick={() => this.onRentTypeClick('hourly') }
                          disabled={ !this.state.isHourlyEnabled }
                          outline={ !this.state.isHourlySelected }
                          color={ this.state.isHourlySelected ? "success" : "secondary" } 
                          className="btn-block"
                          style={{
                            borderRadius: '0',
                            textTransform: 'uppercase',
                            fontSize: '12px'
                          }}>
                          Hourly
                        </Button>
                      </Col>
                      <Col md={4}>
                        <Button 
                          onClick={() => this.onRentTypeClick('daily') }
                          disabled={ !this.state.isDailyEnabled }
                          outline={ !this.state.isDailySelected }
                          color={ this.state.isDailySelected ? "success" : "secondary" }
                          className="btn-block"
                          style={{
                            borderRadius: '0',
                            textTransform: 'uppercase',
                            fontSize: '12px'
                          }}>
                          Daily
                        </Button>
                      </Col>
                      <Col md={4}>
                        <Button
                          onClick={() => this.onRentTypeClick('monthly') }
                          disabled={ !this.state.isMonthlyEnabled }
                          outline={ !this.state.isMonthlySelected }
                          color={ this.state.isMonthlySelected ? "success" : "secondary" }
                          className="btn-block"
                          style={{
                            borderRadius: '0',
                            textTransform: 'uppercase',
                            fontSize: '12px'
                          }}>
                          Monthly
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {/*===== RENT TYPE =====*/}
    

                { this.state.isHourlySelected ? (
                  <div>
                    <DatePickerType />
                    <TimepickerType />
                  </div>
                ) : this.state.isDailySelected ? (
                  <div>
                    <DatePickerType />
                  </div>
                ) : this.state.isMonthlySelected ? (
                  <div>
                    <DatePickerType />
                  </div>
                ) : null }
    
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
    )
  }

}

export default AvailabilityChecker