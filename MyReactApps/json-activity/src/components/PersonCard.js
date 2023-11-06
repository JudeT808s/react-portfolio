const PersonCard = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.person.picture.large} className="card-img-top" alt="Profile" />
            <div className="card-body">
                <h3>{props.person.name.first}</h3>
                <h4>Quote: "{props.person.quote}"</h4>
            </div>
        </div>
    );
};
export default PersonCard;
