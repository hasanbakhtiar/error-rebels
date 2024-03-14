import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import { Container } from "react-bootstrap"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import News from "./pages/News"
import NewsDetails from "./pages/NewsDetails"
import Dashbaord from "./pages/admin/Dashbaord"
import AddNews from "./pages/admin/update/AddNews"
import EditNews from "./pages/admin/update/EditNews"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/products/:slug" element={<ProductDetails />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
                    <Route path='/news' element={<News />}></Route>
                    <Route path='/news/:slug' element={<NewsDetails />}></Route>
                    <Route path='/dashboard' element={<Dashbaord />}></Route>
                    <Route path='/dashboard/add' element={<AddNews />}></Route>
                    <Route path='/dashboard/edit/:slug' element={<EditNews />}></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default App