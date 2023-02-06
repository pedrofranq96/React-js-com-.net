import React from 'react';
import {useNavigate,Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import './styles.css';

export default function NewBook(){
    const navigate = useNavigate();
    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio"/>
                    <h1>Add new book</h1>
                    <p>Enter the book informantion and click on 'Add'!</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251FC5"/>
                        Back to books
                    </Link>
                </section>
                <form>
                    <input placeholder="Title"/>
                    <input placeholder="Author"/>
                    <input type="date"/>
                    <input placeholder="Price"/>
                    
                    <button className="button" type="submit">Add</button>

                </form>
            </div>
        </div>
    );
}