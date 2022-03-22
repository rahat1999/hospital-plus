import React from 'react';
import { Container } from 'react-bootstrap';
import '../../StyleSheet.css'
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Services = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://damp-spire-26067.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(true)
            })
    }, [])

    const handlePageClick = (data) => {

        let currentPage = data.selected + 1
        console.log(currentPage);
    }

    return (
        <div>
            {
                loading ? <Container>
                    <section className='py-5 grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
                        {
                            items.map(item =>
                                <div key={item._id} className="border-2 px-2 py-3 rounded-md shadow hover:bg-orange-100 duration-75">
                                    <h5 className='text-center bg-blue-400 text-white p-1 shadow'>{item.serviceName}</h5>
                                    <p className='text-violet-600 text-center font-bold mb-0'>{item.time}</p>
                                    <p className='text-violet-600 text-center font-bold mb-0'>{item.time}</p>
                                    <div className="appointment-card text-orange-400">
                                        <div>
                                            <h5 >{item.doctor}</h5>
                                        </div>
                                        <div>
                                            <h5 >{item.visit} BDT</h5>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <NavLink to={`/appointment/${item._id}`}>
                                            <button
                                                className='bcursor-pointer duration-75 bg-emerald-500 hover:bg-emerald-600 px-2 py-1 rounded-md shadow-md text-white font-bold'>
                                                Apointment
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            )
                        }
                    </section>
                </Container>
                    : <p className='text-center mt-5 font-bold text-blue-600'>Loading...</p>
            }
            <div className='my-5'>

                <ReactPaginate

                    previousLabel={"previous"}
                    nextLabel={'next'}
                    breakLabel={"..."}
                    pageCount={23}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
};

export default Services;