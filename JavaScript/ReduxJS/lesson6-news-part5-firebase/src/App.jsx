import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Header from './components/Header'
import Dashbaord from './pages/admin/Dashbaord'
import AddNews from './pages/admin/update/AddNews'
import EditNews from './pages/admin/update/EditNews'
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
          <Route path='/dashboard/add' element={<AddNews/ >}></Route>
          <Route path='/dashboard/edit/:slug' element={<EditNews/ >}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App