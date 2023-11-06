import people from './data/people.json';
import PersonCard from './components/PersonCard';
const App = () => {

    const peopleDivs = people.results.map((person) => {
        return <PersonCard person={person} />
    });


    // people.results.forEach((person) => {
    //     console.log(index);
    // });

    return (
        <>
        <h1>People</h1>
        {peopleDivs}
        </>
    );
};

export default App;