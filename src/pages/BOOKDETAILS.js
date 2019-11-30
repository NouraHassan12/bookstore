import React , {Component} from "react";
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import Herro from '../components/Herro';
import {Link} from 'react-router-dom';
import {BookContext} from "../Context";
import StyledHero from "../components/Styledhero";

export default class BOOKDETAILS extends Component{


    constructor(props){
        super(props);
           console.log(this.props)
        this.state={
            slug:
            this.props.match.params.slug,defaultBcg
        };
    }

    static contextType = BookContext;

    render(){
        const {getBook} = this.context;
        const book = getBook(this.state.slug);
        if (!book){
            return(
                <div className="error">
                    <h3>no such books could be found...</h3>
                    <Link to="/books" className="btn-primary">
                        back to Books
                    </Link>
                </div>
            );

        }

    // return <div>hello from bookdetails {book.name}</div>

        const {
            name,
            description,
            bublicationdate,
            price,
            images
        } = book;

        const [mainImg, ...defaultImg] = images;
        console.log(defaultImg)

        return(
            <>
               <StyledHero img={ mainImg || this.state.defaultBcg}>
                <Banner title={`${name} book`}>
                  
                </Banner>
            </StyledHero>

            <section className="single-book">
                <div className="single-book-images">
                    {defaultImg.map((item,index)=>{
                        return<img src={item} key={index} alt={name} />
                    })}
                </div>


<div className="single-book-info">
    <article className="desc">
        <h3>Details</h3>
                <p>{description}</p>
    </article>

    <article className="info">
        <h3>info</h3>
                <h6>price : ${price}</h6>
    <h6>year : {bublicationdate}</h6>
    <h6>Brrowing allow</h6>
    </article>
</div>
            </section>
            </>
         
        )
     
       
    }
}
