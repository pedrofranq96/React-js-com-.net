import React from "react";
import {useNavigate} from 'react-router-dom';
import './styles.css';

import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'


export default function Login(){
    const navigate = useNavigate();
    return(
        <div className="login-container">   
                <section className="form">
                <img src={logoImage} alt="Erudio Logo"/>
                <form>
                    <h1>Access your account</h1>
                    <input placeholder="UserName"/>
                    <input type="password" placeholder="Password"/>

                    <button className="button" type="submit">Login</button>
                </form>
            </section>
            <img src={padlock} alt="Login"/>
        </div>
    );
}