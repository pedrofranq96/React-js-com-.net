import React,{ useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi'

import logoImage from '../../assets/logo.svg'
import api from '../../services/api';
import './styles.css';

export default function Books(){

    const [books, setBooks] = useState([]);

    const userName = localStorage.getItem('userName');

    const accessToken = localStorage.getItem('accessToken');

    const navigate = useNavigate();

    useEffect(()=> {
        api.get('api/book/v1/asc/5/1', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }).then(response=>{
            setBooks(response.data.list)
        })
    },[accessToken]);

    return <div className="book-container">

     
        <header>
            <img src={logoImage} alt="Erudio"/>
            <span>Bem vindo, <strong>{userName.toLowerCase()}</strong>!</span>
            <Link className="button" to="/book/new">Add New Book</Link>
            <button type="button">
                <FiPower size={18} color="#251FC5"/>
            </button>
        </header>
        
        <h1>Registred Books</h1>
        <ul>
            {books.map(book => (
                <li key={book.id}>
                    <strong>Title:</strong>
                    <p>{book.title}</p>
                    <strong>Author:</strong>
                    <p>{book.author}</p>
                    <strong>Price:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(book.price)}</p>
                    <strong>Release Date:</strong>
                    <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>
                    
                    <button type="button">
                        <FiEdit size={20} color="251FC5"/>
                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="251FC5"/>
                    </button>
                </li>
            ))}
        </ul>
    </div>
}