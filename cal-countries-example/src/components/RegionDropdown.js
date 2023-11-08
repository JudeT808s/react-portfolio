import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
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
    //wtf
    let uniqueRegions = new Set(regions);
    let list = Array.from(uniqueRegions);
    window.location.hash = '';

    return (
        //  console.log(list)
        <Dropdown as={ButtonGroup}>
            <Button variant="success">Split Button</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
            {list.map(region => (
                <Dropdown.Item>
                    <Link  to={`/filter/${region}`}>
                        {region}
                    </Link>
                </Dropdown.Item>
                // <Dropdown.Item key={region} Link={`#/action-${region}`}>
                //     {region}
                // </Dropdown.Item>
            ))}
        </Dropdown.Menu>
        </Dropdown>
    )
}
export default RegionDropdown