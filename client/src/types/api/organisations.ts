import { AddressInfo, LinkHref, PhotoInfo } from "./common";

interface AdoptionInfo {
    policy: string | null;
    url: string | null;
}

interface OpeningHoursInfo {
    monday: string | null;
    tuesday: string | null;
    wednesday: string | null;
    thursday: string | null;
    friday: string | null;
    saturday: string | null;
    sunday: string | null;
}

interface SocialMediaInfo {
    facebook: string | null;
    instagram: string | null;
    pinterest: string | null;
    twitter: string | null;
    youtube: string | null;
}

interface LinkInfo {
    animals: LinkHref;
    self: LinkHref;
}

export default interface Organisation {
    address: AddressInfo;
    adoption: AdoptionInfo;
    distance: number | null;
    email: string;
    hours: OpeningHoursInfo;
    id: string;
    mission_statement: string | null;
    name: string;
    phone: string | null;
    photos: PhotoInfo[];
    social_media: SocialMediaInfo;
    url: string;
    website: string | null;
    _links: LinkInfo;
}
