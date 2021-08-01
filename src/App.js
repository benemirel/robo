import React from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import SearchBox from './SearchBox';

 class App extends React.Component {
   constructor(){
     super();
     this.state ={  robots: robots,
       searchfield: ''

     }
   }
   render(){
  return(
    <div className='tc'>
    <h1>ROBOTS</h1>
    <SearchBox />
    <Cardlist robots={this.state.robots}/>);
    </div>);
}
}

export default App;
