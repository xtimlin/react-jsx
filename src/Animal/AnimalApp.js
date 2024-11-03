import './AnimalApp.css'
import  {useState} from "react";
import AnimalShow  from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function AnimalApp() {
    const [animals, setAnimal] = useState([]);
    const handleClick = () => {
        setAnimal([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow key={index} type={animal} />;
    });

    return (
        <div className="AnimalApp">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}

export default AnimalApp
