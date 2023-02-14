import { Animal, Organisation } from "./api";

interface PaginationInfo {
    count_per_page: number;
    current_page: number;
    total_count: number;
    total_pages: number;
}

type Paginated<T extends string, ResultType> = Record<"pagination", PaginationInfo> &
    Record<T, ResultType[]>;

type AnimalResponse = Paginated<"animals", Animal>;
type OrganisationResponse = Paginated<"organizations", Organisation>;

export type { AnimalResponse, OrganisationResponse };
