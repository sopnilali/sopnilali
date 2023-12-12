"use client"

import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const educations = [
    {
        degree: "Bachelors of Science",
        subject: "Computer Science & Engineering (CSE)",
        institute: "Varendra University",
        year: "2022",
        className: "step-success",
        animation: "fade-down",
    },
    {
        degree: "Higher School Certificate (HSC)",
        subject: "Science",
        institute: "Chak-kirty High School and College",
        year: "2018",
        className: "step-warning",
        animation: "fade-down",
    },
    {
        degree: "Secondary School Certificate (SSC)",
        subject: "Science",
        institute: "Chak-kirty High School and College",
        year: "2016",
        className: "step-success",
        animation: "fade-up",
    }
];

const Education = () => {
    return (
        <section id='education'>
            
        <div 
        
        className="min-h-screen py-32 -mb-20 bg-[url('https://i.ibb.co/cDq3q9Y/education-concept.webp')]  bg-fixed bg-no-repeat bg-cover  "
        >
            <SectionTitle heading={'Education'}/>
            <div className="divider "></div>
         <div className='flex justify-center items-center py-36'>
        <div>
             
        <ul className="p-4 w-full max-auto steps steps-vertical lg:steps-horizontal">
            {educations.map((steps) => (
                <li
                    key={steps.degree}
                    data-content={steps.year}
                    className={`step ${steps.className}`}
                >
                    <div className="mt-8 space-x-4 space-y-2 text-xl">
                        <h3 className="font-semibold text-white">
                            {steps?.degree}
                        </h3>
                        <h4 className="text-white drop-shadow-md">
                            {steps.subject}
                        </h4>
                        <h5 className="text-white">{steps.institute}</h5>
                    </div>
                </li>
            ))}
        </ul>
        </div>
         </div>
    </div>
    </section>
    );
};

export default Education;