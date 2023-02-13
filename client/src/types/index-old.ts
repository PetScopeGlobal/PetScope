export interface PaginationInfo {
    count_per_page: number;
    current_page: number;
    total_count: number;
    total_pages: number;
    _links: {
        next: {
            href: string;
        };
    };
}

type GenderEnum = "Male" | "Female";
type AgeEnum = "Baby" | "Young" | "Adult" | "Senior";
type SizeEnum = "Small" | "Medium" | "Large" | "Extra Large";
type CoatEnum = "Short" | "Medium" | "Long" | "Curly" | "Hairless" | "Wire" | null;

export interface AnimalResponse {
    animals: AnimalData[];
    pagination: PaginationInfo;
}

interface AnimalAttributes {
    declawed: boolean | null;
    house_trained: boolean;
    shots_current: boolean;
    spayed_neutered: boolean;
    special_needs: boolean;
}

interface BreedInfo {
    mixed: boolean;
    primary: string;
    secondary: string | null;
    unknown: boolean;
}

interface ColourInfo {
    primary: string | null;
    secondary: string | null;
    tertiary: string | null;
}

interface AddressInfo {
    address1: string | null;
    address2: string | null;
    city: string;
    country: string;
    postcode: string;
    state: string;
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

interface PhotoInfo {
    full: string;
    large: string;
    medium: string;
    small: string;
}

interface AnimalData {
    age: AgeEnum;
    attributes: AnimalAttributes;
    breeds: BreedInfo;
    coat: CoatEnum;
    colors: ColourInfo;
    contact: ContactInfo;
    description: string;
    distance: number | null;
    environment: EnvironmentInfo;
    gender: GenderEnum;
    id: number;
    name: string;
    organization_animal_id: string | null;
    organiszation_id: string;
    photos: PhotoInfo[];
    primary_photo_cropped: PhotoInfo;
    published_at: `${number}-${number}-${number}T${number}:${number}:${number}+0000`;
    size: SizeEnum;
}
