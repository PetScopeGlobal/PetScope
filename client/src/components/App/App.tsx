import "../../styles/App.css";
import Home from "../../pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "../../pages/Test/Test";
import Pets from "../../pages/Pets/Pets";
import { PetContext } from "../../context/PetProvider";

import { Client } from "@petfinder/petfinder-js";
import { useEffect, useState } from "react";
import { AnimalResponse, OrganisationResponse } from "../../types";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;
if (!(REACT_APP_CLIENT_ID && REACT_APP_CLIENT_SECRET)) {
    throw new Error("Missing REACT_APP_CLIENT_ID and/or REACT_APP_CLIENT_SECRET env variable");
}

const client = new Client({
    apiKey: REACT_APP_CLIENT_ID,
    secret: REACT_APP_CLIENT_SECRET,
});

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pets" element={<Pets />} />
                <Route path="/pet/:petId" element={<Home />} />
                <Route path="/orgs" element={<Home />} />
                <Route path="/org/:orgId" element={<Home />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
}
