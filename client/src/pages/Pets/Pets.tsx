// React imports
import React, { useContext, useEffect, useState } from "react";
// mui imports
import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Box,
    Typography,
} from "@mui/material";
// context imports
import { PetContext } from "../../context/PetProvider";
// type imports
import { Animal } from "../../types/api";

export default function Pets() {
    const petsArray = useContext(PetContext);
    const [filteredPets, setFilteredPets] = useState<Animal[] | undefined>();
    useEffect(() => {
        if (petsArray) {
            setFilteredPets(petsArray.filter(pet => pet.status === "adoptable"));
        }
    }, []);

    if (petsArray !== null) {
        return (
            <section>
                <h2>Pets</h2>
                <Box
                    sx={{
                        display: "inline-flex",
                        flexFlow: "row wrap",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    {petsArray.map((pet, index) => {
                        console.log(pet);
                        const petDataArray: {
                            heading: string;
                            innerText: string;
                        }[] = [
                            { heading: "age", innerText: pet.age },
                            {
                                heading: "gender",
                                innerText: pet.gender ? `${pet.gender}` : "Unknown",
                            },
                            {
                                heading: "breed",
                                innerText: pet.breeds.secondary
                                    ? `${pet.breeds.primary}/${pet.breeds.secondary}`
                                    : `${pet.breeds.primary}`,
                            },
                        ];
                        const petImage = pet.primary_photo_cropped
                            ? pet.primary_photo_cropped.full
                            : "assets/images/placeholder-image.png";
                        return (
                            <Card
                                key={index}
                                sx={{
                                    width: "265px",
                                    height: "50vh",
                                    margin: "15px",
                                    padding: 2,
                                    borderRadius: 6,
                                }}
                            >
                                <CardActionArea
                                    sx={{
                                        display: "flex",
                                        flexFlow: "column",
                                        justifyContent: "space-between",
                                        height: "100%",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        src={petImage}
                                        sx={{
                                            boxSizing: "border-box",
                                            maxWidth: "100%",
                                            maxHeight: "60%",
                                            borderRadius: 6,
                                            placeSelf: "flex-start",
                                        }}
                                    />
                                    <CardHeader
                                        title={pet.name}
                                        subheader={pet.type}
                                        sx={{
                                            textAlign: "center",
                                            color: "var(--main)",
                                            padding: "4px 0",
                                        }}
                                    />
                                    <CardContent sx={{ textAlign: "center", padding: "4px 0" }}>
                                        <section>
                                            {petDataArray.map((pet, index) => {
                                                return (
                                                    <article className={pet.heading} key={index}>
                                                        <Typography
                                                            align="center"
                                                            sx={{
                                                                display: "inline",
                                                                textTransform: "uppercase",
                                                                color: "var(--main)",
                                                            }}
                                                        >
                                                            {pet.heading}:&nbsp;
                                                        </Typography>
                                                        <Typography
                                                            align="center"
                                                            sx={{
                                                                display: "inline",
                                                            }}
                                                        >
                                                            {pet.innerText}
                                                        </Typography>
                                                    </article>
                                                );
                                            })}
                                        </section>
                                        {/* <article className="breed">
                                            <Typography
                                                align="center"
                                                sx={{
                                                    display: "inline",
                                                    textTransform: "uppercase",
                                                    color: "var(--main)",
                                                }}
                                            >
                                                Breed:&nbsp;
                                            </Typography>
                                            <Typography align="center" sx={{ display: "inline" }}>
                                                {pet.breeds.secondary
                                                    ? `${pet.breeds.primary}/${pet.breeds.secondary}`
                                                    : `${pet.breeds.primary}`}
                                            </Typography>
                                        </article> */}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        );
                    })}
                </Box>
            </section>
        );
    }
    return <div style={{ color: "red" }}>Error</div>;
}
