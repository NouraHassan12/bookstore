import React  from 'react';
import {Link} from 'react-router-dom';
import defaultImg from "../images/room-1.jpeg";
import propTypes from "prop-types";
export default function Boook({book}){
    console.log(book)


    const {name , slug , images , price } = book;
    return(  <article className="book">
        <div className="img-container">
            <img src={images[0] || defaultImg}/>

            <div className="price-top">
            <h6>${price}</h6>
            <p>dummy text</p>
            </div>

            <Link to={`/books/${slug}`}
            className="btn-primary book-link"> Details</Link>
        </div>
<p className="book-info">{name}</p>
    </article>)
   
}  

Boook.propTypes = {
    book:propTypes.shape({
        name:propTypes.string.isRequired,
        slug:propTypes.string.isRequired,
        images:propTypes.arrayOf(propTypes.string).isRequired,
        price:propTypes.number.isRequired,
    })
}