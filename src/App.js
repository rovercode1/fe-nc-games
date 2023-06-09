import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import SinglePage from "./Components/SinglePage";
import ErrorPage from './Components/ErrorPage';
import ArticleList from "./Components/ArticleList";
import ReviewsByCategories from './Components/ReviewsByCategories';
import Endpoints from "./Components/Endpoints";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/"
          element={<ArticleList reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path="/reviews/:review_id"
          element={<SinglePage setReviews={setReviews} />}
        />
        <Route path="/reviews" element={<ReviewsByCategories />} />
        <Route
          path="/endpoints"
          element={<Endpoints/>}
        />
      </Routes>
    </div>
  );
}
export default App;
