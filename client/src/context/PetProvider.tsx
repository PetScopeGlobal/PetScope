import React, { createContext, ReactNode } from "react";
import { Animal } from "../types/api";
import { Client } from "@petfinder/petfinder-js";
import { useEffect, useState } from "react";
import { AnimalResponse } from "../types";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;
if (!(REACT_APP_CLIENT_ID && REACT_APP_CLIENT_SECRET)) {
    throw new Error("Missing REACT_APP_CLIENT_ID and/or REACT_APP_CLIENT_SECRET env variable");
}

const client = new Client({
    apiKey: REACT_APP_CLIENT_ID,
    secret: REACT_APP_CLIENT_SECRET,
});

export const PetContext = createContext<null | Animal[]>(null);

interface ProviderProps {
    children: ReactNode;
}

export function PetProvider({ children }: ProviderProps) {
    const options = { limit: 20 };

    const [animals, setAnimals] = useState<AnimalResponse["animals"]>([]);

    useEffect(() => {
        console.log("PetProvider useEffect triggered");

        client.animal
            .search(options)
            .then(resp => {
                console.log(resp.data);
                const data: AnimalResponse = resp.data;
                setAnimals(data.animals);
            })
            .catch(console.error);
    }, []);

    return <PetContext.Provider value={animals}>{children}</PetContext.Provider>;
}
