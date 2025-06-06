import React from 'react'
import Navbar from './components/Navbar'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import RootLayout from './layout/RootLayout' 
import ContactLayout from './layout/ContactLayout'
import NotFound from './components/NotFound'
import JobLayout from './layout/JobLayout'
import Job, {jobLoader} from './pages/Job'

const App = () => { 
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>} />
          <Route path='products' element={<Products/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<ContactLayout/>}>
            <Route path='info' element={<ContactInfo/>}/>
            <Route path='form' element={<ContactForm/>}/>
          </Route>
          <Route path='job' element={<JobLayout/>}>
            <Route index element={<Job/>} loader={jobLoader}></Route>
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return(
    <RouterProvider router={router}/>
  )
}
  
export default App
