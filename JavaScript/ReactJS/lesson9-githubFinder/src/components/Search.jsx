import { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
const Search = ({ comingkeyword, dataStatus }) => {
    const [inputvalue, setInputvalue] = useState("");
    const [inputStatus] = useState("no users");



    const handleForm = (e) => {
        const notify = () => toast.error('👽please, fill search box', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });

        const notifysuccess = () => toast.success('find new result WOW', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        e.preventDefault();
        if (!inputvalue) {
            notify();
        } else {
            comingkeyword(inputvalue);
            dataStatus(inputStatus);
            setInputvalue("");
            notifysuccess();
        }

    }
    return (


        <form onSubmit={handleForm} className="input-group  my-5">
            <input value={inputvalue} onChange={e => setInputvalue(e.target.value)} type="text" className="form-control" placeholder="Search username" />
            <button className="btn btn-dark" type="submit" >Search</button>
            <ToastContainer />
            <button onClick={() => {
                window.location.reload();
            }} className="btn btn-warning" type="button" >Reset</button>
        </form>


    )
}

export default Search