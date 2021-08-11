import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginSigUp from './components/LoginSignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <LoginSigUp />
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
