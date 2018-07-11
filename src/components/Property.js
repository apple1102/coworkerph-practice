import React from 'react'
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    CardFooter
} from 'reactstrap'
import { Link } from 'react-router-dom'
import ContentLoader from "react-content-loader"
import truncatise from 'truncatise'
import slug from 'slug'

const Property = ({data}) => {

    // slugs
    let hostSlug = slug(data.host.name.toLowerCase()) 
    let propertySlug = slug(data.name.toLowerCase())
    let propertyUrl = `/${hostSlug}/${propertySlug}`

    // pricings
    let prices = []
    let lowestPrice

    // lowest pricing computation
    Object.keys(data.rate).map(k => prices.push(data.rate[k].price))
    lowestPrice = Math.min(...prices)
    
    return (
        <Card className="m-1">
            <CardImg 
                src={`http://localhost:9000/${data.coverPhoto.url}`}
                style={{
                    maxHeight: '165px',
                    width: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }} 
                />
            <CardBody>
                <CardTitle className="mb-0">
                  <Link to={'/listings'+propertyUrl}>{ data.name }</Link>
                </CardTitle>
                <small className="text-muted text-uppercase">{data.host.name}</small>
                <CardText className="mt-2">
                    {truncatise(data.description, {
                      TruncateLength: 20,
                      TruncateBy: 'words',
                      Strict: true,
                      Suffix: '...'
                    })}
                </CardText>
            </CardBody>
            <CardFooter className="text-muted text-right">
                Starts at { lowestPrice } PHP
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