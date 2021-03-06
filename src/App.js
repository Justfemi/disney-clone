import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Login />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
