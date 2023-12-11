import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Skill = () => {
    return (
        <div 
        style={{backgroundImage: 'url(https://i.ibb.co/bBY3fL9/blue-technology.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }}
        
        id='skill' className='min-h-screen bg-slate-800 py-16'>
            <SectionTitle heading={'Skill'}/>
        <h2 className='text-white text-center'>🛠 Language And Tools</h2>
        <div align="center">

<img className='my-5' src="https://skillicons.dev/icons?i=html,css,js,firebase,tailwind,nodejs,mongo,react,express" />


</div>


        </div>
    );
};

export default Skill;