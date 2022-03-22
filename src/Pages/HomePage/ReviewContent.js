import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Container } from 'react-bootstrap';
const ReviewContent = () => {
    const [reviews, setReview] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://damp-spire-26067.herokuapp.com/coustomerReview')
            .then(res => res.json())
            .then(data => {
                setReview(data);
                setLoading(true)
            })
    }, [])
    return (
        <div className="bg-orange-50">
            <Container>
                {
                    loading ? <div style={{ boxSizing: 'boder-box' }}>
                        <h2 className='text-center text-blue-600 pt-5'>Review</h2>
                        <section className='grid lg:grid-cols-1 gap-7 py-5 '>
                            {
                                reviews.map(review =>

                                    <div style={{ display: review.status }} key={review._id}
                                        className=" border-2 ps-4 hover:bg-gray-100 shadow-md rounded">

                                        <div className='ms-5'>
                                            <ReactStars
                                                count={5}
                                                value={review.rating}
                                                size={25}
                                                activeColor="#ffd704"
                                                disabled
                                            />
                                        </div>
                                        <p className='text-warp'>{review.review}</p>
                                    </div>)
                            }
                        </section>
                    </div> : <p className='text-center mt-5 font-bold text-green-600'>Loading..</p>
                }
            </Container>
        </div>
    );
};

export default ReviewContent;