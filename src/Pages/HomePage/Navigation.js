import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Dashboard from '../DashboardPage/Dashboard';


const Navigation = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { user, logOut } = useAuth()
    return (
        <div>
            <header className='lg:flex lg:justify-around text-center py-2 bg-gray-300'>
                <div className=''>
                    <span className='text-blue-700 font-semibold'>
                        <i className="fa-solid fa-phone text-black"></i> Contact:+0140832940982</span>
                </div>
                <div>
                    <span className='text-blue-700 font-semibold'>
                        <i className="fa-solid fa-truck-medical text-red-600"></i> Emargiencey: 999</span>
                </div>
                <div>
                    <span className='text-blue-700 font-semibold'>
                        <i className="fa-solid fa-envelope text-black"></i> hospitalplus@gmail.com</span>
                </div>
            </header>
            <Navbar className='bg-violet-500 shadow-lg py-3 ' expand="lg" >
                <Container fluid className='px-5'>
                    <Navbar.Brand className='text-xl font-extrabold bg-violet-700 uppercase px-2 rounded text-white shadow-md' href="#">
                        <i className="fa-solid fa-hospital bold text-white"></i>     Hospital Pluse
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/'>
                                <Nav.Link className='font-bold' href="#action1">Home</Nav.Link>
                            </Link>
                            <Link to='services'>
                                <Nav.Link className='font-bold ' href="#action2">Services</Nav.Link>
                            </Link>
                            <Link to='doctors'>
                                <Nav.Link className='font-bold ' href="#action2">Doctors</Nav.Link>
                            </Link>
                            {
                                user.email && <NavLink to='dashboard'>
                                    <Nav.Link onClick={handleShow} className='font-bold' href="#deets">Dashboard</Nav.Link>

                                </NavLink>
                            }
                        </Nav>
                        <Nav>

                            {
                                user.email ? <>

                                    <Nav.Link className='font-bold' href="#deets">{user?.displayName}</Nav.Link>
                                    <Nav.Link className='font-bold' href="#deets">
                                        <button onClick={logOut} className='hover:text-white font-bold'>Logout</button>
                                    </Nav.Link>

                                </>
                                    :
                                    <Link to='/login'>
                                        <Nav.Link className='font-bold' href="#deets">LogIn</Nav.Link>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Dashboard
                show={show}
                handleClose={handleClose}
            />
        </div >
    );
};

export default Navigation;