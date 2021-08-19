import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginSigUp from './components/LoginSignUp';
import Male from './components/Male';
import Female from './components/Female';
import Kids from './components/Kids';
import Tutorial  from './components/Tutorial';
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
      <Header money="10" gift="shirt" festival="new year"/>
        <switch>         
          <Route path = '/male'> <Male /></Route>
          <Route path = '/female'><Female /></Route>
          <Route path = '/kids'><Kids /></Route>
          <Route path = '/loginsignup'><LoginSigUp /></Route>
          <Route path = '/tutorial'><Tutorial /></Route>
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
      <Footer address="Mumbai" mobile="9910568242" />
    </div>
  );
}

export default App;
