import ShopItemCard from "./ShopItemCard.tsx";
import React from "react";
import ShopItemModal from "./ShopItemModal.tsx";
import {ShopItemID} from "../../types/ShopItem.ts";

export interface ShopItemCardsProps {
    itemIDs: ShopItemID[];
}

export default function ShopItemCards(props: ShopItemCardsProps) {
    const [selectedItemID, setSelectedItemID] = React.useState<ShopItemID | undefined>(undefined);
    const [modalVisible, setModalVisible] = React.useState(false)

    return (
        <>
            <div className={"d-flex flex-wrap justify-content-center mt-3"}>
                {props.itemIDs.map((itemID, index) => (
                    <ShopItemCard
                        key={index}
                        itemID={itemID}
                        onClick={() => {
                            setSelectedItemID(itemID)
                            setModalVisible(true)
                        }}
                    />
                ))}
            </div>
            <ShopItemModal
                itemID={selectedItemID}
                isVisible={modalVisible}
                setIsVisible={setModalVisible}
                setSelectedItemID={setSelectedItemID}
            />
        </>
    )
}