import { Client } from "@petfinder/petfinder-js";
import { useEffect, useState } from "react";
import "../styles/App.css";
import { Animal } from "../types";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;
if (!(REACT_APP_CLIENT_ID && REACT_APP_CLIENT_SECRET)) {
    throw new Error("Missing REACT_APP_CLIENT_ID and/or REACT_APP_CLIENT_SECRET env variable");
}

const client = new Client({
    apiKey: REACT_APP_CLIENT_ID,
    secret: REACT_APP_CLIENT_SECRET,
});

export default function App() {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        console.log("App useEffect triggered");

        client.animal
            .search({ limit: 100 })
            .then(resp => {
                console.log(resp.data);
                setAnimals(resp.data.animals as Animal[]);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {animals.map(animal => {
                    return (
                        <section key={animal.id}>
                            <h3>{animal.type}</h3>
                            {animal.primary_photo_cropped && (
                                <img src={animal.primary_photo_cropped.small} alt="Pet"></img>
                            )}
                            <p>
                                {animal.name} - {animal.age}
                            </p>
                        </section>
                    );
                })}
            </header>
        </div>
    );
}
