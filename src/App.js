import './App.css';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './Components/ArticleList'
import SingleReview from './Components/SingleReview'
import SingleReviewComments from './Components/SingleReviewComments';
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import { useState } from 'react';
import SortBar from './Components/FilterBar';

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true)
  const [reviews, setReviews] = useState([])
  return (
    <div className="App">
      <SortBar searchParams={searchParams} setReviews={setReviews} setSearchParams={setSearchParams}/>
      <Routes>
      <Route
          path="/"
          element={<ArticleList isLoading={isLoading} setIsLoading={setIsLoading} reviews={reviews} setReviews={setReviews}/>}
        />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview isLoading={isLoading} setIsLoading={setIsLoading}/>}
        />
        <Route
          path="/reviews/:review_id/comments"
          element={<SingleReviewComments isLoading={isLoading} setIsLoading={setIsLoading}/>}
        />
      </Routes>
    </div>
  );
}
export default App;

