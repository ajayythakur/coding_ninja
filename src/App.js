import React from 'react'
import NavBar from './Components/NavBar';
import './App.css';
import Routing from './Routes/Routing';
// import Footer from './Components/Footer';
// import HomePage from './Components/HomePage';
const App = () => {
  return (
    <div>
      <NavBar/>
      
      <Routing/>

    </div>
  )
}
 
export default App