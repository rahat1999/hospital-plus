import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);

    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://damp-spire-26067.herokuapp.com/users/admin', {
            method: "put",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    Swal.fire('Make Admin successfully')
                    setEmail('')
                }
                else {
                    Swal.fire({
                        icon: 'info',
                        title: 'Oops...',
                        text: "Something went wrong! May Be This email Already Admin or Didn't registred yet",
                    })
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2 className='text-center my-5 text-violet-500'>Make An Admin</h2>
            <div className='text-center'>
                <form onSubmit={handleAdminSubmit}>
                    <lable className='from-input'>
                        <i className="fa-solid fa-envelope"></i> Email : <input className='w-25 shadow' type="email" onBlur={handleOnBlur} />
                    </lable>

                    <br />
                    <br />
                    <button type="submit" className='cursor-pointer duration-75 bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-md shadow-md text-white text-bold'><strong>Submit</strong></button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;