import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { IoLogoVenmo } from 'react-icons/io5';
import { SiCashapp } from 'react-icons/si';
import { FaPaypal } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import NavButton from './NavButton';

export default function Header() {
    return (
        <>
            <Container
                fluid
                className='pt-5'
                style={{
                    backgroundColor: "rgb(144, 187, 255)",
                }}
            >
                <Row>
                    <Col
                        className="text-center">
                        <a
                            href="https://www.instagram.com/uwstoutbread/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/logo.png"
                                style={{
                                    width: "100%",
                                    maxWidth: 220,
                                    padding: 10,
                                }}
                                alt="UW-Stout Bread"
                            />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center pt-2">
                        <h3 className="fw-bold mb-0">
                            Stout Bread
                        </h3>
                        <a
                            className="text-muted text-decoration-none"
                            href="https://www.instagram.com/uwstoutbread/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @uwstoutbread
                        </a>
                        <p>
                            We bake bread &middot; Banana, Cinnamon Sugar, Lemon &middot; Mini or full size &middot; $12 fresh to you
                        </p>
                    </Col>
                </Row>
            </Container>
            <Navbar
                className='pt-1 pb-1 mb-1'
                style={{
                    backgroundColor: "rgb(116, 170, 255)",
                    boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.2)"
                }}
            >
                <Container className="justify-content-center">
                    <Nav>
                        <NavButton
                            name="Instagram"
                            href="https://www.instagram.com/uwstoutbread/"
                            icon={<TiSocialInstagram className='mb-1' size={20} />}
                        />
                        <NavButton
                            name="Venmo"
                            href="https://venmo.com/code?user_id=3425859289481216550&created=1663906241.1685271&printed=1"
                            icon={<IoLogoVenmo className='mb-1' size={20} />}
                        />
                        <NavButton
                            name="Paypal"
                            href="https://www.paypal.me/Stoutbread?locale.x=en_US"
                            icon={<FaPaypal className='mb-1' size={20} />}
                        />
                        <NavButton
                            name="Cash App"
                            href="https://cash.app/$StoutBread"
                            icon={<SiCashapp className='mb-1' size={20} />}
                        />
                    </Nav>
                </Container>
            </Navbar>
        </>
    );


}