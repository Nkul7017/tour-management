import Header from './Components/Header'
import Home from './Components/Home'
import GetStarted from './Components/GetStarted'
import Login from './Components/Login'
import SignUp from './Components/Signup'
import About from './Components/About'
import Contact from './Components/Contact'
import ForgetPassword from './Components/ForgetPassword'
import ParticularDestination from './Components/ParticularDestination'
import ParticularPackage from './Components/ParticularPackage'
import Destination from './Components/Destination'
import Booking from './Components/Booking'
import Packages from './Components/Packages'
import BookNow from './Components/BookNow'
import All404 from './Components/All404'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
function App() {
  const [change,setChange]=useState(true);
  const [display,setDisplay]=useState(true);
  function set(){
  setTimeout(() => {
    setChange(false);
  }, 25000);}
  useEffect(()=>{
  set();
  },[])
 
  return (
    <>
    <BrowserRouter>
    {change?null:<Header display={display} setDisplay={setDisplay}  />}
    <Routes>
      {change?<Route path='/' element={<GetStarted setChange={setChange}/>} />:<Route path='/' element={<Home/>} />}
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Login/:msg' element={<Login display={display} setDisplay={setDisplay} />} />
      <Route path='/Login'  element={<Login  display={display} setDisplay={setDisplay}  />} />
      <Route path='/Destination' element={<Destination/>} />
      <Route path='/Booking' element={<Booking />} />
      <Route path='/Packages' element={<Packages/>} />
      <Route path='/BookNow/:_id/:rt' element={<BookNow/>} />
      <Route path='/ForgetPassword' element={<ForgetPassword />} />
      <Route path='/ParticularDestination/:_id' element={<ParticularDestination />} />
      <Route path='/ParticularPackage/:_id' element={<ParticularPackage />} />
      <Route path='*' element={<All404/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
