import { Card } from "react-bootstrap";
import React from "react";
import MenuItemModal from "./MenuItemModal.tsx";
import { MenuItem } from "../types/MenuItems.ts";

export interface MenuItemProps {
    item: MenuItem;
}

export default function MenuItemCard(props: MenuItemProps) {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const { item } = props;
    const imgURL = `/images/menu/${item.id}.jpg`;

    return (
        <>
            <Card
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsModalVisible(true)}
                className={"m-1 card-hover"}
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
                    style={{
                        maxHeight: 250,
                        objectFit: "cover",
                        aspectRatio: "1 / 1",
                    }}
                />
                <Card.Body>
                    <Card.Title className={"fw-bold fs-5"}>
                        {item.name}
                    </Card.Title>
                    <Card.Subtitle className={"fw-bold text-primary"} style={{ fontSize: 14 }}>
                        {item.tagline}
                    </Card.Subtitle>
                    <Card.Text className={"fs-6 mt-1"}>
                        {item.shortDescription}
                    </Card.Text>
                </Card.Body>
            </Card>
            <MenuItemModal
                item={item}
                isVisible={isModalVisible}
                setIsVisible={setIsModalVisible}
            />
        </>
    )
}