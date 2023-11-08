export default interface ShopItem {
    id: string;
    name: string;
    tagline?: string;
    shortDescription: string;
    description?: string;
    types: {
        id: string;
        name: string;
        description: React.ReactNode;
        customPrice?: string;
        noNutrition?: boolean;
    }[];
    images: {
        id: string;
        type: string;
    }[];
}