import React from 'react';
import { Container } from 'react-bootstrap';
import client1 from '../../img/patners/client1.jpg'
import client2 from '../../img/patners/client2.jpg'
import client3 from '../../img/patners/client3.jpg'
import client4 from '../../img/patners/client4.jpg'
const patners = [
    {
        id: 1,
        img: client4,
    },
    {
        id: 2,
        img: client2,
    },
    {
        id: 3,
        img: client1,
    },
    {
        id: 4,
        img: client3,
    },
]
const OurPatners = () => {
    return (
        <div className='py-5 bg-violet-400 shadow'>
            <Container>
                <h2 className='pb-2  uppercase'> Our patners</h2>
                <div className="grid lg:grid-cols-4 gap-5 my-4">
                    {
                        patners.map(patner =>
                            <div key={patner.id}>
                                <img src={patner?.img} alt="" />
                            </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default OurPatners;