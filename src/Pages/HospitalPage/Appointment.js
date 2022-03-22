import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';
import Swal from 'sweetalert2';

const Appointment = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState('')
    useEffect(() => {
        fetch('https://damp-spire-26067.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(true)
            })
    }, [])
    const service = services.filter(result => result._id === id)


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        data.visit = service[0]?.visit
        data.email = user.email
        data.status = "Pending"
        if (data.gender === "") {
            return setErr('Select your gender')
        }
        else {
            setErr('')
            fetch('https://damp-spire-26067.herokuapp.com/appointments', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ data })
            })
                .then(res => res.json())
                .then(result => {

                    if (result.acknowledged) {
                        Swal.fire(
                            'Appointment successfully done',
                            '',
                            'success')
                        reset()
                    }
                })
        }
    };

    // console.log(service);
    return (
        <div className='py-5 bg-blue-50'>
            <h2 className='text-center text-violet-500 mb-4'>Get An Appointment</h2>
            {
                loading ? <Container >
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className=' p-3 bg-violet-100' style={{ borderBottom: '4px solid #8b5cf6' }}>
                            <div className='pb-3'><img className='mx-auto' src={service[0]?.img} alt="" /></div>
                            <h5 className='text-center bg-blue-600 text-white p-1'>
                                {service[0]?.serviceName}</h5>
                            <p className='text-violet-600 text-center font-bold mb-0'> {service[0]?.time}</p>
                            <div className="appointment-card text-orange-600">
                                <div>
                                    <h5 >{service[0]?.doctor}</h5>
                                </div>
                                <div>
                                    <h5 >{service[0]?.visit} BDT</h5>
                                </div>
                            </div>
                        </div>
                        {/* -------------------- */}
                        <div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='form-container'>
                                    <label className="appointment_form">
                                        <b>Service Name</b>
                                        <br />
                                        <input value={service[0]?.serviceName} type='serviceName' {...register("serviceName")} required />
                                    </label>
                                    <label className="appointment_form">
                                        <b>Select an Appointment date</b>
                                        <br />
                                        <input type='date' {...register("appointmentDate")} required />
                                    </label>
                                    <br />
                                    <label className="appointment_form">
                                        <b>Phone No</b>
                                        <br />
                                        <input placeholder='Your Phone No' type='number' {...register("phone")} required />
                                    </label>
                                    <label className="appointment_form">
                                        <b>Patient Name</b>
                                        <br />
                                        <input defaultValue={user.displayName} type='namw' {...register("PatientName")} required />
                                    </label>
                                    <label className="appointment_form">
                                        <b>Gender</b>
                                        <br />
                                        <select className='gender-content' {...register("gender")}>
                                            <option value="">-select-</option>
                                            <option required value="female">Female</option>
                                            <option required value="male">Male</option>
                                            <option required value="other">other</option>
                                        </select>
                                        {err && <p className='text-danger font-bold'>{err}</p>}
                                    </label>

                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <label className="appointment_form mx-5">
                                        <button type="submit" className='cursor-pointer duration-75 bg-violet-600 hover:bg-violet-500 px-5 py-2 rounded-md shadow-md text-white text-bold'><strong>Submit</strong></button>
                                    </label>
                                </div>
                            </form>
                        </div>

                    </div>
                </Container>
                    : <p className='text-center mt-5 font-bold text-blue-600'>Loading...</p>
            }
        </div>
    );
};

export default Appointment;