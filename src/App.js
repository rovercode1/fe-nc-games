import './App.css';
import ArticleList from './components/ArticleList'
import { useState } from 'react';
function App() {
const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div className="App">
      <h1>Merge test</h1>
      <ArticleList isLoading={isLoading} setIsLoading={setIsLoading}/>
    </div>
  );
}
export default App;