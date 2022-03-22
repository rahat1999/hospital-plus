import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

const CustomizeReview = () => {
    const { register, handleSubmit } = useForm();

    const [reviews, setReview] = useState([])
    const [loading, setLoading] = useState(false)
    const [reviewId, setReviewId] = useState('')

    useEffect(() => {
        fetch('https://damp-spire-26067.herokuapp.com/coustomerReview')
            .then(res => res.json())
            .then(data => {
                setReview(data);
                setLoading(true)
            })
    }, [])

    const deleteBtn = (id) => {
        console.log(id)
        const proced = window.confirm('Are You sure Wanna cancle it?')
        if (proced) {
            const uri = `https://damp-spire-26067.herokuapp.com/deleteReview/${id}`
            fetch(uri, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    if (result.deletedCount > 0) {
                        const remaining = reviews.filter(data => data._id !== id)
                        setReview(remaining)
                        Swal.fire(
                            'Cancle Successfull!',
                            '',
                            'success'
                        )
                    }
                    else {
                        Swal.fire(
                            'Something went wrong.Could not cancled!',
                            '',
                            'worning'
                        )
                    }
                })
        }
    }


    const handleStatus = (id) => {
        setReviewId(id)
    }
    const onSubmit = data => {
        console.log(data);
        const uri = `https://damp-spire-26067.herokuapp.com/updateReviewStatus/${reviewId}`
        fetch(uri, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(da => {
                console.log(da);
                if (da.modifiedCount > 0) {
                    const remaining = da.filter(data => data._id !== reviewId)
                    setReview(remaining)
                    Swal.fire(
                        'Update Successfull!',
                        '',
                        'success'
                    )
                } else {
                    Swal.fire(
                        'Something went wrong try again!',
                        '',
                        'worning'
                    )
                }
            })
    };


    return (
        <Container className='mt-5'>
            {
                loading ?
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Rating</th>
                                <th>Review Approve</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                reviews.map((rev, i) => <tr key={rev._id}>
                                    <td>{i + 1}</td>
                                    <td>{rev?.displayName}</td>
                                    <td>{rev.rating}</td>
                                    <td>
                                        {rev.status}
                                        <br />
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <select className=' text-violet-500 border-1 ' {...register("status")}>
                                                <option value="block">Approve</option>
                                            </select>
                                            <br />
                                            <button className='mt-1 cursor-pointer duration-75 bg-lime-600 hover:bg-lime-500 px-2  rounded-md shadow-md text-white text-bold' type="submit" onClick={() => handleStatus(rev._id)}>Submit</button>
                                        </form>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => deleteBtn(rev._id)}
                                            className=' cursor-pointer duration-75 bg-red-400 hover:bg-red-600 font-bold px-2 py-2 rounded-md shadow-md text-white text-bold'>Cancle</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                    : <p className="text-center font-bold mt-5 text-green-600">Loading....</p>
            }
        </Container>
    );
};

export default CustomizeReview;