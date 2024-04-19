import {Col, Container, Row} from "react-bootstrap";
import {GiSlicedBread} from "react-icons/gi";
import ShopItemCards from "./ShopItem/ShopItemCards.tsx";
import useShopItemsOfType from "../hooks/useShopItemsOfType.ts";
import {LuWheatOff} from "react-icons/lu";

export default function MenuContainer() {
    const itemIDs = useShopItemsOfType("Menu");

    return (
        <>
            <Container>
                <Row className={"mt-5"}>
                    <Col className={"text-center"}>
                        <GiSlicedBread
                            id={"menu"}
                            size={42}
                            className={"mb-3 text-primary"}
                        />
                        <h5 className={"text-primary fw-bold"}>
                            Our Menu
                        </h5>
                        <h2 className={"mb-0"}>
                            Stout Bread Delicacies
                        </h2>
                        <small className={"text-muted"}>
                            <LuWheatOff
                                size={12}
                                style={{marginBottom: 2}}
                                className={"me-1"}
                            />
                            Gluten-free is available in full-loaves upon request
                        </small>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ShopItemCards
                            itemIDs={itemIDs}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}