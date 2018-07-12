import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons'


library.add(faCheckCircle, faCoffee)

const FontAwesome = (props) => (
  <FontAwesomeIcon {...props} />
)

export default FontAwesome