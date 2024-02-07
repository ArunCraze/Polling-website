import logo from './logo.svg';
import './App.css';
import Signup  from './components/Signup/Signup';
import  Login  from './components/Login/Login';
import HomePage from './components/Home/HomePage';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/sign" element={<Signup/>}/>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
