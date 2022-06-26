import React, {useState} from 'react';
import "./Signup.css";
import axios from 'axios';

const SignUpForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        e.preventDefault()
        try {
            const url = "http://localhost:5000/api/signup"
            const {data:res} = await axios.post(url, data)
            console.log(res.message)
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            window.location.reload()
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
            console.log(error)
        }
    }

    return (
        <form action="#" className="form form_signup">
            <h3 className="form__title">Registration</h3>
            <p>
                <input 
                    type="text" 
                    value={firstName} 
                    onChange={(e) => {setFirstName(e.target.value)}} 
                    onFocus={() => setError('')} 
                    className="form__input" 
                    placeholder="First Name"
                />
            </p>
            <p>
                <input 
                    type="text"
                    value={lastName}
                    onChange={(e) => {setLastName(e.target.value)}}
                    onFocus={() => setError('')}  
                    className="form__input" 
                    placeholder="Last Name"
                />
            </p>
            <p>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    onFocus={() => setError('')}  
                    className="form__input" 
                    placeholder="E-mail"
                />
            </p>
            <p>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    onFocus={() => setError('')}  
                    className="form__input" 
                    placeholder="Password"
                />
            </p>
            <p>
                <button onClick={handleSubmit} className="form__btn form__btn_signup">Sign Up</button>
            </p>
            {error? <p style={{color: "red"}}>{error}</p>: <></>}
        </form>
    );
};

export default SignUpForm;