import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

const AllAppointment = () => {
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(false)
    const [appointmentID, setAppointmentId] = useState('')
    const { register, handleSubmit } = useForm();


    useEffect(() => {
        fetch('https://damp-spire-26067.herokuapp.com/allAppointments')
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
                setLoading(true)
            })
    }, [])
    const deleteBtn = (id) => {
        const proced = window.confirm('Are You sure Wanna cancle it?')
        if (proced) {
            const uri = `https://damp-spire-26067.herokuapp.com/allAppointments/${id}`
            fetch(uri, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        const remaining = appointments.filter(data => data._id !== id)
                        setAppointments(remaining)
                        Swal.fire(
                            'Cancle Successfull!',
                            '',
                            'success'
                        )
                    }
                    else {
                        Swal.fire(
                            'Something went wrong.Could not cancled!',
                            '',
                            'worning'
                        )
                    }
                })
        }
    }
    const handleStatus = (apID) => {
        setAppointmentId(apID)
    }
    const onSubmit = data => {
        const uri = `https://damp-spire-26067.herokuapp.com/statusUpdate/${appointmentID}`
        fetch(uri, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(da => {
                if (da.modifiedCount > 0) {
                    const remaining = appointments.filter(data => data._id !== appointmentID)
                    setAppointments(remaining)
                    Swal.fire(
                        'Update Successfull!',
                        '',
                        'success'
                    )

                }
                else {
                    Swal.fire(
                        'Something went wrong.Could not Update!',
                        '',
                        'worning'
                    )
                }
            })
    };


    return (
        <Container className='py-5'>
            {
                loading ? <section className="">
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>*</th>
                                <th>Patient Name/</th>
                                <th>Appointment/
                                    <br />
                                    Date
                                </th>
                                <th>Fees</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((appoint, i) =>
                                    <tr key={appoint._id}>
                                        <td>{i + 1}</td>
                                        <td>
                                            <span className='font-bold text-green-600'>{appoint?.data?.PatientName ? appoint?.data?.PatientName : 'Hero'}</span>
                                            <br />
                                            {appoint?.data?.email}
                                        </td>

                                        <td className='text-blue-500'>
                                            {appoint?.data?.serviceName}
                                            <br />
                                            <span className='font-bold'>{appoint?.data?.appointmentDate}</span>
                                        </td>
                                        <td>
                                            <span className='font-bold'> {appoint?.data?.visit} TK</span>
                                            <br />
                                            Discount
                                        </td>
                                        <td>
                                            <span className='font-bold '>{appoint.status ? <span className='bg-green-500'>{appoint.status}</span> : "Pending"}</span>
                                            <br />
                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                <select className=' text-violet-500 border-1 ' {...register("status")}>
                                                    <option value="Approve">Approve</option>
                                                </select>
                                                <br />
                                                <button className='mt-1 cursor-pointer duration-75 bg-lime-600 hover:bg-lime-500 px-2  rounded-md shadow-md text-white text-bold' type="submit" onClick={() => handleStatus(appoint._id)}>Submit</button>
                                            </form>
                                        </td>

                                        <td>
                                            <button onClick={() => deleteBtn(appoint._id)} className=' cursor-pointer duration-75 bg-red-400 hover:bg-red-600 font-bold px-2 py-2 rounded-md shadow-md text-white text-bold'>Cancle</button>
                                        </td>


                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>

                </section>
                    : <p className="text-center mt-5 text-blue-600 font-bold">Loading... </p>
            }
        </Container>
    );
};

export default AllAppointment;