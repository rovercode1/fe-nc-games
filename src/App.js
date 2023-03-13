import './App.css';
import { Route, Routes } from "react-router-dom";
import SingleReview from './components/SingleReview'
import { useState } from 'react';
function App() {
  const [review_id, setReviewId] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="App">
      <Routes>
        <Route path='/reviews/:review_id' element={<SingleReview review_id={review_id} isLoading={isLoading} setIsLoading={setIsLoading} />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
