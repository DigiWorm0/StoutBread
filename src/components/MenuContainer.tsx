import { Col, Container, Row } from "react-bootstrap";
import menuItems from "../types/MenuItems.ts";
import MenuItemCard from "./MenuItemCard.tsx";
import { GiSlicedBread } from "react-icons/gi";

export default function MenuContainer() {
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
                        <h2 className={""}>
                            Stout Bread Delicacies
                        </h2>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={"d-flex flex-wrap justify-content-center mt-3"}>
                            {menuItems.map((item, index) => (
                                <MenuItemCard
                                    key={index}
                                    item={item}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}