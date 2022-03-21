import React from 'react';
import { useForm } from "react-hook-form";
import '../../StyleSheet.css'
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Register = () => {
    const { user, authError, registerUser, isLoading } = useAuth()
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password, name } = data;
        registerUser(email, password, name, navigate)
        reset()
    };

    return (
        <div className=''>
            <div>
                <h2 className='text-center lg:mb-3 text-violet-600 register-title'>Please Register...</h2>
            </div>
            <div className='register-form'>
                {
                    !isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="from-input">
                            <input placeholder='Full Name' type='text' {...register("name")} required />
                        </label>

                        <label className="from-input">
                            <input placeholder='Email' type='email' {...register("email")} required />
                        </label>
                        <label className="from-input">
                            <input placeholder='Enter a Password' type='password' {...register("password")} required />
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
            <div className='text-center'>
                {
                    isLoading && <p className='font-bold text-blue-600'>Loading...</p>
                }
                <p className='go_to_login text-center lg:mt-2'><strong>Already have account?        <NavLink to="/login">Please Login</NavLink></strong></p>
            </div>
        </div >
    );
};

export default Register;