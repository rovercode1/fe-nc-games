import './App.css';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList'
import SingleReview from './components/SingleReview'
import SingleReviewComments from './Components/SingleReviewComments';

import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [review_id, setReviewId] = useState(1)
  return (
    <div className="App">
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
      </Routes>
    </div>
  );
}
export default App;