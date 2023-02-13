import { Client } from "@petfinder/petfinder-js";
import { useEffect, useState } from "react";
import "../styles/App.css";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;
if (!(REACT_APP_CLIENT_ID && REACT_APP_CLIENT_SECRET)) {
    throw new Error("Missing REACT_APP_CLIENT_ID and/or REACT_APP_CLIENT_SECRET env variable");
}

const client = new Client({
    apiKey: REACT_APP_CLIENT_ID,
    secret: REACT_APP_CLIENT_SECRET,
});

export default function App() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        console.log("App useEffect triggered");

        client.animalData
            .types()
            .then(types => {
                console.log(types);
                for (const type of types.data.types) {
                    client.animalData.breeds(type.name).then(async breeds => {
                        const typeResp = await client.animalData.type(type.name);
                        console.log({ type, breeds: breeds.data, typeResp: typeResp.data });
                    });
                }
            })
            .catch(console.error);

        client.animal
            .search()
            .then(resp => {
                console.log(resp.data);
                setAnimals(resp.data.animals);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {animals.map((animal: Record<"id", number>) => {
                    return <p key={animal.id}>{animal.id}</p>;
                })}
            </header>
        </div>
    );
}
