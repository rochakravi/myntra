

// function Header(){
//     return <ul>
//         <li>Home</li>
//         <li>Introduction</li>
//         <li>Experience</li>
//     </ul>
// }

import './../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = (props) => {
    console.log("props =>",props.festival);
    return <ul className="App-header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/male">Male</Link></li>
        <li><Link to="/female">Female</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/loginsignup">Login/SignUp</Link></li>
        <li><Link to="/tutorial">Tutorial</Link></li>
    </ul>
}


export default Header ;

// in same line 

// arrow function 
// {} 1. object 2. expression 


