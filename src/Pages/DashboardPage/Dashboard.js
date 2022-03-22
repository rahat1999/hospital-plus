import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';


const Dashboard = ({ show, handleClose, }) => {
    const { admin } = useAuth()
    return (
        <div>
            <Offcanvas className='dashboard-offcanvas' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        {
                            admin ? "Admin Dashboard" : "User Dashboard"
                        }
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='text-justify ms-5'>
                    <div>
                        <Link to='services'>
                            <button className='text-center font-bold my-1 hover:text-orange-600'>Service</button>
                        </Link>
                    </div>
                    {
                        admin ? <>
                            <div>
                                <Link to='dashboard/allAppointment'>
                                    <button className='text-center font-bold my-1 hover:text-orange-600'>All Appointments</button>
                                </Link>
                            </div>
                            <div>
                                <Link to='dashboard/customizeReview'>
                                    <button className='text-center font-bold my-1 hover:text-orange-600'>
                                        Customize Review
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <Link to='dashboard/makeAdmin'>
                                    <button className='text-center font-bold my-1 hover:text-orange-600'>Make Admin</button>
                                </Link>
                            </div>
                            <div>
                                <Link to='dashboard/addServices'>
                                    <button className='text-center font-bold my-1 hover:text-orange-600'>Add Service</button>
                                </Link>
                            </div>
                            <div>
                                <Link to='dashboard/addDoctors'>
                                    <button className='text-center font-bold my-1 hover:text-orange-600'>Add Doctors</button>
                                </Link>
                            </div>

                        </>
                            :
                            <>
                                <div>
                                    <Link to='dashboard/myAppointment'>
                                        <button className='text-center font-bold my-1'>My Appointment</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='dashboard/review'>
                                        <button className='text-center font-bold my-1'>Review</button>
                                    </Link>
                                </div>
                            </>
                    }


                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Dashboard;