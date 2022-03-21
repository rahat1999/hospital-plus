import React from 'react';
import { Container } from 'react-bootstrap';

const Featurs = () => {
    return (
        <div className='bg-zinc-200'>
            <Container >
                <h2 className='text-center text-violet-600 py-5 uppercase'> features</h2>
                <div className='grid lg:grid-cols-3 gap-7 text-center'>
                    <div>
                        <p><i className="icon-warper fa fa-h-square"></i></p>
                        <h5>Great Infrastructure</h5>
                        <p>Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.Tempora nam consequatur praesentium.</p>
                    </div>
                    <div>
                        <p> <i className="icon-warper fa-solid fa-kit-medical"></i></p>
                        <h5>ADVANCED TECHNOLOGY</h5>
                        <p>Dolor sit amet consectetur adipisicing elit. Dolore excepturi necessitatibus eaque? Adipisci cumque, cupiditate ut sunt.</p>
                    </div>
                    <div>
                        <p><i className="icon-warper fa-solid fa-user-doctor"></i></p>
                        <h5>HEALTHCARE SOLUTIONS</h5>
                        <p>Perferendis magni libero qui nobis, facere commodi nihil totam voluptatem non cum.Aquaman was clever.</p>
                    </div>
                    <div>
                        <p><i className="icon-warper fa-solid fa-truck-medical"></i></p>
                        <h5>24/7 AVAILABILITY</h5>
                        <p> Eius ducimus repellendus doloribus esse tempora nam consequatur praesentium. Dolore, possimus placeat.</p>
                    </div>
                    <div>
                        <p><i className="icon-warper fa fa-stethoscope"></i></p>
                        <h5>Excellent Ancillary Services</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse voluptas iusto facere accusantium maxime!</p>
                    </div>
                    <div>
                        <p><i className="icon-warper fa fa fa-stethoscope"></i></p>
                        <h5>Social Services</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil eos explicabo impedit iusto quisquam.</p>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Featurs;