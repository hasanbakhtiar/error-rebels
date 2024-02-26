import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const loginForm = e=>{
        e.preventDefault();
        if (!email || !pass) {
            alert('please, fill all inputs');
        }else{
            if (email == localStorage.getItem('email') && pass == localStorage.getItem('password')) {
                localStorage.setItem('login','true');
                window.location.assign('/products');
            }else{
                alert('password or email is wrong!');
            }
        }
    }
    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5'>Login</h1>
                <Col sm={6}>
                <form onSubmit={loginForm}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input onChange={e=>setPass(e.target.value)} type="password" className="form-control"  />
                    </div>
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
                <p className='mt-3'><Link to="/register">Create new account</Link></p>
                <Link to="/forgotpassword">Forgot your password?</Link>
                </Col>
            </div>
        </Container>
    )
}

export default Login