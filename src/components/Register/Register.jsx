import React, { useState, setState } from 'react';
import './style.scss'



export const Register = () => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () => {
        console.log(firstName, lastName, email, password, confirmPassword);
    }


    return (

        <div className="form container-fluid g-2 mt-5">
            <div className='fb'>
                <div className="username">
                    <input className="form__input " type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                </div>
                <div className="lastname">
                    <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="LastName" />
                </div>
                <div className="email">
                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>
                <div className="password">
                    <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>
                <div className="confirm-password">
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
                </div>

                <div class="footer">
                    <button onClick={() => handleSubmit()} type="submit" class="btn">Register</button>
                </div>

            </div>
        </div>

    )
}
