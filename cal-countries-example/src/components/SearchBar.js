import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form } from 'react-bootstrap';

const Searchbar = () => {
    const [input, setInput] = useState("");

    const handleTextInput = (e) => {
        setInput(e.target.value);
    };

    // const handleSearch = () => {
    //      <Link to={`/search/${input}`} />;
    // };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            <Link to={`/search/${input}`}></Link>
        }
    };
    window.location.hash = '';

    return (
        <Row>
            <Col xs="auto">
                <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={input}
                    onChange={handleTextInput}
                    onKeyUp={handleKeyUp}
                />
            </Col>
            <Col xs="auto">

                <Link to={`/search/${input}`}>
                    <Button>Search</Button>
                </Link>
            </Col>
        </Row>
    );
};

export default Searchbar;
