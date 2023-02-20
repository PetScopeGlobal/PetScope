import React, { useState } from "react";

// components import
import FilterSection from "../../components/molecules/FilterSection/FilterSection";

// data import
import speciesData from './data/speciesData.json'
import countriesData from './data/countriesData.json'

// types import
import { filterArrayType } from "./data/data.types";

    /*
    TODO: 
    [ ] Make search button that redirects to /pets with filter params saved in context
    */

export default function Home() {
    const [petClassName, setPetClassName] = useState("home-pet-org")
    const [orgClassName, setOrgClassName] = useState("home-pet-org")
    const [showPetOrg, setShowPetOrg] = useState("none")
    const [filterValue, setFilterValue] = useState<undefined|string>()

    const speciesArray: filterArrayType[] = speciesData.speciesArray
    const countriesArray: filterArrayType[] = countriesData.countriesArray

    function handlePetClick() {
        // add highlighted class to this element
        setPetClassName("home-pet-org highlighted")
        // remove highlighted class from other element
        setOrgClassName("home-pet-org lowlighted")
        // set webpage state to show value of button
        setShowPetOrg("pet")
    }

    function handleOrgClick() {
        // reverse function of handlePetClick
        setOrgClassName("home-pet-org highlighted")
        setPetClassName("home-pet-org lowlighted")
        setShowPetOrg("org")
    }

    function handleSearchClick() {
        // save {{filterValue}} to context
        // ? future: save filter presets to localStorage
        // redirect to /pets
    }

    if (showPetOrg === "none") {
        return (
        <main>
            <h2>I'm looking for a...</h2>
            <div className="home-pet-org-container">
                
                <button className={petClassName} onClick={handlePetClick}>Pet</button>
                <button className={orgClassName} onClick={handleOrgClick}>Organisation</button>
            </div>
        </main>
        )
    }

    return (
        <main>
            <h2>I'm looking for a...</h2>
            <div className="home-pet-org-container">
                
                <button className={petClassName} onClick={handlePetClick}>Pet</button>
                <button className={orgClassName} onClick={handleOrgClick}>Organisation</button>
            </div>
            {showPetOrg === "pet" ? //when showPetOrg is "pet", render pet filter elements, else render org
            <FilterSection mappingArray={speciesArray} elementName="species" setFilterValue={setFilterValue} /> :
            <FilterSection mappingArray={countriesArray} elementName="country" setFilterValue={setFilterValue}/>
            }
        <button className="home-search-btn" onClick={handleSearchClick}>Search</button>
        </main>
    )
}
