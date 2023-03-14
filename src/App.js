import './App.css';
import { Routes, Route } from 'react-router-dom';
import SingleReviewComments from './Components/SingleReviewComments';
import { useState } from 'react';

function App() {
  const [isLoading, setisLoading] = useState(true)
  return (
    <div className="App">
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
