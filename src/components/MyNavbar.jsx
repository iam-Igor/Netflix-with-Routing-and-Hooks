import { Component } from "react";
import { Col, Container, Row, Navbar, Dropdown, Form } from "react-bootstrap";
import MainContent from "./MainContent";
import Myheader from "./MyHeader";
import { Link } from "react-router-dom";

class MyNavbar extends Component {
  state = {
    inputvalue: "",

    searchIndex: "",
  };

  render() {
    return (
      <Container fluid className=" p-0">
        <Container fluid className="p-0 sticky-top">
          <Row>
            <Col className="p-0">
              <Navbar expand="md" className="bg-black">
                <Container fluid>
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
                      <li className="nav-item">
                        <a
                          className="nav-link active text-white"
                          aria-current="page"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
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
                    <Col md={3} lg={4} className="d-flex, offset-md-2 mt-2">
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Search for movies or TVseries"
                            value={this.state.searchIndex}
                            onChange={(e) => {
                              this.setState({ searchIndex: e.target.value });
                            }}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        ></Form.Group>
                      </Form>
                    </Col>
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
                          <Dropdown.Item eventKey="3">
                            Notifications
                          </Dropdown.Item>
                        </Dropdown.Menu>
                        <Dropdown.Toggle
                          as={"CustomToggle"}
                          id="dropdown-custom-toggle"
                        >
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
                </Container>
              </Navbar>
            </Col>
          </Row>
          <Myheader />
        </Container>
        <MainContent search={this.state.searchIndex} />
      </Container>
    );
  }
}

export default MyNavbar;
