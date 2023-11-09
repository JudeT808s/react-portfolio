import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const RegionDropdown = () => {
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
    let regions = countriesList.map((country) => {
        return country.region;
    });
    let uniqueRegions = new Set(regions);
    let list = Array.from(uniqueRegions);
    window.location.hash = '';

    return (
        //  console.log(list)
        <DropdownButton id="dropdown-item-button" title="Region" variant="success">
            {list.map(region => (
                <Link to={`/filter/${region}`}>
                    <Dropdown.Item as="button" key={region}>
                        {region}
                    </Dropdown.Item>
                </Link>
                // <Dropdown.Item key={region} Link={`#/action-${region}`}>
                //     {region}
                // </Dropdown.Item>
            ))}
        </DropdownButton>
    )
}
export default RegionDropdown