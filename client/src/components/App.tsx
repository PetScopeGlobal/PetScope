import { Client } from "@petfinder/petfinder-js";
import { useEffect, useState } from "react";
import "../styles/App.css";
import { AnimalResponse, OrganisationResponse } from "../types";
import Home from "./pages/Home/Home";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;
if (!(REACT_APP_CLIENT_ID && REACT_APP_CLIENT_SECRET)) {
    throw new Error("Missing REACT_APP_CLIENT_ID and/or REACT_APP_CLIENT_SECRET env variable");
}

const client = new Client({
    apiKey: REACT_APP_CLIENT_ID,
    secret: REACT_APP_CLIENT_SECRET,
});

export default function App() {
    // const [animals, setAnimals] = useState<AnimalResponse["animals"]>([]);
    // const [organisations, setOrganisations] = useState<OrganisationResponse["organizations"]>([]);

    // useEffect(() => {
    //     console.log("App useEffect triggered");

    //     client.animal
    //         .search({ limit: 10 })
    //         .then(resp => {
    //             console.log(resp.data);
    //             const data: AnimalResponse = resp.data;
    //             setAnimals(data.animals);
    //         })
    //         .catch(console.error);

    //     client.organization
    //         .search({ limit: 10 })
    //         .then(resp => {
    //             const data: OrganisationResponse = resp.data;
    //             setOrganisations(data.organizations);
    //         })
    //         .catch(console.error);
    // }, []);

    return (
        <Home/>
        // <div className="App">
        //     <header className="App-header">
        //         <h2>Animals</h2>
        //         {animals.map(animal => {
        //             return (
        //                 <section key={animal.id}>
        //                     <h3>{animal.type}</h3>
        //                     {animal.primary_photo_cropped && (
        //                         <img src={animal.primary_photo_cropped.small} alt="Pet"></img>
        //                     )}
        //                     <p>
        //                         {animal.name} - {animal.age}
        //                     </p>
        //                 </section>
        //             );
        //         })}
        //         <h2>Organisations</h2>
        //         {organisations.map(organisation => {
        //             return (
        //                 <section key={organisation.id}>
        //                     <h3>{organisation.name}</h3>
        //                     {organisation.photos[0] && (
        //                         <img src={organisation.photos[0].small} alt="Organisation"></img>
        //                     )}
        //                 </section>
        //             );
        //         })}
        //     </header>
        // </div>
    );
}
