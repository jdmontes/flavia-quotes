import React, {Component} from 'react';
import {FaFacebook, FaTwitter} from 'C:/Users/Flavia/flavia-quotes/node_modules/react-icons/fa'


const justifyItems = "d-flex justify-content-md-center align-items-center"






class Quote extends Component{
    state = {
        text: this.props.quote.text,
        author: this.props.quote.author,
        color: this.props.quote.color
    }
    render(){

        let color = this.state.color;
        const bodyStyle = {
            position:'fixed',
            padding:0,
            margin:0,  
            top:0,
            left:0,
            width: '100%',
            height: '100%',
            backgroundColor:color,
            textAlign: 'center'
        }

        const quoteBoxStyle = {
            backgroundColor: 'white',
            color: color,
            width:'50%',
        }

        const iconSize = {
            fontSize:'30px',
            margin:'10px',
            color:color
        };
        
        
        return(
            <React.Fragment>
            
            <body className={justifyItems} style={bodyStyle}>
                <div    id ='quote-box' 
                        className="" 
                        style={
                            quoteBoxStyle
                      
                        }>
                    <h1 id= 'text' className={justifyItems} style={{ textAlign: 'center', fontWeight :300}}>"{this.state.text}"</h1>
                    
                    <h4 id='author' className='' style={{ textAlign: 'right', fontStyle:'italic', fontWeight:100}}>{this.state.author}</h4>
               
                    <div className='container'>
                        <div className="row align-items-center">
                            <div className='col'> 
                                <botton id='new-quote' className = 'btn btn-secondary' onClick = { this.props.onRandom}
                                style={{ backgroundColor: color, color: 'white', border:0}}>New Quote</botton>
                            </div>
                        

                        
                            <div className="col">
                            
                                <FaFacebook style={iconSize}/>
                                <a href="twitter.com/intent/tweet" id = 'tweet-quote'><FaTwitter  style={iconSize}/></a>
                            </div>
                        </div>
                    </div>
                    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
                </div>
                
            </body>
            </React.Fragment>
        )
    }
}
export default Quote;