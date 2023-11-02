import { Link } from "react-router-dom";
import { Navbar, Col, Row, Dropdown, Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <Navbar expand="md" className="bg-black ">
        <Navbar.Brand href="#">
          <img
            src="https://www.pxpng.com/public/uploads/preview/-11621687998ytrgnduxoh.png"
            alt="Logo"
            width="100"
            height="45"
            className="d-inline-block align-text-top"
          />
        </Navbar.Brand>

        <Navbar.Collapse className="align-items-center">
          <ul className="navbar-nav">
            <Link className="nav-item" as="li" to="/">
              <a className="nav-link active text-white">Home</a>
            </Link>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Tv Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-disabled="true">
                Recently Added
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" aria-disabled="true">
                My List
              </a>
            </li>
          </ul>
          <Col md={3} lg={4} className="d-flex, offset-md-2 mt-2"></Col>
        </Navbar.Collapse>
        <Row className=" me-1">
          <Col className="text-white d-flex flex-row p-0 align-items-center">
            <p className="navFont text-white mb-0 me-2">KIDS</p>
            <i className="bi bi-bell-fill me-2"></i>
          </Col>
          <Col className="p-0">
            <Dropdown drop="start">
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1" as={Link} to="/Account">
                  Account
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" href="#">
                  Language
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">Notifications</Dropdown.Item>
              </Dropdown.Menu>
              <Dropdown.Toggle as={"custom-toggle"} id="dropdown-custom-toggle">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                  alt="Logo"
                  width="30"
                  height="30"
                  className="d-inline-block align-text-top"
                />
              </Dropdown.Toggle>
            </Dropdown>
          </Col>
        </Row>
      </Navbar>
      <Container className="flex-grow-2 h-100">
        <h1 className="text-center">404-PAGE NOT FOUND</h1>
      </Container>
    </>
  );
};
export default NotFound;
