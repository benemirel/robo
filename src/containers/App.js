import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './app.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';

 class App extends React.Component {
   constructor(){
     super();
     this.state ={  robots: [],
       searchfield: ''

     }
   }
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=> response.json())
   .then(users=> this.setState({robots: users}));

 }
onSearchChange=(event)=>{
this.setState({searchfield: event.target.value})



}

   render(){
     const filteredRobots= this.state.robots.filter(robots=>{
       return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());})
if (this.state.robots.length===0){
  return <h1>Loading</h1>}
  else{

  return(
    <div className='tc'>
    <h1 className='f1'>ROBOTS</h1>
    <SearchBox searchChange={this.onSearchChange} />
<Scroll>
<ErrorBoundry>
    <Cardlist robots={filteredRobots}/>);
</ErrorBoundry>
</Scroll>
    </div>);
}
}
}
export default App;
