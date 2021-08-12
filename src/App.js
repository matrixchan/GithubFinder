import React,{Component}from 'react'
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component{
  render(){
    const loading = true;  
    const name = "Jon Doe";

    return (
      <div className="App">
        <Navbar title="Github Find" icon="fab fa-github"/>
      </div>
    );
  }

}

export default App;
 