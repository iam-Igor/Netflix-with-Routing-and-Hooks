import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer>
      <Container fluid className="bg-black">
        <Row>
          <Col className="text-white col-md-2 offset-md-2">
            <i className="bi bi-facebook text-secondary fs-4"></i>
            <i className="bi bi-instagram text-secondary fs-4"></i>
            <i className="bi bi-twitter text-secondary fs-4"></i>
            <i className="bi bi-youtube text-secondary fs-4"></i>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-secondary" xs={6} md={2}>
            <ul className="list-unstyled">
              <li>Audio and Subtitles</li>
              <li>Media Center</li>
              <li>Privacy</li>

              <li>Contact US</li>
            </ul>
          </Col>
          <Col className="text-secondary" xs={6} md={2}>
            <ul className="list-unstyled">
              <li>Audio Descriptions</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </Col>
          <Col className="text-secondary" xs={6} md={2}>
            <ul className="list-unstyled">
              <li>Help center</li>
              <li>Jobs</li>
              <li>Cookie Preferencies</li>
            </ul>
          </Col>
          <Col className="text-secondary" xs={6} md={2}>
            <ul className="list-unstyled">
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="offset-md-2">
            <button className="btn btn-outline-dark text-secondary border-secondary mb-2">
              Service Code
            </button>
            <Col>
              <p className="text-secondary footFont text-center text-md-start">
                © 1997-2019 Netflix, Inc.
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
