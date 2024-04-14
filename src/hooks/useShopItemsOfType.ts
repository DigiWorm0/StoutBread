import ShopItemDB from "../types/ShopItemDB.ts";
import React from "react";
import ShopItemType from "../types/ShopItemType.ts";

export default function useShopItemsOfType(type: ShopItemType) {
    return React.useMemo(() => (
        ShopItemDB.filter(item => item.type === type)
            .map((item => item.id))
    ), [type]);
}