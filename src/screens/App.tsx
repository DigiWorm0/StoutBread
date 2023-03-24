import { Col, Container, Row } from 'react-bootstrap';
import BeholdWall from '../components/instagram/BeholdWall';
import Header from '../components/layout/Header';

function App() {
    return (
        <>
            <Header />
            <Container className="p-3">
                <Row>
                    <Col sm={{ offset: 1, span: 10 }}>
                        <BeholdWall />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
