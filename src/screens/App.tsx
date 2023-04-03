import Header from "../components/layout/Header";
import { Col, Container, Row } from "react-bootstrap";
import BeholdEmbed from "../components/instagram/BeholdEmbed";
import AdvertModal from "../components/modals/AdvertModal";

function App() {
    return (
        <>
            <Header />
            <Container className="p-3">
                <Row>
                    <Col sm={{ offset: 1, span: 10 }}>
                        <BeholdEmbed />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
