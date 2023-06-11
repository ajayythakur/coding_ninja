import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LogIn from '../Components/LogIn'
import Logout from '../Components/Logout'
import Enroll from '../Components/Enroll'
import NoWork from '../Components/Courses Pages/NoWork'
import WorkEx from '../Components/Courses Pages/WorkEx'
import DetailComp from '../Components/Courses Pages/DetailComp'
import PaymentPage from '../Components/Courses Pages/PaymentPage'

const Routing = () => {
  return (
    <div>
        {/* <Link to='/login'>Login</Link> */}
        <Routes>
            <Route path='*'></Route>
            <Route path='/login' element={<LogIn/>}/>Login
            <Route path='/logout' element={<Logout/>} />
            <Route path='/enroll' element={<Enroll/>}/>
            <Route path='/no-work-experience' element={<NoWork/>}/>
            <Route path='/wrok-ex' element={<WorkEx/>} />
            <Route path='/course-detail' element={<DetailComp/>}/>
            <Route path='/payment-page' element={<PaymentPage/>}/>
        </Routes>
    </div>
  )
}

export default Routing