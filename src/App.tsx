import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './ui/posts/Posts';
import Main from './ui/main/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/posts/:id"
            element={<Posts />}
          />
          <Route
            path="/"
            element={<Main />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
