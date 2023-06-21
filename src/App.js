import React from 'react'
import NavBar from './Components/NavBar';
import './App.css';
import Routing from './Routes/Routing';
import Author from './Components/Author';
// import Footer from './Components/Footer';
// import HomePage from './Components/HomePage';
const App = () => {
  return (
    <div>
      <NavBar/>
      
      <Routing/>
      <Author/>

    </div>
  )
}
 
export default App