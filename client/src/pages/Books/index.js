import React from "react";
import {Link} from 'react-router-dom';
import {FiPower} from 'react-icons/fi'

import logoImage from '../../assets/logo.svg'
import './styles.css';

export default function Books(){
    return <div className="book-container">
        <header>
            <img src={logoImage} alt="Erudio"/>
            <span>Bem vindo, <strong>Pedro</strong>!</span>
            <Link className="button" to="book/new">Add New Book</Link>
            <button type="button">
                <FiPower size={18} color="#251FC5"/>
            </button>
        </header>
    </div>
}