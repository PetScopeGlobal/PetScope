type SpeciesEnum =
    | "Barnyard"
    | "Bird"
    | "Cat"
    | "Dog"
    | "Horse"
    | "Rabbit"
    | "Scales, Fins & Other"
    | "Small & Furry";

export default interface AnimalInfo {
    id: number;
    name: string;
    species: SpeciesEnum;
}
