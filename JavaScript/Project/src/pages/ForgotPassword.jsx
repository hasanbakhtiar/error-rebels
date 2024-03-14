import React, { useRef, useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
const ForgotPassword = () => {
    const [fgemail, setFgemail] = useState("");

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if (fgemail === localStorage.getItem('email')) {
            emailjs
                .sendForm('service_a3rziok', 'template_b76b85o', form.current, {
                    publicKey: 'cVBf7nQwR9JgBlZoL',
                })
                .then(
                    () => {
                        alert('Please check your email')
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }else{
            alert('this email is wrong!')
        }
    };
    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5'>Forgot password</h1>
                <Col sm={6}>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label className="form-label">Enter email address</label>
                            <input  onChange={e => setFgemail(e.target.value)} type="text" className="form-control" />
                            <input name='fg_password' value={localStorage.getItem("password")} type="hidden" className="form-control" />
                            <input name='user_name' value={localStorage.getItem("fullname")} type="hidden" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-success">Send</button>
                    </form>

                </Col>
            </div>
        </Container>
    )
}

export default ForgotPassword