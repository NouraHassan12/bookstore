import React , {Component} from 'react';
import {BookContext} from '../Context'
import Loading from "./Loading";
import Boook from "./Boook";
import Title from './Title';
export default class Featuerdbooks extends Component{
static contextType = BookContext;

    render(){
        
   let {loading ,featuredBooks:books} = this.context;
   books=books.map(book =>{
       return <Boook key={book.id} book={book}/>
   });

     this.books = books;
     console.log(books)
        return(
        <section className="featured-books">
            <Title title="featured books" />
            <div className="featured-books-center">
                {loading ?  <Loading />: books }
            </div>
          
           
          
        
             </section>
        )
    }
}