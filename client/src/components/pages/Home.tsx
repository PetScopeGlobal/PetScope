import React, { useState } from "react";

type filterSectionProps = {
    mappingArray: {displayText: string, valueText: string}[];
    elementName: string;
    filterValue?: undefined | string;
    setFilterValue: React.Dispatch<React.SetStateAction<undefined|string>>;
}

function FilterSection(props: filterSectionProps) {
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        props.setFilterValue(e.target.value)
    }
    return (
    <section className="filter-section-container">
        <h2>Filter By</h2>
        <select name={props.elementName} id={props.elementName} onChange={handleChange}>
            {props.mappingArray.map((item) => {
                return (
                    <option value={item.valueText}>{item.displayText}</option>
                )
            })}
        </select>
    </section>
    )
}

export function Home() {
    const [petClassName, setPetClassName] = useState("home-pet-org")
    const [orgClassName, setOrgClassName] = useState("home-pet-org")
    const [showPetOrg, setShowPetOrg] = useState("none")
    const [filterValue, setFilterValue] = useState<undefined|string>()
    /*
    TODO: 
    [ ] Make buttons for Pet and Org
        - Clicking one will change the state of the webpage to show pet/org depending
        - Clicking one should also highlight that one
    [ ] Make dropdown component for Species/type filter using species/type 
    [ ] Dropdown component for country filter
    [ ] Make search button that redirects to /pets with filter params saved in context
    */

    const speciesArray = [
        {
            displayText: "Barnyard",
            valueText: "Barnyard",
            
        }, 
        {
            displayText: "Bird",
            valueText: "Bird",
        }, 
        {
            displayText: "Cat",
            valueText: "Cat",
        }, 
        {
            displayText: "Dog",
            valueText: "Dog",
        }, 
        {
            displayText: "Horse",
            valueText: "Horse",

        }, 
        {
            displayText: "Rabbit",
            valueText: "Rabbit",
        }, 
        {
            displayText: "Scales, Fins & Other",
            valueText: "Scales, Fins & Other",
        }, 
        {
            displayText: "Small & Furry",
            valueText: "Small & Furry",
        }
    ];
    const countryArray = [
        {
            displayText: "United States",
            valueText: "US",
        },
                {
            displayText: "Canada",
            valueText: "CA",
        },
                {
            displayText: "Mexico",
            valueText: "MX",
        },
    ]

    function handleClickPet() {
        // add highlighted class to this element
        setPetClassName("home-pet-org highlighted")
        // remove highlighted class from other element
        setOrgClassName("home-pet-org lowlighted")
        // set webpage state to show value of button
        setShowPetOrg("pet")
    }

    function handleClickOrg() {
        // add highlighted class to this element
        setOrgClassName("home-pet-org highlighted")
        // remove highlighted class from other element
        setPetClassName("home-pet-org lowlighted")
        // set webpage state to show value of button
        setShowPetOrg("org")
    }
    function handleSearch() {
        // save {{filterValue}} to context
        // ? future: save filter presets to localStorage
        // redirect to /pets
    }

    if (showPetOrg === "none") {
        return (
        <main>
            <h2>I'm looking for a...</h2>
            <div className="home-pet-org-container">
                
                <button className={petClassName} onClick={handleClickPet}>Pet</button>
                <button className={orgClassName} onClick={handleClickOrg}>Organisation</button>
            </div>
        </main>
        )
    }

    return (
        <main>
            <h2>I'm looking for a...</h2>
            <div className="home-pet-org-container">
                
                <button className={petClassName} onClick={handleClickPet}>Pet</button>
                <button className={orgClassName} onClick={handleClickOrg}>Organisation</button>
            </div>
            {showPetOrg === "pet" ? //when showPetOrg is "pet", render pet filter elements, else render org
            <FilterSection mappingArray={speciesArray} elementName="species" setFilterValue={setFilterValue} /> :
            <FilterSection mappingArray={countryArray} elementName="country" setFilterValue={setFilterValue}/>
            }
        <button className="home-search-btn" onClick={handleSearch}>Search</button>
        </main>
    )
}
