import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Spinner, Image } from 'react-bootstrap';
import axios from 'axios';

const SingleCountry = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [climate, setClimate] = useState(null);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then(response => {
                setCountry(response.data[0]);

                // Return the second axios.get request to chain it
                return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${response.data[0].latlng[0]}&longitude=${response.data[0].latlng[1]}&daily=apparent_temperature_max,apparent_temperature_min&forecast_days=1`);
            })
            .then(weatherResponse => {
                setWeatherData(weatherResponse.data);
                // console.log(weatherResponse.data);
                const latitude = weatherResponse.data.latitude;
                const longitude = weatherResponse.data.longitude;
                // Make the third Axios request for additional data (is_day and showers)
                return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=is_day,showers`);
            })
            .then(climateResponse => {
                // Handle the additional data as needed
                setClimate(climateResponse)
            })
            .catch(error => {
                console.error(error);
            });
    }, [name]);
    // If no country is found or is waiting on axios loading
    if (!country) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }
    // console.log(climate)
    // console.log(climate?.data?.current?.is_day)
    // console.log(climate?.data?.current?.showers)
    return (
        <Row>
            {/* Breakpoints */}
            <Col xs lg="8">
                <Image src={country.flags.png} alt={country.name.common} />
                <h2><b>Common name:</b> {country.name.common}</h2>
                <h5><b>Official name:</b> {country.name.official}</h5>
                <Row>
                    <Col xs lg="12">
                        <h3><b>Region:</b> {country.region}</h3></Col>                    <Col xs lg="6">
                        <Col xs lg="6"><h5><b>Subregion:</b> {country.subregion}</h5></Col><Col xs lg="6">
                        </Col>
                        <h5><b>Currencies:</b> {Object.values(country.currencies)[0].name} {Object.values(country.currencies)[0].symbol}</h5></Col>

                </Row>
            </Col>
            {/* Conditional statement checks whether api says true or false */}
            <Col xs lg="4">
                <p>
                    {climate?.data?.current?.is_day ? (
                        <>
                            It is currently day in {country.name.common}
                        </>
                    ) : (
                        <>
                            It is currently night in {country.name.common}
                        </>
                    )}
                </p>
                    <p>
                        {climate?.data?.current?.showers ? (
                            <>
                                Expecting showers in {country.name.common}. Don't forget your umbrella!
                            </>
                        ) : (
                            <>No showers expected in {country.name.common}.</>
                        )}
                    </p>

                    <h2>Weather Data:</h2>
                    <h5><b>Highest temperature:</b> {weatherData?.daily?.apparent_temperature_max}</h5>
                    <h5><b>Lowest temperature:</b> {weatherData?.daily?.apparent_temperature_min}</h5>
            </Col>
        </Row>

    );
};

export default SingleCountry;
