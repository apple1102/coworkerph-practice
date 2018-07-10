import React from 'react'
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    CardFooter,
    Button
} from 'reactstrap'
import ContentLoader from "react-content-loader"

const Property = (props) => {
    console.log(props)
    return (
        <Card className="m-1">
            <CardImg 
                src={`http://localhost:9000/${props.data.coverPhoto.url}`}
                style={{
                    maxHeight: '165px',
                    width: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }} 
                />
            <CardBody>
                <CardTitle>Loft Coworking</CardTitle>
                <CardText>
                    eqweqeqwes
                </CardText>
            </CardBody>
            <CardFooter className="text-muted text-right">
                starts at 199
            </CardFooter>
        </Card>
    )
}

export const Preloader = () => {
    return (
        <Card className="m-1">
            <ContentLoader
                height={300}
                width={400}
                speed={2}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
            >
                <rect x="11" y="198" rx="3" ry="3" width="350" height="6.4" /> 
                <rect x="11" y="218" rx="3" ry="3" width="380" height="6.4" /> 
                <rect x="11" y="238" rx="3" ry="3" width="201" height="6.4" /> 
                <rect x="6.5" y="8.05" rx="0" ry="0" width="382" height="172" />
            </ContentLoader>
        </Card>
    )
}

export default Property