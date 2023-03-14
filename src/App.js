<<<<<<< HEAD
=======
import './App.css';
import ArticleList from './components/ArticleList'
import { useState } from 'react';
function App() {
const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div className="App">
      <h1>Merge tet</h1>
      <ArticleList isLoading={isLoading} setIsLoading={setIsLoading}/>
    </div>
  );
}
export default App;
>>>>>>> 5c702e7a797b7db00cef4932788ba2aa3f3a781b
