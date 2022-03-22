import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from './../../hooks/useAuth';


const MyAppointment = () => {
    const { user } = useAuth()

    const [myAppointments, setMyappointments] = useState([])
    console.log(myAppointments.length);
    const [loading, setLoading] = useState()
    useEffect(() => {
        fetch('https://damp-spire-26067.herokuapp.com/allAppointments')
            .then(res => res.json())
            .then(data => {
                setMyappointments(data)
                setLoading(true)
            })
    }, [])

    const myAppiont = myAppointments.filter(appointment => appointment.data.email === user.email)

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
                        const remaining = myAppiont.filter(data => data._id !== id)
                        setMyappointments(remaining)
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
                            'warning'
                        )
                    }
                })
        }
    }
    return (
        <Container>

            <h2 className='py-5 text-center text-blue-600'>My Appointment</h2>

            <div>
                {
                    loading ? <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Patient</th>
                                <th>Status</th>
                                <th>Services</th>
                                <th>Fees</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myAppiont.map((my, i) =>
                                    <tr key={my._id}>
                                        <td>{i + 1}</td>
                                        <td className='font-bold'>{my.data.PatientName}</td>
                                        <td >
                                            <span className=" p-1 font-bold">
                                                {my.status ? <span className='bg-green-500'>{my.status}</span> : "Pending"}</span>
                                        </td>
                                        <td className='font-bold'>{my.data.visit} TK</td>
                                        <td className='font-bold'>{my.data.serviceName}</td>
                                        <td>
                                            <button onClick={() => deleteBtn(my._id)} className=' cursor-pointer duration-75 bg-red-400 hover:bg-red-600 font-bold px-2 py-2 rounded-md shadow-md text-white text-bold'>Cancle</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </Table> : <p className='text-center mt-5 text-green-500 font-bold'></p>
                }
            </div>
        </Container>
    );
};

export default MyAppointment;