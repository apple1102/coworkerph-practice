import 'rc-time-picker/assets/index.css'
import './Timepicker.css'
import React from 'react'
import TimePicker from 'rc-time-picker'
import moment from 'moment'


const Timepicker = (props) => (
  <TimePicker 
    {...props}
    showSecond={false}
    defaultValue={moment()}
    minuteStep={15}
    use12Hours={true}
    className="time-picker-defaults"
  />
)

export default Timepicker