import './App.css';
import { Routes, Route } from 'react-router-dom';
import SingleReviewComments from './components/SingleReviewComments';
import ArticleList from './components/ArticleList'
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className="App">
       <ArticleList isLoading={isLoading} setIsLoading={setIsLoading}/>
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
