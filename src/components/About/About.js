"use client"

import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const About = () => {
    return (
        <section id='about' className="min-h-screen bg-[url('/about-bg.webp')] bg-cover bg-no-repeat bg-fixed ">
        <div className="w-full min-h-screen py-20 mx-auto bg-slate-900/60 backdrop-blur-sm" >
            <SectionTitle heading={'About'}/>
            <div className="divider "></div>
        <div className='md:w-3/4 w-3/4  mx-auto mt-10'>
        <h2 className='text-justify text-2xl text-white'>
        I'am Md. Abdul Adud. I am from Rajshahi, Bangladesh. I have completed my Bsc graduation in CSE from Varendra University.
        </h2>
        <h2 className='text-justify text-2xl text-white mt-10'>
        I have been very passionate about computers, programming since my university life. I have 2 month of experience in Web Development as a front-end developer. Knowledge of NodeJS, ReactJS, and MongoDB.
        </h2>
        </div>

        </div>
        
        </section>
    );
};

export default About;