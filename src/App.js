import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AccountPage from "./components/AccountPage";
import MovieDetails from "./components/MovieDetails";
import TvShows from "./components/TvShows";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyNavbar />} />

        <Route path="/Account" element={<AccountPage />} />
        <Route path="/Details/:movieID" element={<MovieDetails />} />
        <Route path="/TvShows" element={<TvShows />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
