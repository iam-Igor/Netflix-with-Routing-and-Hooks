import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const Myheader = () => {
  return (
    <header>
      <Container fluid className="bg-black text-white pb-2">
        <Row className="align-items-center">
          <Col xs={4} md={2}>
            <h1 className="fs-5">TV Shows</h1>
          </Col>
          <Col className="col-2 offset-md-0">
            <Dropdown data-bs-theme="dark">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                className="btn btn-dark dropdown-toggle dropdown-toggle-split"
              >
                <span className="visually">Genres</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Dramatic</Dropdown.Item>
                <Dropdown.Item>Romantic</Dropdown.Item>
                <Dropdown.Item>Horror</Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item>Kids</Dropdown.Item>
                <Dropdown.Item>Documentaries</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <div className="col-3 col-md-1 offset-md-7 offset-3">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example "
            >
              <button
                type="button"
                className="btn btn-outline-secondary d-none d-md-block rounded-0"
              >
                <i className="bi bi-grid"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary d-none d-md-block active rounded-0"
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Myheader;
