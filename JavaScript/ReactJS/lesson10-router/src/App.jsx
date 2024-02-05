import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home';
import About from './page/About';
import NotFoundPage from './page/NotFoundPage';
import Header from './Components/Header';


const App = () => {
  return (
    <BrowserRouter>
    <Header />  
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;