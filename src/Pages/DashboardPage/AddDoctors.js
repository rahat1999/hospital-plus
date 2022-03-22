import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const AddDoctors = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://damp-spire-26067.herokuapp.com/addDoctors', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    Swal.fire(
                        'Service Adde successfully',
                        '',
                        'success'
                    )
                    reset()
                }
                else {
                    Swal.fire(
                        'Something went wrong.Could not Added service!',
                        '',
                        'worning'
                    )
                }
            })
    }
    return (
        <div className='py-5'>
            <h2 className='text-center text-violet-600'>Add Doctors</h2>
            <br />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="from-input">
                        <input placeholder='Enter Doctor image URL' type='img' {...register("img")} required />
                    </label>
                    <label className="from-input">
                        <input placeholder='Enter Doctor name' type='name' {...register("name")} required />
                    </label>
                    <label className="from-input">
                        <input placeholder='Enter experts things' type='text' {...register("expert")} required />
                    </label>
                    <label className="from-input">
                        <input placeholder='Enter City name' type='city' {...register("city")} required />
                    </label>


                    {errors.exampleRequired && <span>This field is required</span>}

                    <label className="from-input">
                        <button type="submit" className='cursor-pointer duration-75 bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-md shadow-md text-white text-bold'><strong>Submit</strong></button>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default AddDoctors;