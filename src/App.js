import './App.css';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './Components/ArticleList'
import SingleReview from './Components/SingleReview'
import SingleReviewComments from './Components/SingleReviewComments';
import ReviewsByCategories from './Components/ReviewsByCategories';

import { useState } from 'react';
import Header from './Components/Header';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route
          path="/"
          element={<ArticleList isLoading={isLoading} setIsLoading={setIsLoading}/>}
        />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview isLoading={isLoading} setIsLoading={setIsLoading}/>}
        />
        <Route
          path="/reviews/:review_id/comments"
          element={<SingleReviewComments isLoading={isLoading} setIsLoading={setIsLoading}/>}
        />
        <Route
          path="/reviews"
          element={<ReviewsByCategories isLoading={isLoading} setIsLoading={setIsLoading}/>}
        />
      </Routes>
    </div>
  );
}
export default App;

