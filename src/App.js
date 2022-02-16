import React, {Component} from 'react';

import './App.css';
import Quote from './components/quote.jsx';


class App extends Component{

  state = {
    quote :
      {id:1, text:'Apacible, así debería ser el transcurso del tiempo, nosotros mismos.\n Nuestra persperctiva del día a día', author:'Flavia Parra', color:'rgb(231, 76, 60)'},
           
  }
  
  handleRandom = () =>{
    
    var quote = {...this.state.quote}
    
    const quotes = [
      {id:1, text:'Apacible, así debería ser el transcurso del tiempo, nosotros mismos.\n Nuestra persperctiva del día a día', author:'Flavia Parra', color:'rgb(231, 76, 60)'},
      {id:2, text:'Mi alma no se sorprende a menudo, pero si tus ojos me miran no necesito nada más', author: 'Flavia Parra', color:'rgb(189, 187, 153)'},
      {id:3, text:'Eso deben pensar los árboles que se secan mientras emperan que llega', author: 'Flavia Parra', color:'rgb(243, 156, 18)'},
      {id:4, text:'Que mi alma resista, incluso a mí', author:'Flavia Parra', color:'rgb(155, 89, 182)'},
      {id:5, text:'Todo cambia.\n Se transforma.\n Con ese vaivén del vivir', author:'Flavia Parra', color:'rgb(71, 46, 50)'}
    ];
    quote = quotes[Math.floor((Math.random() * 5))]

    this.setState((state,props) =>({
      quote : quote
    }));

    }
    
    
  
  render(){
    
    return(
      <><Quote
        key={this.state.quote.id}
        quote={this.state.quote}
        onRandom={this.handleRandom} /></>
    )
  }
}





export default App;
