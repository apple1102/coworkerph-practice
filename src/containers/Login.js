import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, resetLoginError } from '../redux/actions/auth'
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
    Button,
    Alert
} from 'reactstrap'
import { BeatLoader } from 'react-spinners'
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
        emailIsInvalid: false,
        passwordInvalid: false,
        invalidMessage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.setOrClearInvalidMessage = this.setOrClearInvalidMessage.bind(this)

  }

  componentDidMount() {
    this.props.resetLoginError()
  }

  handleSubmit(e) {
    e.preventDefault()
    
    let email = e.target.email.value
    let password = e.target.password.value

    if (!email) 
      return this.setOrClearInvalidMessage('Email cannot be empty', true, false)

    if (!password)
      return this.setOrClearInvalidMessage('Password cannot be empty', false, true)

    this.props.login({ email, password })

  }

  setOrClearInvalidMessage(invalidMessage = null, 
                    emailIsInvalid = false, 
                    passwordInvalid = false) {
          
    let state = Object.assign({}, this.state)

    state = {
      invalidMessage,
      emailIsInvalid,
      passwordInvalid
    }

    this.setState(state)
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
                                { this.props.loginHasErrored || this.state.invalidMessage ? (
                                        <Alert color="danger">
                                            { this.props.loginHasErrored || this.state.invalidMessage }
                                        </Alert>
                                    ) : null }
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup className="mt-3">
                                        <Label for="email">Email</Label>
                                        <Input 
                                            id="email" 
                                            type="text" 
                                            onClick={() => {
                                              this.props.resetLoginError()
                                              this.setOrClearInvalidMessage()
                                            }} 
                                            invalid={!!this.props.loginHasErrored || this.state.emailIsInvalid} />
                                    </FormGroup>
                                    <FormGroup className="mt-3">
                                        <Label for="password">Password</Label>
                                        <Input 
                                            id="password" 
                                            type="password" 
                                            onClick={() => {
                                              this.props.resetLoginError()
                                              this.setOrClearInvalidMessage()
                                            }}
                                            invalid={!!this.props.loginHasErrored || this.state.passwordInvalid} />
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
      login: (credentials) => dispatch(login(credentials)),
      resetLoginError: () => dispatch(resetLoginError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);