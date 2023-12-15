"use client"
import React from 'react';
import heroImg from '@/assets/img/heroimg.png';
import Image from 'next/image';
import Link from 'next/link'
import DownloadLink from "react-download-link";
import Typewriter from 'typewriter-effect/dist/core';



const HeroSection = () => {

    return (
        <>
<section 
className="  bg-[url('/hero.jpg')] bg-fixed bg-no-repeat bg-cover"
>

  <div className=' py-20 mx-auto bg-slate-900/60 hover:backdrop-blur-sm transition-all'>
  <div className="px-6 md:py-32 py-14 text-center md:px-12 lg:text-left flex items-center  ">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="mt-12 lg:mt-0">
          <h1 className="mb-16 text-5xl text-white font-bold tracking-tight md:text-6xl xl:text-7xl">
            Md. Abdul Adud <br /> <h2 className='text-3xl my-4 -mb-8'>React Front-End Developer</h2>
          </h1>
          <a className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" href="#contact" role="button">Hire Me</a>

<Link 
className='btn bg-red-600 rounded-md rounded-tl-2xl hover:bg-red-800 outline-none border-none text-white rounded-br-2xl'

href={'https://drive.google.com/uc?export=download&id=14WKCsEkEPn25KSbGMt47ojDQvtZ5BwHb'}>Download Resume</Link>
        </div>
        <div className="mb-12 lg:mb-0 flex justify-center items-center">
            <Image src={heroImg} className='md:w-80 hover:scale-90 transition-all my-10 rounded-lg shadow-xl  dark:shadow-black/20' />
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
      </>
    );
};

export default HeroSection;