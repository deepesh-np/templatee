import React from 'react'
// import Navbar from './components/Navbar'
import { Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router'
import About from "./Pages/About";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
// import Contact from "./Pages/Contact";
import RootLayout from './layout/RootLayout';
import { RouterProvider } from 'react-router/dom';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
import JobsLayout from './layout/JobsLayout';
import Jobs, { jobsLoader } from './Pages/Jobs';

const App = () => {

   const router = createBrowserRouter( createRoutesFromElements(

    <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='product' element={<Products/>}/>
        <Route path='contact' element={<ContactLayout/>}>
              <Route path='info' element={<ContactInfo/>}/>
              <Route path='form' element={<ContactForm />}/>
        </Route>

        <Route path='jobs' element = {<JobsLayout/>}>
            <Route index element={<Jobs/>} loader={jobsLoader}/>
            
            </Route>
        <Route path='*' element={<NotFound/>} />

    </Route>
   )
)


  return (
   <RouterProvider router={router}/>
  )
}

export default App
