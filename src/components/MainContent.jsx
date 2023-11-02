import React, { Component } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import Gallery from "./Gallery";

class MainContent extends Component {
  // INIZIALIZZO TANTI ARRAY VUOTI QUANTE SONO LE ROW DA VISUALIZZARE NEL MAIN
  state = {
    Search1: [],
    Search2: [],
    Search3: [],
    Search4: [],
    Search5: [],
    Search6: [],
    isLoading: true,
    isThereAnError: false,
    errorToShow: "",
    searchIndex: this.props.search,
  };

  //   USO I PARAMETRI DELLA FUNZIONE COME ENDPOINT DELLA URL E NOME DELL'ARRAY DA MAPPARE NEL .THEN

  getMovies = (searchIndex, StateName) => {
    fetch(`http://www.omdbapi.com/?apikey=556b8878&s=${searchIndex}`)
      .then((res) => {
        if (res.ok) {
          console.log("res ok!", res);
          return res.json();
        } else if (res.status === 400) {
          throw new Error("400 - Bad request");
        } else if (res.status === 401) {
          throw new Error("401 - Unauthorized");
        } else if (res.status === 401) {
          throw new Error("404 - Not Found");
        } else if (res.status === 408) {
          throw new Error("408 - Request Timeout");
        } else if (res.status === 429) {
          throw new Error("429 - Too Many Requests");
        } else if (res.status === 500) {
          throw new Error("500 - Internal Server Error");
        } else if (res.status === 502) {
          throw new Error("502 - Bad Gateway");
        } else if (res.status === "failed") {
          throw new Error("Error in fetching data");
        } else {
          throw new Error("Generic error, try again later");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          // STATE NAME ASSUMERA IL VALORE DESIDERATO ATTRAVERSO I PARAMETRI DELLA SUA FUNZIONE PADRE
          [StateName]: data.Search.map((movie) => ({
            Title: movie.Title,
            Year: movie.Year,
            imdbID: movie.imdbID,
            Type: movie.Type,
            Poster: movie.Poster,
          })),
          isLoading: false,
          searchIndex: this.props.search,
        });
      })
      .catch((err) => {
        this.setState({
          isThereAnError: true,
          errorToShow: err.toString(),
        });
        if (err.toString().includes("TypeError")) {
          this.setState({
            errorToShow: "No results",
          });
        } else if (this.props.search === "") {
          this.setState({ isThereAnError: false });
        }
      });
  };

  handleSearch = () => {
    this.getMovies(this.props.search, "Search6");
  };

  componentDidMount() {
    // LANCIO LA FUNZIONE PASSANDOO NEI PARAMETRI L'ENDPOINT DA FETCHARE E L'ARRAY DA MAPPARE
    this.getMovies("the%20lord", "Search1");
    this.getMovies("harry%20potter", "Search2");
    this.getMovies("batman", "Search3");
    this.getMovies("avengers", "Search4");
    this.getMovies("game%20of%20thrones", "Search5");
  }

  render() {
    return (
      <main className=" bg-black">
        {this.state.isThereAnError && (
          <Alert variant="danger">{this.state.errorToShow}</Alert>
        )}

        <Container fluid>
          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}

          {/* OTTENGO LA PROP PASSATA DAL FORM SU MY NAVBAR E SE IL VALUE DELL'INPUT è DIVERSO DA STRINGA VUOTA COMPARE UNA RIGA AGGIUNTIVA CHE AL CLUCK DEL TAG SMALL ESEGUE FETCH IN BASE ALLA RICERCA */}

          {this.props.search !== "" && (
            <>
              <h1 className="text-white fs-4 mb-3">
                You searched:
                <span className="text-danger"> {this.props.search} </span>
                <small onClick={this.handleSearch}>Click to show movies</small>
              </h1>
              <Gallery data={this.state.Search6} />
            </>
          )}

          {/* PER OGNI COMPONENT MAPPO PASSO NELLA PROP L'ARRAY CORRISPONDENTE*/}
          <h1 className="text-white fs-4 mb-3">Based on your activity</h1>
          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <Gallery data={this.state.Search1} />

          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <h1 className="text-white fs-4 mb-3">Rewatch Harry Potter</h1>
          <Gallery data={this.state.Search2} />

          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <h1 className="text-white fs-4 mb-3">Suggested by Netflix</h1>
          <Gallery data={this.state.Search3} />

          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <h1 className="text-white fs-4 mb-3">Movie must see in the life</h1>
          <Gallery data={this.state.Search4} />

          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <h1 className="text-white fs-4 mb-3">Watch Again</h1>
          <Gallery data={this.state.Search5} />
        </Container>
      </main>
    );
  }
}

export default MainContent;
