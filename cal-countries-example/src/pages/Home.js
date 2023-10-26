import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap'
import CountryCard from '../components/CountryCard';

const Home = () => {
    const [countriesList, setCountriesList] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                console.log(response.data)
                setCountriesList(response.data);
            }
            )
            .catch(error => {
                console.error(error);
            })
    }, []);

    let countryCards = countriesList.map((country, i) => {
        return <CountryCard key={i} flag={country.flags.png} name={country.name.common} region={country.region} />
    })
    return (
        <Row className='me-1 pb-1' md={3} xs={1}>
            {countryCards}
        </Row>

    )
}
export default Home