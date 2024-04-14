import {ShopItemID} from "../types/ShopItem.ts";
import ShopItemGroupDB from "../types/ShopItemGroupDB.ts";
import React from "react";

export default function useShopItemGroup(id: ShopItemID) {
    return React.useMemo(() => (
        ShopItemGroupDB.find((group) => group.find((item) => item.id === id))
    ), [id]);
}