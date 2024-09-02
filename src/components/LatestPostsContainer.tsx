import {Col, Container, Row} from "react-bootstrap";
import BeholdEmbed from "./BeholdEmbed.tsx";
import {AiOutlineInstagram} from "react-icons/ai";

export default function LatestPostsContainer() {
    return (
        <>
            <Container fluid>
                <Row className={"ps-0 pe-0 mt-5"}>
                    <Col className={"text-center"}>
                        <a
                            href={"https://www.instagram.com/stout.bread/"}
                            className={"text-decoration-none text-dark"}
                        >
                            <AiOutlineInstagram
                                id={"posts"}
                                size={42}
                                className={"mb-3 text-primary"}
                            />
                            <h5 className={"text-primary fw-bold"}>
                                Latest Posts
                            </h5>
                            <h2 className={""}>
                                @Stout.Bread
                            </h2>
                        </a>
                        <hr/>
                    </Col>
                </Row>
            </Container>
            <BeholdEmbed/>
        </>
    );
}