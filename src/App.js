import './App.css';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import SingleReviewComments from './components/SingleReviewComments';
import ArticleList from './components/ArticleList'
import { useState } from 'react';
=======
import { Route, Routes } from "react-router-dom";
import SingleReview from './components/SingleReview'
import ArticleList from './components/ArticleList'
import { useState } from 'react';
function App() {
  const [review_id, setReviewId] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
>>>>>>> 0b6070d0c077d759d42fee7c77e6936d64c168a3

function App() {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className="App">
<<<<<<< HEAD
       <ArticleList isLoading={isLoading} setIsLoading={setIsLoading}/>
=======
    <ArticleList isLoading={isLoading} setIsLoading={setIsLoading}/>
>>>>>>> 0b6070d0c077d759d42fee7c77e6936d64c168a3
      <Routes>
        <Route
          path="/reviews/:review_id"
          element={<SingleReviewComments isLoading={isLoading} setIsLoading={setisLoading}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
