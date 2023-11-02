import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Form,
  Container,
  Navbar,
  Dropdown,
} from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const newLocation = useNavigate();

  const [moviedata, setMovieData] = useState({});
  const [allComments, setAllComments] = useState([]);
  const [formData, setFormData] = useState({
    comment: "",
    rate: "1",
  });
  const [areCommentsVisible, setareCommentsVisible] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const getMovieDetails = () => {
    fetch(`http://www.omdbapi.com/?apikey=556b8878&i=` + params.movieID)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.Error === "Incorrect IMDb ID.") {
          newLocation("/NotFound");
        }
        setMovieData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMovieComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + params.movieID,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzOTI5YWI0MDZiZTAwMTRiN2I3MjQiLCJpYXQiOjE2OTg5MjcyNTksImV4cCI6MTcwMDEzNjg1OX0.T4mM853gVZRuQpPukusMM97JZA-K-twAmm_Y6xf4qVA",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then(setisLoading(true))
      .then((comments) => {
        setAllComments(comments);
        setareCommentsVisible(!areCommentsVisible);
        console.log(comments);
        setTimeout(() => {
          setisLoading(false);
        }, 500);
        if (comments.length < 0) {
          setisLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  };

  const addComments = (e) => {
    const newComment = {
      comment: formData.comment,
      rate: formData.rate,
      elementId: params.movieID,
    };

    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzOTI5YWI0MDZiZTAwMTRiN2I3MjQiLCJpYXQiOjE2OTg5MjcyNTksImV4cCI6MTcwMDEzNjg1OX0.T4mM853gVZRuQpPukusMM97JZA-K-twAmm_Y6xf4qVA",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setFormData({
            comment: "",
            rate: "1",
          });
          setAllComments([...allComments, newComment]);
        } else {
          throw new Error();
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComments = (param) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + param, {
      method: "DELETE",

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzOTI5YWI0MDZiZTAwMTRiN2I3MjQiLCJpYXQiOjE2OTg5MjcyNTksImV4cCI6MTcwMDEzNjg1OX0.T4mM853gVZRuQpPukusMM97JZA-K-twAmm_Y6xf4qVA",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("commento eliminato");
          getMovieComments();
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovieDetails();
    if (!allComments) {
      getMovieComments();
    }
  }, [params.movieID]);

  return (
    <>
      <Row className="justify-content-center mt-3">
        <Col lg={6} md={3} xs={12}>
          <Card className="detail-card">
            <Card.Img variant="top" src={moviedata.Poster} />
            <Card.Body>
              <Card.Title>{moviedata.Title}</Card.Title>
              <Card.Text>
                <span className="fw-bold">Rating: </span>
                {moviedata.imdbRating}
              </Card.Text>
              <Card.Text className="fs-6">{moviedata.Plot}</Card.Text>
              <Card.Text className="fs-6">
                {" "}
                <span className="fw-bold">Actors: </span>
                {moviedata.Actors}
              </Card.Text>
              <Card.Text>
                <span className="fw-bold">Year: </span>
                {moviedata.Year}
                <span>-{moviedata.Runtime}</span>
              </Card.Text>
            </Card.Body>
            <div className="d-flex justify-content-start ms-2">
              <Button
                variant="danger"
                onClick={() => {
                  getMovieComments();
                }}
              >
                Show comments for this film
              </Button>
            </div>
          </Card>
        </Col>

        <Col className="d-flex flex-column">
          <ListGroup className="list-group-flush">
            <h4>Comments about this film:</h4>
            {isLoading && (
              <div className="d-flex justify-content-center">
                <div className="spinner my-5">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}

            {allComments.map((comment, index) => {
              return (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between"
                >
                  <div>
                    <i className="bi bi-person-circle me-2"></i>
                    {comment.comment}
                  </div>
                  <div
                    onClick={() => {
                      deleteComments(comment._id);
                    }}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <div>
            <Form
              className="mt-5"
              onSubmit={(e) => {
                addComments(e);
              }}
            >
              <Form.Control
                size="sm"
                type="text"
                placeholder="Comment here"
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
              />
              <Form.Select
                aria-label="ratings"
                size="sm"
                value={formData.rate}
                onChange={(e) =>
                  setFormData({ ...formData, rate: e.target.value })
                }
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
              <Button
                variant="warning"
                className="rounded-pill mt-2 fs-6"
                type="submit"
              >
                Add comment
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MovieDetails;
