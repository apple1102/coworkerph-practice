import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import './Datepicker.css'
import React, { Component } from 'react'
// import { SingleDatePicker } from 'react-dates'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'
class Datepicker extends Component {

  constructor(props) {
    super(props)

    // this.state={
    //   date: moment(),
    //   focused: false
    // }

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    }
  }

  render() {
    return (
      // <SingleDatePicker
      //   date={this.state.date} // momentPropTypes.momentObj or null
      //   onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
      //   focused={this.state.focused} // PropTypes.bool
      //   onFocusChange={({ focused }) => this.setState({ focused })}
      //   small={true}
      //   withPortal={true}
      //   id="your_unique_id"
      // /> 
      <DateRangePicker
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        withPortal={true}
        small={true}
        minimumNights={0}
      />
    )
  }

}



export default Datepicker