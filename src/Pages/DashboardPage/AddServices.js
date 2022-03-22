import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const AddServices = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://damp-spire-26067.herokuapp.com/addServices', {
            method: "POST",
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
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
    };
    return (
        <div className='py-5'>
            <Container>
                <h2 className='text-center text-violet-600 '> Add Services </h2>
                <br />
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="from-input">
                            <input placeholder='Service image URL' type='img' {...register("img")} required />
                        </label>
                        <label className="from-input">
                            <input placeholder='Doctor name' type='name' {...register("doctor")} required />
                        </label>
                        <label className="from-input">
                            <input placeholder='Service name' type='service name' {...register("serviceName")} required />
                        </label>
                        <label className="from-input">
                            <input placeholder='Doctor visit fees' type='number' {...register("visit")} required />
                        </label>
                        <label className="from-input">
                            <input placeholder='Add Doctor available service time' type='multiple time' {...register("time")} required />
                        </label>

                        {errors.exampleRequired && <span>This field is required</span>}

                        <label className="from-input">
                            <button type="submit" className='cursor-pointer duration-75 bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-md shadow-md text-white text-bold'><strong>Submit</strong></button>
                        </label>
                    </form>
                </div>
            </Container>

        </div>
    );
};

export default AddServices;