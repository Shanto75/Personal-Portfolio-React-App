import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function Signup(props) {
    const uppername = ()=>{
        let uppername = name.toUpperCase();
        setname(uppername);
    }
    const onchange = (event)=>{
        setname(event.target.value);
    }
    const [name, setname] = useState('Enter your name');
    return (
        <div className='container bg-dark p-5 mx-auto text-white'>
            <h1 className='p-2 m-2 text-center text-dark bg-warning rounded-3'>{props.title}</h1>
            <div className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" value={name} onChange={onchange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={uppername}>Submit</button>
                </div>
            </div>
        </div>
    )
}

Signup.propTypes = {
    title: PropTypes.string,
}

Signup.defaultProps = {
    title: "Enter your details to sign up",

};