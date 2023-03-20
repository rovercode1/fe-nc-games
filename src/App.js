import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import SinglePage from "./Components/SinglePage";
import ArticleList from "./Components/ArticleList";
import ReviewsByCategories from './Components/ReviewsByCategories';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList
              reviews={reviews}
              setReviews={setReviews}
            />
          }
        />
        <Route
          path="/reviews/:review_id"
          element={
            <SinglePage     
              setReviews={setReviews}
            />
          }
        />
        <Route
          path="/reviews"
          element={<ReviewsByCategories    />}
        />
      </Routes>
    </div>
  );
}
export default App;
