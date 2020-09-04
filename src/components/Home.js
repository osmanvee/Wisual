import React from 'react';
import ill1 from '../images/ill1.png';
import ill2 from '../images/ill2.png';
import ill3 from '../images/ill3.png';
import '../App.css';
import '../index.css';
import LoginForm from '../refLogin';
import banner from '../images/banner.png';


function Home() {

    return(
        <div>
            
            <div className="head">
                
                <img  src={banner} alt="generate color schemes on the go"/>
            </div>
            <div> <LoginForm /> </div>
        </div>
    );
}


export default Home;