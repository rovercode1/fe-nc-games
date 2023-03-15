import './App.css';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './Components/ArticleList'
import SinglePage from './Components/SinglePage';
import { useState } from 'react';


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
          element={<SinglePage isLoading={isLoading} setIsLoading={setIsLoading} setReviews={setReviews}/>}
        />
      </Routes>
    </div>
  );
}
export default App;

