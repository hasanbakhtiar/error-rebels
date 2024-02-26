import React from 'react'
import { Col, Container } from 'react-bootstrap'

const ForgotPassword = () => {
    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5'>Forgot password</h1>
                <Col sm={6}>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Enter email address</label>
                            <input type="text" className="form-control" />
                        </div>
                    <button type="submit" className="btn btn-success">Send</button>
                    </form>

                </Col>
            </div>
        </Container>
    )
}

export default ForgotPassword