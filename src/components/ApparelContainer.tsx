import { Col, Container, Row } from "react-bootstrap";
import MenuItemCard from "./MenuItemCard.tsx";
import ApparelItems from "../types/ApparelItems.ts";
import { FaShirt } from "react-icons/fa6";

export default function ApparelContainer() {
    return (
        <div className={"bg-light shadow-sm pt-5 pb-5 mt-5"}>
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
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={"d-flex flex-wrap justify-content-center mt-3"}>
                            {ApparelItems.map((item, index) => (
                                <MenuItemCard
                                    key={index}
                                    item={item}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}