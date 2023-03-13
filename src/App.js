import './App.css';
import { Route, Routes } from "react-router-dom";
import SingleReview from './components/SingleReview'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/reviews/:review_id' element={<SingleReview/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
