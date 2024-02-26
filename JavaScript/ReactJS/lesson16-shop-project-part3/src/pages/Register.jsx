import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [fullname,setFullname] = useState("");
    const [phonenumber,setPhonenumber] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [againpass,setAgainpass] = useState("");
    const navigate = useNavigate();
    const formSubmited = e=>{
        e.preventDefault();
        if (!fullname || !phonenumber || !email || !pass || !againpass) {
            alert("please, fill all inputs");
        }else{
            if (pass === againpass) {
                localStorage.setItem("fullname",fullname);
                localStorage.setItem("password",pass);
                localStorage.setItem("email",email);
                localStorage.setItem("login","false");
                navigate("/login");
            }else{
                alert("password is different!")
            }
        }
    }
    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5'>Register</h1>
                <Col sm={6}>
                    <form onSubmit={formSubmited}>
                        <div className="mb-3">
                            <label className="form-label">Full name</label>
                            <input value={fullname} onChange={e=>setFullname(e.target.value)} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Number</label>
                            <input value={phonenumber} onChange={e=>setPhonenumber(e.target.value)} type="tel" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input value={pass} onChange={e=>setPass(e.target.value)} type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Again Password</label>
                            <input value={againpass} onChange={e=>setAgainpass(e.target.value)} type="password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-success">Register now</button>
                    </form>
                <p className='mt-3'><Link to="/login">Already have an account?</Link></p>


                </Col>
            </div>
        </Container>
    )
}

export default Register