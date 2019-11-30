import React , {Component} from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom'
export default class Navbar extends Component{



    state={
        isOpen:false
    }

    handeltoggle =() =>{
this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return(
           
             <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                  
                  <h1>BOOKIE</h1>
                

                <button type="button" className="nav-btn"
                onClick={this.handeltoggle}>
                    <FaAlignRight className="nav-icon"/>
                </button>
                </div>


                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>

                    

                    <li>
                      <Link to="/">Book</Link>
                    </li>

                 

                </ul>
             
            </div>
             
             </nav>
  
            
                 
             
         
   
    
   
  
            
        )
    }
}
