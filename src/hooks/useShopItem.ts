import {ShopItemID} from "../types/ShopItem.ts";
import ShopItemDB from "../db/ShopItemDB.ts";
import React from "react";

export default function useShopItem(id?: ShopItemID) {
    return React.useMemo(() => ShopItemDB.find((item) => item.id === id), [id]);
}