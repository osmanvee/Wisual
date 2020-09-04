import React from 'react';
import ill1 from '../images/ill1.png';
import ill2 from '../images/ill2.png';
import ill3 from '../images/ill3.png';
import '../App.css';
import '../index.css';
import LoginForm from '../refLogin';


function Home() {

    return(
        <div>
            
            <div className="head">
                <div className="mainfont"> Generate colour schemes for your marketing needs </div>
                <div className="mainGrid">
                    <div className="grid1">
                        <img src={ill1}/>
                        <div className="illText">   Multiple color options </div>
                    </div>
                    <div className="grid1">
                        <img src={ill2}/>
                       <div className="illText">  UI and Code generation </div>
                    </div>
                    <div className="grid1">
                        <img src={ill3}/>
                        <div className="illText"> Color Theory technology </div>
                    </div>
                </div>
                
            </div>
            <div> <LoginForm /> </div>
        </div>
    );
}


export default Home;