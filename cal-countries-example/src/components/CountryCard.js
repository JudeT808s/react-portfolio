import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
const CountryCard = (props) => {
    return (
        // <>
        <Link to = {`country/${props.name}`}>

        <Card>
            <Card.Img src={props.flag} variant='top' />
            <Card.Body>
                {/* <Link to = {`country/${props.name}`}> */}
                <Card.Title>{props.name}</Card.Title>
                {/* </Link> */}
                <p>{props.region}</p>
            </Card.Body>
        </Card>
         </Link>
        // </>
    )
}
export default CountryCard