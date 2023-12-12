import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Skill = () => {
    return (
        <section id='skill' className="min-h-screen bg-[url('https://i.ibb.co/bBY3fL9/blue-technology.jpg')]  bg-fixed bg-no-repeat bg-cover">
        <div className="w-full px-2 min-h-screen py-20 mx-auto bg-slate-900/60 backdrop-blur-sm" >
        <SectionTitle heading={'Skills'}/>
        <div align="center" >
<img className='my-8 w-3/6 ' src="https://skillicons.dev/icons?i=html,css,js,firebase,tailwind,nodejs,mongo,react,express" />


</div>


        </div>
        </section>
    );
};

export default Skill;