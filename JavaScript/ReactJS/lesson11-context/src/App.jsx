import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/products' element={<Product />}></Route>
                    <Route path='*' element={<NotFoundPage />}></Route>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App