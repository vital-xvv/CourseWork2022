import React, {useRef} from 'react';
import SignInForm from './SignInForm';
import './Signup.css';
import SignUpForm from './SignUpForm';

const LoginSignUp = () => {
    const ref = useRef();
    const sef = useRef();

    const handleClickIn = () => {
        const form = ref.current;
        form.className = 'form_box';
        sef.current.className = "main-login-signin-container";
    }

    const handleClickUp = () => {
        const form = ref.current;
        form.className = 'form_box active';
        sef.current.className = "main-login-signin-container active";
    }

    return (
        <div ref={sef} className='main-login-signin-container'>
        <article  className="container">
            <div className="block">
                <section className="block_item block__item">
                    <h2 className="block_item__title">Do you have an account?</h2>
                    <button onClick={handleClickIn} className="block_item__btn signin_btn">Sign in</button>
                </section>
                <section className="block_item block__item">
                    <h2 className="block_item__title">Don't you have an account?</h2>
                    <button onClick={handleClickUp} className="block_item__btn signup_btn">Sign up</button>
                </section>
            </div>
            <div ref={ref} className="form_box">
                <SignInForm/>
                <SignUpForm/>
            </div>
        </article>
        </div>
    );
};

export default LoginSignUp;