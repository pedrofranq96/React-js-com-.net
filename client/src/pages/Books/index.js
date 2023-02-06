import React from "react";
import {Link} from 'react-router-dom';
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi'

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
        
        <h1>Registred Books</h1>
        <ul>
            <li>
                <strong>Title:</strong>
                <p>Docker Deep Dive</p>
                <strong>Author:</strong>
                <p>Nigel Paul</p>
                <strong>Price:</strong>
                <p>R$:55,00</p>
                <strong>Release Date:</strong>
                <p>12/07/2017</p>
                
                <button type="button">
                    <FiEdit size={20} color="251FC5"/>
                </button>
                <button type="button">
                    <FiTrash2 size={20} color="251FC5"/>
                </button>
            </li>

            <li>
                <strong>Title:</strong>
                <p>Docker Deep Dive</p>
                <strong>Author:</strong>
                <p>Nigel Paul</p>
                <strong>Price:</strong>
                <p>R$:55,00</p>
                <strong>Release Date:</strong>
                <p>12/07/2017</p>
                
                <button type="button">
                    <FiEdit size={20} color="251FC5"/>
                </button>
                <button type="button">
                    <FiTrash2 size={20} color="251FC5"/>
                </button>
            </li>

            <li>
                <strong>Title:</strong>
                <p>Docker Deep Dive</p>
                <strong>Author:</strong>
                <p>Nigel Paul</p>
                <strong>Price:</strong>
                <p>R$:55,00</p>
                <strong>Release Date:</strong>
                <p>12/07/2017</p>
                
                <button type="button">
                    <FiEdit size={20} color="251FC5"/>
                </button>
                <button type="button">
                    <FiTrash2 size={20} color="251FC5"/>
                </button>
            </li>

            <li>
                <strong>Title:</strong>
                <p>Docker Deep Dive</p>
                <strong>Author:</strong>
                <p>Nigel Paul</p>
                <strong>Price:</strong>
                <p>R$:55,00</p>
                <strong>Release Date:</strong>
                <p>12/07/2017</p>
                
                <button type="button">
                    <FiEdit size={20} color="251FC5"/>
                </button>
                <button type="button">
                    <FiTrash2 size={20} color="251FC5"/>
                </button>
            </li>
        </ul>
    </div>
}