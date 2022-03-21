import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-yellow-100 h-screen flex justify-items-center items-center m-0 place-content-center text-center'>
            <div>
                <h2 className='text-red-500'>Something Went wrong <i className="fa-solid fa-circle-question"></i></h2>
                <Link to='/'>
                    <button type="button" className="cursor-pointer duration-75 bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-md shadow-md text-white text-bold">
                        Go back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;