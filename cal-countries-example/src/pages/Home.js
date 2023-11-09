import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import CountryCard from '../components/CountryCard';
import { useParams } from 'react-router-dom';

const Home = () => {
  const [countriesList, setCountriesList] = useState([]);
  const { input, filter } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (input) {
          response = await axios.get(`https://restcountries.com/v3.1/name/${input}`);
        } else if (filter) {
          response = await axios.get(`https://restcountries.com/v3.1/region/${filter}`);
        } else {
          response = await axios.get('https://restcountries.com/v3.1/all');
        }

        console.log(response.data);
        setCountriesList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [input, filter]);

  const countryCards = countriesList.map((country, i) => (
    <CountryCard key={i} flag={country.flags.png} name={country.name.common} region={country.region} />
  ));

  return (
    <Row className='me-1 pb-1' md={3} xs={1}>
      {countryCards}
    </Row>
  );
};

export default Home;
