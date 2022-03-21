import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../StyleSheet.css'

const Footer = () => {
    return (
        <div className='bg-violet-600'>
            <Container>
                <Row xs={1} md={2} className="g-4 text-center">
                    <Col>
                        <div className='footer'>
                            <h4>Hospital +</h4>
                            <a target='_blank' href="www.instagram.com"><i className="fab fa-instagram-square"></i></a>
                            <br />
                            <a target='_blank' href="www.facbook.com"><i className="fab fa-facebook-square"></i></a>
                            <br />
                            <a target='_blank' href="www.youtube.com"><i className="fab fa-youtube-square"></i></a>
                        </div>
                    </Col>
                    <Col>
                        <div className='footer-info'>
                            <h4>Contact us!</h4>
                            <p><i className="fa-solid fa-location-dot"></i>  Dhanmodi 24/12</p>
                            <p><i className="fa-solid fa-phone"></i>  +88-9384923343</p>
                            <p><i className="fa-solid fa-envelope"></i>  hospitalplus@gmail.com</p>

                        </div>
                    </Col>
                </Row>
                <p className='end-text'>Hospital Plus @ 2022</p>
            </Container>
        </div >
    );
};

export default Footer;