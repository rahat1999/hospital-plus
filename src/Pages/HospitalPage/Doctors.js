import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(false)

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    }
    useEffect(() => {
        fetch('https://damp-spire-26067.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
                setLoading(true)
            })

    }, [])
    return (
        <div className='pt-4 py-5 bg-slate-300'>
            <h2 className='text-center text-violet-600'>Our Doctors</h2>
            {
                loading ?
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        pagination={pagination}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="mySwiper pb-5 pt-3"

                    >
                        {
                            doctors.map(doctor =>
                                <SwiperSlide key={doctor._id}>
                                    <Card style={{ width: '20rem' }}>
                                        <Card.Img variant="top" src={doctor.img} />
                                        <Card.Body>
                                            <Card.Title className='text-violet-500'>{doctor.name}</Card.Title>
                                            <Card.Text>
                                                {doctor.expert.slice(0, 40)}
                                                <br />
                                                <span className='font-bold text-blue-700'>{doctor.city}</span>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>

                            )
                        }
                    </Swiper>
                    :
                    <p className='text-center mt-5 font-bold text-green-700'>Loading...</p>
            }
        </div >
    );
};

export default Doctors;