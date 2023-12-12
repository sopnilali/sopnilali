"use client"
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import Exp from '@/assets/img/exp.svg'

const Experience = () => {

    const experiences = [
        {
            project: "My Pet Adoption",
            work: "Payment System",
            dateFrom: "November 2023",
            dateTo: "Now",
        },
        {
            project: "Mobile BrandStore",
            work: "JWT Authorization system",
            dateFrom: "October 2023",
            dateTo: "November 2023",
        },
    ];

    return (
        <section
        id="experience"
        className="min-h-screen mx-auto bg-[url('/about.jpg')] bg-fixed"
    >
        <div className="w-full min-h-screen py-20 mx-auto bg-slate-900/60 backdrop-blur-sm">

            <SectionTitle heading={'Experience'} />
            <div className="divider"></div>
                <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
                    <div>
                        <Image

                            src={Exp}
                            alt="Exp"
                            className="w-96 sm:w-[40rem]"
                        />
                    </div>
                    <div className=" mx-auto text-white">
                        <ul className="steps steps-vertical">
                            {experiences.map((experience) => (
                                <li
                                    key={experience.dateFrom}
                                    className="p-2 step step-success"
                                >
                                    <div className="my-4 ml-2 space-y-2 text-left">
                                        <h2 className='text-5xl'>{experience.project}</h2>
                                        <p className="text-xl">
                                            at{" "}
                                            <span>
                                                {experience.work}
                                            </span>
                                            ,{" "}
                                            <span>
                                                {experience.location}
                                            </span>{" "}
                                        </p>
                                        <p className="my-2 space-y-2">
                                            <span className="p-2 rounded-xl bg-slate-900/60">
                                                {experience.dateFrom}
                                            </span>{" "}
                                            -{" "}
                                            <span className="p-2 rounded-xl bg-slate-900/60">
                                                {experience.dateTo}
                                            </span>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        </div>
    </section>
    );
};

export default Experience;