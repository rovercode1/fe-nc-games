import './App.css';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './Components/ArticleList'
import SingleReview from './Components/SingleReview'
import SingleReviewComments from './Components/SingleReviewComments';

import { useState } from 'react';
import PostComment from './Components/PostComment';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [reviews, setReviews] = useState([]);
  return (
    <div className="App">
      <Routes>
      <Route
          path="/"
          element={<ArticleList isLoading={isLoading} setIsLoading={setIsLoading} setReviews={setReviews}/>}
        />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview isLoading={isLoading} setIsLoading={setIsLoading} setReviews={setReviews}/>}
        />
        <Route
          path="/reviews/:review_id/comments"
          element={<SingleReviewComments isLoading={isLoading} setIsLoading={setIsLoading}/> }
        />
      </Routes>
    </div>
  );
}
export default App;

