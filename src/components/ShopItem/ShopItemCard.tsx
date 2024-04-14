import {Card} from "react-bootstrap";
import React from "react";
import {ShopItemID} from "../../types/ShopItem.ts";
import useShopItem from "../../hooks/useShopItem.ts";

export interface ShopItemProps {
    itemID: ShopItemID;
    onClick: () => void;
}

export default function ShopItemCard(props: ShopItemProps) {
    const item = useShopItem(props.itemID);
    const [isHovered, setIsHovered] = React.useState(false);

    const imgURL = `/images/shop/${item?.id}.jpg`;

    return (
        <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={props.onClick}
            className={"m-1 card-hover rounded-4"}
            style={{
                width: 300,
                transition: "all 0.2s",
                transform: isHovered ? "scale(1.03)" : "scale(1)",
                boxShadow: isHovered ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",
                cursor: "pointer",
            }}
        >
            <Card.Img
                variant={"top"}
                src={imgURL}
                className={"rounded-top-4"}
                style={{
                    maxHeight: 250,
                    objectFit: "cover",
                    aspectRatio: "1 / 1",
                }}
            />
            <Card.Body>
                <Card.Title className={"fw-bold fs-5"}>
                    {item?.name}
                </Card.Title>
                <Card.Subtitle className={"fw-bold text-primary"} style={{fontSize: 14}}>
                    {item?.tagline}
                </Card.Subtitle>
                <Card.Text className={"fs-6 mt-1"}>
                    {item?.shortDescription}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}