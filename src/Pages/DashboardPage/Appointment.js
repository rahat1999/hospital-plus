import React from 'react';
import { Container } from 'react-bootstrap';
import '../../StyleSheet.css'
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
const Appointment = () => {
    const [items, setItems] = useState([])
    const [pageCount, setPageCount] = useState(0)

    const appointments = [
        {
            img: "https://i.ibb.co/0hZznBP/Competitive-Doctors.jpg",
            doctor: "Dr Mistry",
            serviceName: 'Competitive Doctors',
            visit: "600",
            time: "12:00 PM - 01:00 PM"
        },
        {
            img: "https://i.ibb.co/vcB7JLj/Eldery-Care.jpg",
            doctor: "Dr Brick Wall",
            serviceName: 'Eldery-Care',
            visit: "1000",
            time: "8:00 PM - 9:00 PM"
        },
        {
            img: "https://i.ibb.co/r4nc4Bv/Eye-care-280x215.jpg",
            doctor: "Dr Mangle",
            serviceName: 'Eye Care',
            visit: "700",
            time: "11:30 AM - 12:30 PM"
        },
        {
            img: "https://i.ibb.co/d7LZqgR/Medical-Counseling.jpg",
            doctor: "Dr Nervo",
            serviceName: 'Medical Counseling',
            visit: "500",
            time: "7:30 PM - 8:30 AM"
        },
        {
            img: "https://i.ibb.co/YTvyjdk/Nephrologist-Care-280x215.jpg",
            doctor: "Dr Johnathan",
            serviceName: 'Nephrologist Care',
            visit: "800",
            time: "8:00 AM - 9:00 AM"
        },
        {
            img: "https://i.ibb.co/5Mrz8H1/Pediatrician-Clinic.jpg",
            doctor: "Dr Pullen",
            serviceName: 'Pediatrician Clinic',
            visit: "500",
            time: "5:00 PM - 6:00 PM"
        },
        {
            img: "https://i.ibb.co/z76KB8T/prenatal-care.jpg",
            doctor: "Dr Bonebrake",
            serviceName: 'Prenatal Care',
            visit: "600",
            time: "9:00 PM - 11:00 PM"
        },
        {
            img: "https://i.ibb.co/pxQSMVR/Rehabilitation-Center.jpg",
            doctor: " Dr Everhart",
            serviceName: 'Rehabilitation Center',
            visit: "500",
            time: "3:00 PM - 4:00 PM"
        },
    ]
    const handlePageClick = (data) => {

        let currentPage = data.selected + 1
        console.log(currentPage);
    }

    return (
        <div>
            <Container>
                <section className='py-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        appointments.map(app =>
                            <div className="border-2 px-2 py-3 rounded-md shadow hover:bg-orange-100 duration-75">
                                <h5 className='text-center bg-blue-400 text-white p-1 shadow'>{app.serviceName}</h5>
                                <p className='text-violet-600 text-center font-bold mb-0'>{app.time}</p>
                                <div className="appointment-card text-orange-400">
                                    <div>
                                        <h5 >{app.doctor}</h5>
                                    </div>
                                    <div>
                                        <h5 >{app.visit} BDT</h5>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button
                                        className='bcursor-pointer duration-75 bg-emerald-500 hover:bg-emerald-600 px-2 py-1 rounded-md shadow-md text-white font-bold'>
                                        Appointment
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </section>
            </Container>
            <div className='my-5'>

                <ReactPaginate

                    previousLabel={"previous"}
                    nextLabel={'next'}
                    breakLabel={"..."}
                    pageCount={pageCount}
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

export default Appointment;