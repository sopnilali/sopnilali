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
className='bg-no-repeat'
style={{
  backgroundImage: `url(https://i.ibb.co/vvGb41b/pexels-felix-mittermeier-1146134.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity:'100%'

}
  }
>

  <div class="px-6 md:py-32 py-14 text-center md:px-12 lg:text-left flex items-center  ">
    <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="mt-12 lg:mt-0">
          <h1 class="mb-16 text-5xl text-white font-bold tracking-tight md:text-6xl xl:text-7xl">
            Md. Abdul Adud <br />
            
          </h1>
          <a class="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Hire Me</a>

<Link 
className='btn'

href={'https://drive.google.com/uc?export=download&id=14WKCsEkEPn25KSbGMt47ojDQvtZ5BwHb'}>Download Resume</Link>
        </div>
        <div class="mb-12 lg:mb-0 flex justify-center items-center">
            <Image src={heroImg} class='md:w-80 hover:scale-90 transition-all my-10 rounded-lg shadow-xl  dark:shadow-black/20' />
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    );
};

export default HeroSection;