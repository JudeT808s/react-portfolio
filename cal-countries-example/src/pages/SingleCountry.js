import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Spinner, Image } from 'react-bootstrap';
import axios from 'axios';

const SingleCountry = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

   useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then(response => {
            setCountry(response.data[0]);
            console.log(response.data[0]);

            // Return the second axios.get request to chain it
            return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${response.data[0].latlng[0]}&longitude=${response.data[0].latlng[1]}&hourly=rain&timezone=Europe%2FLondon&forecast_days=1`);
        })
        .then(weatherResponse => {
            setWeatherData(weatherResponse.data);
            console.log(weatherResponse.data);
        })
        .catch(error => {
            console.error(error);
        });
}, [name]);


    if (!country) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }
    // const { latitude, longitude, elevation, hourly_units } = weatherData;
    console.log(weatherData)

    return (
        <Row>
            <Col>
                <Image src={country.flags.png} alt={country.name.common} />
            </Col>
            <Col>
                <h2><b>Common name:</b> {country.name.common}</h2>
                <h5><b>Official name:</b> {country.name.official}</h5>
                <h3><b>Region:</b> {country.region}</h3>
                <h3><b>Region:</b> {country.latlng}</h3>
                <h5><b>Subregion:</b> {country.subregion}</h5>
                <h5><b>Currencies:</b> {Object.values(country.currencies)[0].name} {Object.values(country.currencies)[0].symbol}</h5>
                <h2>Weather Data:</h2> 
                <h5><b>Rain:</b> {weatherData?.hourly?.rain}</h5>
            </Col>
             
        </Row>

    );
};

export default SingleCountry;
