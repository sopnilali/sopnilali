import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Skill = () => {
    return (
        <section id='skill' className="min-h-screen bg-[url('https://i.ibb.co/bBY3fL9/blue-technology.jpg')]  bg-fixed bg-no-repeat bg-cover">
        <div className="w-full min-h-screen py-20 mx-auto bg-slate-900/60 backdrop-blur-sm" >
        <SectionTitle heading={'Skill'}/>
        <div align="center" >
        <h2 className='text-white text-center'>🛠 Language And Tools</h2>
<img className='my-5' src="https://skillicons.dev/icons?i=html,css,js,firebase,tailwind,nodejs,mongo,react,express" />


</div>


        </div>
        </section>
    );
};

export default Skill;