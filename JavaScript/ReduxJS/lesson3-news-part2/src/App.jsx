import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element={<Home/ >}></Route>
          <Route path='/news' element={<News/ >}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App