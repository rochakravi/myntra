import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginSigUp from './components/LoginSignUp';
import Male from './components/Male';
import Female from './components/Female';
import Kids from './components/Kids';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route path = '/'><Header /></Route>
          <Route path = '/male'> <Male /></Route>
          <Route path = '/female'><Female /></Route>
          <Route path = '/kids'><Kids /></Route>
          <Route path = '/loginsignup'><LoginSigUp /></Route>
      </switch>
      </Router>
      <div className="App-container">
        <div className="Section-box">
          Mobiles
        </div>
        <div className="Section-box">
          Home Dec
        </div>
        <div className="Section-box">
          3rd
        </div>
        <div className="Section-box">
          4th
        </div>
        <div className="Section-box">
          5th
        </div>
        <div className="Section-box">
          6th
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
