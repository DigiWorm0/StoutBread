import {Col, Container, Row} from "react-bootstrap";
import {FaShirt} from "react-icons/fa6";
import ShopItemCards from "./ShopItem/ShopItemCards.tsx";
import useShopItemsOfType from "../hooks/useShopItemsOfType.ts";
import TrustPilotButton from "./TrustPilotButton.tsx";

export default function ApparelContainer() {
    const itemIDs = useShopItemsOfType("Apparel");

    return (
        <div className={"bg-light shadow-sm pt-5 pb-4 mt-5"}>
            <Container>
                <Row>
                    <Col className={"text-center"}>
                        <FaShirt
                            id={"apparel"}
                            size={42}
                            className={"mb-3 text-primary"}
                        />
                        <h5 className={"text-primary fw-bold"}>
                            Apparel Shop
                        </h5>
                        <h2>
                            Represent Stout Bread
                        </h2>
                        <p className={"text-muted"}>
                            All profits from apparel sales are donated to the Blue Devil Robotics club at UW-Stout
                        </p>
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
                <Row>
                    <Col className={"text-center mt-3"}>
                        <TrustPilotButton/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}