import ShopItemType from "./ShopItemType.ts";

export type ShopItemID = string;

export default interface ShopItem {
    id: ShopItemID;
    name: string;
    price: string;
    tagline: string;
    shortDescription: string;
    description?: string;

    thumbnailID?: string;
    imageIDs: string[];

    type: ShopItemType;
    nutritionFacts?: boolean;
}