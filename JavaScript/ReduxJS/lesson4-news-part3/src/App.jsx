import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Header from './components/Header'
import Dashbaord from './pages/admin/Dashbaord'
import AddNews from './pages/admin/AddNews'
import NewsDetails from './pages/NewsDetails'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element={<Home/ >}></Route>
          <Route path='/news' element={<News/ >}></Route>
          <Route path='/news/:slug' element={<NewsDetails/ >}></Route>
          <Route path='/dashboard' element={<Dashbaord/ >}></Route>
          <Route path='/add' element={<AddNews/ >}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App