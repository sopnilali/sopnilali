"use client"

import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className='w-4/12   mx-auto my-3 text-center' >
            <div className='border-y-2 py-3 mt-2 flex justify-center'>
            <h3 className='capitalize text-5xl text-white'>{heading}</h3>
            </div>

        </div>
    );
};

export default SectionTitle;