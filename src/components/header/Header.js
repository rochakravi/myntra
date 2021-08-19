
import './Header.css';
import {
   
    Link
} from "react-router-dom";
import { Input } from 'semantic-ui-react'
import { AiOutlineUser, AiOutlineHeart, AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

const Header = (props) => {

    console.log("props =>", props.festival);
    return <ul className="app-header">
        <div className="header-box">
            <div className="left-box">
                <img src={window.location.origin + '/logo.png'} style={{ width: 50 }} />
                <li><Link to="/">MEN</Link></li>
                <li><Link to="/male">WOMEN</Link></li>
                <li><Link to="/female">KIDS</Link></li>
                <li><Link to="/kids">HOME & LIVING</Link></li>
                <li><Link to="/loginsignup">BEAUTY</Link></li>
                {/* <li><Link to="/tutorial">Tutorial</Link></li> */}
            </div>
            <div className="right-box">
                <div className="first">
                <Input loading icon='search' iconPosition='left' placeholder='Search for Products brands and more' />
                </div>
                <div className="second">
                <AiOutlineUser size="30" />
                <AiOutlineHeart size="30"/>
                <AiOutlineShopping size="30"/>
                </div>
            
               
            </div>
        </div>
       
    </ul>
}


export default Header;

// in same line 

// arrow function 
// {} 1. object 2. expression 
// AiOutlineUser



