import React from 'react'
import NavBar from './Components/NavBar';
import './App.css';
import Routing from './Routes/Routing';
import NoWork from './Components/Courses Pages/NoWork';
import WorkEx from './Components/Courses Pages/WorkEx';
const App = () => {
  return (
    <div>
      <NavBar/>
      
      <Routing/>
      {/* <NoWork/>
      <WorkEx/> */}
    </div>
  )
}

export default App