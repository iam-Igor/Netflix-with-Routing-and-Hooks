import { Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

// OGNI GALLERY RICEVE TRAMITE PROP L'ARRAY DA MAPPARE

const Gallery = (props) => {
  const newLocation = useNavigate();

  return (
    <Row className="movie-row position-relative">
      <i className="bi bi-chevron-left text-white position-absolute fs-1 left"></i>
      {props.data.map((movie, index) => (
        <Col
          key={index}
          lg={2}
          md={3}
          xs={6}
          className="movie-column"
          onClick={() => newLocation("/Details/" + movie.imdbID)}
        >
          <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
          <p className="text-white">{movie.Title}</p>
        </Col>
      ))}
      <i className="bi bi-chevron-right text-white position-absolute fs-1 right"></i>
    </Row>
  );
};

export default Gallery;
