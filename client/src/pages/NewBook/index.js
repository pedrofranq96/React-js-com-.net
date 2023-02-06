import React, {useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

import logoImage from '../../assets/logo.svg';
import './styles.css';

export default function NewBook(){
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    async function createNewBook(e){
        e.preventDefault();

        const data = {
            title,
            author,
            launchDate,
            price,
        }

        const accessToken = localStorage.getItem('accessToken');

        try{
            await api.post('api/book/v1', data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
        } catch(err){
            alert('Error while recording book');
        }
        navigate('/books');
        
    }
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

                <form onSubmit={createNewBook}>
                    <input 
                        placeholder="Title"
                        value={title}
                        onChange={e=> setTitle(e.target.value)}
                    />
                    <input 
                        placeholder="Author"
                        value={author}
                        onChange={e=> setAuthor(e.target.value)}
                    />
                    <input 
                        type="date"
                        value={launchDate}
                        onChange={e=> setLaunchDate(e.target.value)}
                    />
                    <input 
                        placeholder="Price"
                        value={price}
                        onChange={e=> setPrice(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Add</button>

                </form>
            </div>
        </div>
    );
}