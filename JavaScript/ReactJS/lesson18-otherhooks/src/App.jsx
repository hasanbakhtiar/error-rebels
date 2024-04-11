import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppUseMemo from './components/AppUseMemo'
import AppUseLayoutEffect from './components/AppUseLayoutEffect'
import Header from './components/Header'
import AppUseImperativeHandle from './components/AppUseImperativeHandle'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
      <Routes>
        <Route path="/" element={<AppUseLayoutEffect/>} ></Route>
        <Route path="/uih" element={<AppUseImperativeHandle/>} ></Route>
        <Route path="/um" element={<AppUseMemo/>} ></Route>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App