import React from 'react';
import cardiology from '../../img/department/Depositphotos_24648537_original-400x400.jpg'
import dental from '../../img/department/Depositphotos_5711983_original-400x400.jpg'
import neurologist from '../../img/department/Depositphotos_42539851_department.jpg'
import pediatric from '../../img/department/Depositphotos_11882261_original-400x400.jpg'
import pulmonary from '../../img/department/Depositphotos_10069934_original-400x400.jpg'
import traumatology from '../../img/department/Depositphotos_11295039_original-400x400.jpg'
import urology from '../../img/department/Depositphotos_42548065_original-400x400.jpg'
import xray from '../../img/department/Depositphotos_80150830_original-400x400.jpg'

const departments = [
    {
        _id: 11,
        img: cardiology,
        dName: 'Cardiology',
        details: "Here's the story of a lovely lady, who was bringing up three very lovely..."
    },
    {
        _id: 12,
        img: dental,
        dName: 'Dental',
        details: "We never thought of findin' a place where we belong. Don't have to stand..."
    },
    {
        _id: 13,
        img: neurologist,
        dName: 'Neurologist',
        details: "You unlock this door with the key of imagination. Beyond it is another dimension:..."
    },
    {
        _id: 14,
        img: pediatric,
        dName: 'Pediatric',
        details: "One thousand years ago, superstition and the sword ruled. It was a time of..."
    },
    {
        _id: 15,
        img: pulmonary,
        dName: 'Pulmonary',
        details: "Life is like a hurricane here in Duckburg. Race cars, lasers, aeroplanes - it's..."
    },
    {
        _id: 16,
        img: traumatology,
        dName: 'Traumatology',
        details: "Your tread must be light and sure, as though your path were upon rice..."
    },
    {
        _id: 17,
        img: urology,
        dName: 'Urology',
        details: "They're creepy and they're kooky, mysterious and spooky. They're all together ooky, the Addams..."
    },
    {
        _id: 18,
        img: xray,
        dName: 'Xray',
        details: "I bet we been together for a million years, And I bet we'll be..."
    },
]

const Departments = () => {


    return (
        <section className=' bg-slate-100 py-5'>
            <div className="container">
                <h2 className='text-center mb-5 text-violet-600'>HOSPITAL DEPARTMENTS</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-7">
                    {
                        departments.map(department =>
                            <div key={department._id} className='px-2 pt-2 border-2 bg-gray-200 rounded-md hover:shadow-lg hover:bg-violet-100 cursor-pointer'>
                                <img src={department.img} alt="department img" />
                                <h4 className='mt-1 text-violet-600'>{department.dName}</h4>
                                <p>{department.details}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Departments;