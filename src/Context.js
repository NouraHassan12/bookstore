import React , {Component} from "react";
import items from './data';
const BookContext = React.createContext();

 class BookProvider extends Component{
     state={
        books:[],
         sortedbooks:[],
         featuredBooks:[],
         loading:true

        
     };

     componentDidMount(){
         let books = this.formatData(items);
         console.log(books)
         let featuredBooks = books.filter(book => book.featured === true);
         this.setState({
             books,
             featuredBooks,
             sortedbooks:books,
             loading:false
         });
     }

     formatData(items){
         let tempItems = items.map(item =>{
             let id = item.sys.id;
             let images = item.fields.images.map(image=>
                image.fields.file.url);

                let book ={...item.fields , images , id};
                return book
         });
         return tempItems
     }


     getBook = slug =>{
         let tempBooks = [...this.state.books];
         const book = tempBooks.find(book =>
             book.slug === slug )
       
         return book

     }
render(){
    return (
        <BookContext.Provider value={{...this.state , getBook:this.getBook}}>
{this.props.children}
    </BookContext.Provider>
    )
}

}

const BookConsumer=BookContext.Consumer;
export {BookProvider,BookConsumer,BookContext}