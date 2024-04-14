import ShopItemType from "./ShopItemType.ts";
import ShopSubItem from "./ShopSubItem.ts";

export type ShopItemID = string;

export default interface ShopItem {
    id: ShopItemID;
    name: string;
    price: string;
    tagline: string;
    shortDescription: string;
    description?: string;
    subitems?: ShopSubItem[];
    type: ShopItemType;
}