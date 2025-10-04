import {Button, Col, Container, Row} from "react-bootstrap";
import PaymentIcons from "../Payment/PaymentIcons.tsx";
import React from "react";
import OrderModal from "../ShopItem/OrderModal.tsx";
import NavLink from "./NavLink.tsx";

export default function HeroHeader() {
    const [isOrderModalVisible, setOrderModalVisible] = React.useState(false);

    return (
        <>
            <div
                id={"top"}
                style={{
                    backgroundImage: "url(/images/Background.png)",
                    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 10px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                }}
                className={"ps-md-5 pe-md-5 pb-5 pt-5"}
            >
                <Container>
                    <div className={"d-flex flex-row text-center text-lg-start mt-md-4"}>
                        <div className={"m-auto m-lg-0"}>
                            <img
                                src="/images/Logo.png"
                                width={180}
                                height={180}
                                className="d-inline-block align-top"
                                alt="StoutBread Logo"
                            />
                        </div>
                        <div className={"m-auto ms-3 d-none d-lg-block"}>
                            <NavLink targetID={"top"}>Home</NavLink>
                            <NavLink targetID={"menu"}>Menu</NavLink>
                            <NavLink targetID={"apparel"}>Apparel</NavLink>
                            <NavLink targetID={"posts"}>Posts</NavLink>
                        </div>
                    </div>
                    <Container className={"ms-lg-3 mt-4 mb-md-5"}>
                        <Row>
                            <Col className={"text-center text-lg-start"}>
                                <h1>
                                    We bake <b className={"text-primary"}>Bread</b>
                                </h1>
                                <h4 className={"d-none d-lg-block"}>
                                    $4 Mini Loaf &bull; $14 Regular Loaf &bull;
                                    Free Delivery Around UW-Stout
                                </h4>
                                <h5 className={"d-block d-lg-none"}>
                                    $4 Mini Loaf<br/>
                                    $14 Regular Loaf<br/>
                                    Free Delivery Around UW-Stout
                                </h5>
                                <Button
                                    variant="primary"
                                    onClick={() => setOrderModalVisible(true)}
                                    className={"mt-3 mb-3 fs-5 fw-bold ps-5 pe-5"}
                                    style={{width: 250}}
                                >
                                    DM to Order &gt;
                                </Button>
                                <PaymentIcons/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>

            <OrderModal
                isVisible={isOrderModalVisible}
                setIsVisible={setOrderModalVisible}
            />
        </>
    )
}