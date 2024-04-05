import './App.css';
import Problem1 from './components/Problem1';
import Problem2 from './components/Problem2';
import Problem3 from './components/Problem3';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
        <BrowserRouter>
    <div className="flex gap-3">
        <div>
          <Link to="/">Go to Problem 1</Link>
        </div>
        <div>
          <Link to="/problem2">Go to Problem 2</Link>
        </div>
        <div>
          <Link to="/problem3">Go to Problem 3</Link>
        </div>

      </div>
        <Routes>
          <Route path="/" element={<Problem1 />} />
          <Route path="/problem2" element={<Problem2 />} />
          <Route path="/problem3" element={<Problem3 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
