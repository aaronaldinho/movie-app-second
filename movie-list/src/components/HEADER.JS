// import REACT from 'react'

import Logo from './logo.jpg'

const Header = (props) => {
     return ( 
            
            <div className="header-nav">
                <div>
                <img className='logo-nav' src={Logo} alt="logo"/>
                </div>
                <div>
                <h1>Movies you should watch before you die!</h1>
                </div>
                <div >
                    <ul className='options-nav'>
                        {/* <li> <a href="">Home</a> </li>
                        <li> <a href="">Search</a> </li>
                        <li> <a href="">Contact</a> </li> */}
                    </ul>
                </div>
            </div>
           );
}
 
export default Header;

