import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Convos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row>
          <Col>
            <h1>Convos</h1>
          </Col>
        </Row>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
}
