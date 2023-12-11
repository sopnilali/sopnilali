
import HeroSection from '@/components/shared/Hero';
import React from 'react';
import Education from '@/components/Education/Education';
import Projects from '@/components/Projects/Projects';
import Skill from '@/components/Skill/Skill';
import About from '@/components/About/About';

export const metadata = {
  title : "Abdul Adud",
  description: "I am web front end developer. ",
  keywords: 'mongodb, reactjs, firebase, tailwind css'
}

const HomePage = () => {


  return (
    <div >
    <HeroSection />
    <Projects/>
    <Education/>
    <Skill/>
    <About/>
    </div>
  );
};

export default HomePage;