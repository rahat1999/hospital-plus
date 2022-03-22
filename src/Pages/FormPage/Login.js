import React from 'react';
import { useForm } from "react-hook-form";
import '../../StyleSheet.css'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
const Login = () => {
    const { user, loginWithGoogle, loginWithEmailAndPassword, isLoading, authError, } = useAuth()
    const location = useLocation()
    const navigate = useNavigate();
    // console.log(user);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        loginWithEmailAndPassword(email, password, location, navigate)
        reset()
    };

    const handleGoogleLogin = (e) => {
        loginWithGoogle(location, navigate)
        e.preventDefault();
    }

    return (
        <div className=''>
            <div className='login-title'>
                <h2 className='text-center text-violet-600'>Please LogIn...</h2>
                <button onClick={handleGoogleLogin} type='buttton' className='bcursor-pointer duration-75 bg-emerald-500 hover:bg-emerald-600 px-4 py-3 rounded-md shadow-md text-white font-bold'>Google Login</button>
            </div>
            <div className='login-form'>

                {
                    isLoading ? <p className='font-bold text-blue-600'>Loading...</p>
                        : <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="from-input">
                                <input placeholder='Email' type='email' {...register("email")} required />
                            </label>
                            <label className="from-input">
                                <input placeholder='Password' type='password' {...register("password")} required />
                            </label>

                            {errors.exampleRequired && <span>This field is required</span>}

                            {user.email && <p className='text-center bg-primary text-white'>Login successfully</p>}
                            {authError && <p className='text-center bg-danger text-white'>{authError}</p>}

                            <label className="from-input">
                                <button type="submit" className='cursor-pointer duration-75 bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-md shadow-md text-white text-bold'><strong>Submit</strong></button>
                            </label>
                        </form>
                }

            </div>
            <p className='go_to_register text-center'><strong>Don't have account? <Link to="/register">Please Register</Link></strong></p>
        </div>
    );
};

export default Login;