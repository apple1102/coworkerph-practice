import './NumericInput.css'
import React, { Component } from 'react'
import Input from 'react-numeric-input'

const NumericInput = () => (
  <Input 
    className="numeric-input form-control" 
    value={ 1 } 
    min={ 1 }
    max={ 100 }
    step={ 1 } 
    precision={ 0 } 
    size={ 5 } 
    mobile
  />
)

export default NumericInput;