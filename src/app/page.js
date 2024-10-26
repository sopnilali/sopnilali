
import HeroSection from '@/components/shared/Hero';
import React from 'react';
import Education from '@/components/Education/Education';
import Projects from '@/components/Projects/Projects';
import Skill from '@/components/Skill/Skill';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';

export const metadata = {
  title: "Abdul Adud",
  description: "I am web front end developer. ",
  keywords: 'mongodb, reactjs, firebase, tailwind css'

}

const HomePage = () => {


  return (
    <div >
      <HeroSection />
      <Projects />
      <Education />
      <Skill />
      <Experience />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;