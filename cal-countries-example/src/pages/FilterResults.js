import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap'
import CountryCard from '../components/CountryCard';
import { useParams } from 'react-router-dom';


const SearchResults = () => {
    let { region } = useParams();
    const [countriesList, setCountriesList] = useState([]);
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/region/${region}
        `)
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
export default SearchResults