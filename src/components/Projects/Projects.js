"use client"

import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaBeer, FaExternalLinkAlt, FaGithub, FaServer, FaUnlink } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';





const Projects = () => {
    const [projectData, setProjectData] = useState([''])
    useEffect(() => {
        fetch("project.json")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setProjectData(data))
      },[])

  
    console.log(projectData)

    return (
        <section id='projects' className=''>
        <div
        className= {`min-h-screen py-24 bg-[url('https://i.ibb.co/5TXZCn6/ultra-technology.jpg')]  bg-fixed bg-no-repeat bg-cover `} >
        <SectionTitle  heading={"Projects"}/>
         <div className="divider "></div>
        <div className="grid grid-cols-1 px-2 md:px-0 md:grid-cols-2 mt-14 lg:grid-cols-3 gap-6">
        {
            projectData.map(project => 
        <div key={project.id} className=" w-full card  bg-base-100 shadow-xl ">
        <div className="card-body">
              <figure><img src={project.image} alt="Shoes" /></figure>
            <h2 className="card-title">
            {project.name}
            {project?.status === true ? <div className="badge badge-secondary">NEW</div> : <div className=" bg-slate-500 text-white rounded-md px-4 badge-md">Old</div>}
            </h2>
            <h2><strong>Time: </strong>{project.time}</h2>
            <p>{project.description}</p>
            
            <div className="card-actions justify-end">
            <div className=" flex  text-black flex-wrap gap-2 ">
            {
                project?.tools?.map((v)=> 
                <h2 key={v} className='btn btn-sm hover:scale-90 btn-outline'>{v}</h2>
                )
            }
            
            </div> 
            </div>
            <div >
      <div className='flex justify-between '>
      <div className='flex items-center text-xl gap-4'>
        {project?.githubFrontEnd ? <Link className='text-gray-800  ' href={`${project?.githubFrontEnd}`}><FaGithub className='text-2xl' /></Link> : ""}
      { project?.githubBackEnd ? <Link href={`${project?.githubBackEnd}`}><FaServer /></Link> : ""}
      {project?.live ? <Link  href={`${project?.live}`}><FaExternalLinkAlt /></Link> : ""}
      
      </div>
      </div>
    </div>
        </div>
                
         
        </div>
               )
            }
        </div>



        </div> 





        </section>
    );
};

export default Projects;