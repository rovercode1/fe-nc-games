import './App.css';
import { Routes, Route } from 'react-router-dom';
import SingleReviewComments from './Components/SingleReviewComments';
import Test from './Components/Test';
import { useState } from 'react';

function App() {
  const [isLoading, setisLoading] = useState(true)
  return (
    <div className="App">
      <Routes>
      <Route
          path="/"
          element={<Test />}
        />
        <Route
          path="/reviews/:review_id"
          element={<SingleReviewComments isLoading={isLoading} setIsLoading={setisLoading}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
