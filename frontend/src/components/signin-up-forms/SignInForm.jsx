import axios from 'axios';
import React, {useState} from 'react';
import "./Signup.css";

const SignInForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/api/signin"
            const userData = {email: email, password: password};
            const {data: res} = await axios.post(url, userData)
            localStorage.setItem("token", res.token)
            window.location = "/"
            
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
        }
    }

    return (
        <form action="#" className="form form_signin">
        <h3 className="form__title">Loggin</h3>
        <p>
            <input 
                type="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                onFocus={() => setError('')}
                className="form__input" 
                placeholder="E-mail"/>
        </p>
        <p>
            <input 
                type="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                onFocus={() => setError('')} 
                className="form__input" 
                placeholder="Password"/>
        </p>
        <p>
            <button onClick={handleSubmit} className="form__btn">Sign In</button>
        </p>
        {error? <p style={{color: "red"}}>{error}</p>: <></>}
    </form>
    );
};

export default SignInForm;