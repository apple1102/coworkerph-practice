import React, { Component } from 'react'
import { connect } from 'react-redux'
import Property, { Preloader } from '../components/Property'
import { fetchProperties } from '../redux/actions/displayProperty'
import {
    Col,
    Row,
    Container,
} from 'reactstrap'


class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {}

        console.log(this.props)
    }

    componentDidMount() {
        this.props.fetchProperties();
    }

    render() {
        return (
            <div>
                <section></section>
                <section className="mt-5">
                    <Container>
                        { this.props.propertyIsLoading ? (
                            <Row>
                                <Col md={4}>
                                    <Preloader/>
                                </Col>
                                <Col md={4}>
                                    <Preloader/>
                                </Col>
                                <Col md={4}>
                                    <Preloader/>
                                </Col>
                            </Row>
                        ) : (
                            <Row>
                                { this.props.properties.map((p) => (
                                    <Col key={p._id} md={4}>
                                        <Property key={p._id} data={p} />
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </Container>
                </section>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        propertyHasErrored: state.displayPropertyHasErrored,
        propertyIsLoading: state.displayPropertyIsLoading,
        properties: state.displayPropertySuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProperties: () => dispatch(fetchProperties())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)