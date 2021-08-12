import React,{Component}from 'react'
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component{
  render(){
    const loading = true;  
    const name = "Jon Doe";
    
    // if(loading){
    //   return <h4>Loading...</h4>
    // }
    return (
      <div className="App">
        {/* {loading ? <h4>Loading...</h4> : <h1>Hello {name}</h1>} */}
        <Navbar />
      </div>
    );
  }

}

export default App;
 