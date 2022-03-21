import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../img/banner/5330588.jpg'
import banner2 from '../../img/banner/5330590.jpg'
import banner3 from '../../img/banner/6154214.jpg'
import '../../StyleSheet.css'
const Banner = () => {
    return (
        <div className='banner-container' >
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100 banner-img"
                        src={banner2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img

                        className="d-block w-100 banner-img"
                        src={banner3}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;