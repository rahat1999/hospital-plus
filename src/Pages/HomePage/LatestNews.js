import React from 'react';
import { Container } from 'react-bootstrap';
import Lt1 from "../../img/LatestNews/Great-Team-280x215.jpg"
import Lt2 from "../../img/LatestNews/Letest2.jpg"
import Lt3 from "../../img/LatestNews/etest3.jpg"
import Lt4 from "../../img/LatestNews/etest4.jpg"
const latestNews = [
    {
        id: '99',
        img: Lt1,
        news: "Together we can do so much",
        date: 'Feb 8, 2022',
        details: "Chosen from among all others by the Immortal Elders - Solomon, Hercules, Atlas, Zeus, Achilles, Mercury..."
    },
    {
        id: '100',
        img: Lt2,
        news: "The Three Musketeers Surgical Team",
        date: 'Mar 20, 2022',
        details: "One thousand years ago, superstition and the sword ruled. It was a time of darkness. It..."
    },

    {
        id: '101',
        img: Lt3,
        news: "Accredited surgical facility",
        date: 'Mar 8, 2022',
        details: "Since the dawn of time, there has been a process to developing web presentations - you..."
    },

    {
        id: '102',
        img: Lt4,
        news: "Health checks for babies",
        date: 'Mar 8, 2022',
        details: "Somewhere out in space live The Herculoids! Zok, the laser-ray dragon! Igoo, the giant rock ape!..."
    },
]
const LatestNews = () => {
    return (
        <div className='py-5 bg-purple-100'>
            <h2 className='text-center text-violet-600  uppercase'> LATEST NEWS</h2>
            <p className='text-center'>Latest up-to-date information from our public relation department.</p>
            <Container>
                <div className='grid lg:grid-cols-4 gap-3 '>
                    {
                        latestNews.map(ns =>
                            <div key={ns.id} className="border-2 bg-slate-300 p-1 rounded-md">
                                <div>
                                    <div><img src={ns?.img} alt="" /></div>
                                    <div>
                                        <h5 className='text-violet-600'>{ns.news}</h5>
                                        <p><i className="fa-solid fa-calendar-days"></i> {ns.date}</p>
                                        <p>{ns.details}</p>
                                    </div>
                                </div>
                            </div>)
                    }

                </div>
            </Container>
        </div>
    );
};

export default LatestNews;