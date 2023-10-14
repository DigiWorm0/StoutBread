import { Button, Col, Container, Row } from "react-bootstrap";
import { IoLogoVenmo } from "react-icons/io5";
import { BiLogoPaypal } from "react-icons/bi";
import { SiCashapp } from "react-icons/si";
import { MINI_LOAF_PRICE, WHOLE_LOAF_PRICE } from "../types/Constants.ts";

export default function HeroHeader() {
    return (
        <div
            style={{
                backgroundImage: "url(/images/Background.png)",
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
                        <a href={"#"} className={"nav-link-anim m-3"}>Home</a>
                        <a href={"#menu"} className={"nav-link-anim m-3"}>Menu</a>
                        <a href={"#posts"} className={"nav-link-anim m-3"}>Posts</a>
                    </div>
                </div>
                <Container className={"ms-lg-3 mt-4 mb-md-5"}>
                    <Row>
                        <Col className={"text-center text-lg-start"}>
                            <h1>
                                We bake <b className={"text-primary"}>Bread</b>
                            </h1>
                            <h4 className={"d-none d-lg-block"}>
                                ${MINI_LOAF_PRICE} Mini Loaf &bull; ${WHOLE_LOAF_PRICE} Regular Loaf &bull;
                                Free Delivery Around UW-Stout
                            </h4>
                            <h5 className={"d-block d-lg-none"}>
                                ${MINI_LOAF_PRICE} Mini Loaf<br />
                                ${WHOLE_LOAF_PRICE} Regular Loaf<br />
                                Free Delivery Around UW-Stout
                            </h5>
                            <Button
                                variant="primary"
                                href={"https://www.instagram.com/uwstoutbread/"}
                                className={"mt-3 mb-3 fs-5 fw-bold ps-5 pe-5"}
                                style={{ width: 250 }}
                            >
                                DM to Order &gt;
                            </Button>
                            <div className={"text-center m-auto m-lg-0"} style={{ width: 250 }}>
                                <a
                                    href={"https://venmo.com/code?user_id=3425859289481216550&created=1663906241.1685271&printed=1"}
                                    className={"m-2 btn-muted"}
                                >
                                    <IoLogoVenmo size={32} />
                                </a>
                                <a
                                    href={"https://www.paypal.me/Stoutbread?locale.x=en_US"}
                                    className={"m-2 btn-muted"}
                                >
                                    <BiLogoPaypal size={32} />
                                </a>
                                <a
                                    href={"https://cash.app/$StoutBread"}
                                    className={"m-2 btn-muted"}
                                >
                                    <SiCashapp size={32} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}