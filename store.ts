export interface SmallCardData {
    img: string,
    location: string,
    distance: string;
}

export interface MediumCardData {
    img: string,
    title: string;
}

export interface LargeCardProps {
    img: string,
    title: string,
    description: string,
    buttonText: string;
}

export interface SearchResult {
    img: string,
    location: string,
    title: string,
    description: string,
    star: number,
    price: string,
    total: string,
    long: number,
    lat: number;
}

export interface SearchProps {
    searchResults: [
        SearchResult
    ];
}