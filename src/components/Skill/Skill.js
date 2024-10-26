import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Skill = () => {
    return (
        <section id='skill' className="min-h-screen bg-[url('https://i.ibb.co/bBY3fL9/blue-technology.jpg')]  bg-fixed bg-no-repeat bg-cover">
        <div className="w-full px-2 min-h-screen py-20 mx-auto bg-slate-900/60 backdrop-blur-sm" >
        <SectionTitle heading={'Skills'}/>
        <div className=' h-[500px] flex flex-wrap justify-center items-center'  align="center" >
<img className='my-8 w-[70%] ' src="https://skillicons.dev/icons?i=html,css,js,firebase,tailwind,nodejs,mongo,react,express,wordpress,github,vscode,nextjs" />


</div>


        </div>
        </section>
    );
};

export default Skill;