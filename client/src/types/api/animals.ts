import { BreedEnums } from "./breeds";
import { CoatsEnum } from "./coats";
import { ColoursEnum } from "./colours";
import { AddressInfo, LinkHref, PhotoInfo } from "./common";
import { GenderEnums } from "./genders";

type AgeEnum = "Baby" | "Young" | "Adult" | "Senior";
type ISO_Timestamp = `${number}-${number}-${number}T${number}:${number}:${number}+0000`;
type SizeEnum = "Small" | "Medium" | "Large" | "Extra Large";
type StatusEnum = "adoptable" | "adopted" | "found";

type TypeEnum =
    | "Barnyard"
    | "Bird"
    | "Cat"
    | "Dog"
    | "Horse"
    | "Rabbit"
    | "Scales, Fins & Other"
    | "Small & Furry";

interface AttributeInfo {
    declawed: boolean | null;
    house_trained: boolean;
    shots_current: boolean;
    spayed_neutered: boolean;
    special_needs: boolean;
}

interface ContactInfo {
    address: AddressInfo;
    email: string | null;
    phone: string | null;
}

interface EnvironmentInfo {
    cats: true | null;
    children: true | null;
    dogs: true | null;
}

interface VideoInfo {
    embed: string;
}

interface LinkInfo {
    organization: LinkHref;
    self: LinkHref;
    type: LinkHref;
}

interface AnimalInfo {
    age: AgeEnum;
    attributes: AttributeInfo;
    contact: ContactInfo;
    description: string | null;
    distance: number | null;
    environment: EnvironmentInfo;
    id: number;
    name: string;
    organization_animal_id: string | null;
    organization_id: string;
    photos: PhotoInfo[];
    primary_photo_cropped: PhotoInfo | null;
    published_at: ISO_Timestamp;
    size: SizeEnum;
    species: string;
    status: StatusEnum;
    status_changed_at: ISO_Timestamp;
    tags: string[];
    type: TypeEnum;
    url: string;
    videos: VideoInfo[];
    _links: LinkInfo;
}

interface AnimalSpecificInfo<Type extends TypeEnum> {
    species: Type;
    breeds: {
        primary: BreedEnums[Type] | null;
        secondary: BreedEnums[Type] | null;
        mixed: boolean;
        unknown: boolean;
    };
    coats: CoatsEnum[Type];
    colors: {
        primary: ColoursEnum[Type] | null;
        secondary: ColoursEnum[Type] | null;
        tertiary: ColoursEnum[Type] | null;
    };
    gender: GenderEnums[Type];
}

type Barnyard = AnimalInfo & AnimalSpecificInfo<"Barnyard">;
type Bird = AnimalInfo & AnimalSpecificInfo<"Bird">;
type Cat = AnimalInfo & AnimalSpecificInfo<"Cat">;
type Dog = AnimalInfo & AnimalSpecificInfo<"Dog">;
type Horse = AnimalInfo & AnimalSpecificInfo<"Horse">;
type Rabbit = AnimalInfo & AnimalSpecificInfo<"Rabbit">;
type ScalesFinsOther = AnimalInfo & AnimalSpecificInfo<"Scales, Fins & Other">;
type SmallAndFurry = AnimalInfo & AnimalSpecificInfo<"Small & Furry">;

type Animal = Barnyard | Bird | Cat | Dog | Horse | Rabbit | ScalesFinsOther | SmallAndFurry;
export default Animal;
