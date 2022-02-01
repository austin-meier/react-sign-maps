export interface ExploreData {
    img: string;
    location: string;
    distance: string;
}
  
export interface CardProps {
    exploreData: Array<ExploreData>;
}