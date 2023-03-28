import { Col, Container, Row } from 'react-bootstrap';
import BeholdEmbed from '../components/BeholdEmbed';
import Header from '../components/layout/Header';

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
