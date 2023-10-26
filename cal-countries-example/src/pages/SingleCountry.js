import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { Row, Col , Spinner, Image} from 'react-bootstrap'
import axios from 'axios';

const SingleCountry = () => {
    let { name } = useParams();
    const [country,setCountry] =useState(null)
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then(response => {
                setCountry(response.data[0]);
                console.log(response.data[0]);
                console.log(Object.values(response.data[0].currencies[0].name))
            }
            )
            .catch(error => {
                console.error(error);
            })
    }, []);
    if (!country) {
        return (
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
    }
    return (
        <Row>
            <Col>
                <Image src={country.flags.png}>
                </Image></Col>
            <Col>
                <h2><b>Common name:</b> {country.name.common}</h2>
                <h5><b>Official name:</b> {country.name.official}</h5>
                <h3><b>Region:</b> {country.region}</h3>
                <h5><b>Subregion:</b> {country.subregion}</h5>
                <h5><b>Currencies:</b> {Object.values(country.currencies)[0].name} {Object.values(country.currencies)[0].symbol}</h5>
            </Col>
        </Row>
        // <Card>
        //     <Card.Img src={country.flag} variant='top' />
        //     <Card.Body>
        //         <Card.Title>{country.name}</Card.Title>
        //         <p>{country.region}</p>
        //     </Card.Body>
        // </Card>
    )
}
export default SingleCountry