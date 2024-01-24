import { useState } from "react";



const defaultUser = {
    email: "ramazan@admin.com",
    pass: "ramazan123"
}


const Login = () => {

    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const formSubmited = e => {
        e.preventDefault();
        if (!email || !pass) {
            alert('please, fill input')
        } else {
            if (defaultUser.email === email && defaultUser.pass === pass) {
                alert('login successfully')
            } else {
                alert('email or password is wrong')
            }
        }

    }

    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className='my-5'>Login </h1>
            <div className="col-3">
           
                <form onSubmit={formSubmited}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={e => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={e => { setPass(e.target.value) }} />
                    </div>
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
            </div>
        </div>



    )
}

export default Login