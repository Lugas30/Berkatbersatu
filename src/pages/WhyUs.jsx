import React from 'react'
import { Layout } from '../layout/Layout'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export const WhyUs = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
    AOS.refresh();
  }, []);


  return (
    <Layout>
        <section className='h-80 bg-header pt-40'>
            <div className='container mx-10 lg:mx-40'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-white' data-aos="fade-right">Why us<span className='accent-text'>?</span></h1>
            </div>
        </section>
        <div className='mx-10 md:mx-32 lg:mx-56 my-24'>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-1" data-aos="fade-right">
                <h2 className='text-5xl font-extrabold leading-tight'>We are Safety.</h2>
                <h2 className='text-5xl font-extrabold leading-tight'>We are Trained.</h2>
                <h2 className='text-5xl font-extrabold leading-tight'>We are Expert.</h2>
                <div className='text-base mt-12 mr-8'>
                  <p className='leading-loose text-gray-500'>
                    Because we prioritize worker safety with strict standards, provide training to workers which is really needed to support the success of our projects and most importantly, we employ the experts to handle our projects.
                  </p>
                </div>
              </div>
              <div className="my-6 col-span-2" data-aos="fade-up">
                <img src='/public/group.jpg'></img>
              </div>
            </div>
        </div>
        <div className='mx-56 my-24'>
          <h2 className='text-5xl font-extrabold leading-tight mb-20' data-aos="fade-up">Safety Toolbox Meeting</h2>
          <div class="grid grid-cols-2 gap-6">
            <div className='mb-20' data-aos="fade-up">
              <img src='/public/safety1.jpg'></img>
            </div>
            <div className='' data-aos="fade-up">
              <h3 className='normal-case text-3xl font-bold mb-10'>Morning Toolbox Meeting</h3>
              <p className='leading-loose text-gray-500'>The primary purpose of Toolbox Meetings within every work team is to prioritize safety and foster a culture of safety consciousness. These meetings serve as a platform for effective communication, enabling team members to share their knowledge, experiences, and safety concerns. They aim to identify potential hazards, risks, or safety issues associated with specific tasks and plan preventive actions accordingly.</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div className='' data-aos="fade-up">
              <img src='/public/safety2.jpg'></img>
            </div>
            <div className='' data-aos="fade-up">
              <h3 className='normal-case text-3xl font-bold mb-10'>General Toolbox Meeting</h3>
              <p className='leading-loose text-gray-500'>Objective of the HSE (Health, Safety, and Environment) Morning Toolbox Meeting is to prioritize safety and health in the workplace by identifying, understanding, and addressing potential hazards and risks associated with the day's work activities. Through this meeting, all team members can gain a common understanding of tasks, safety procedures, and the use of Personal Protective Equipment (PPE).</p>
            </div>
          </div>
        </div>

        <div className='mx-56 my-24'>
          <h2 className='text-5xl font-extrabold leading-tight mb-20' data-aos="fade-up">Worker Training</h2>
          <div class="grid grid-cols-2 gap-6">
            <div className='mb-20'>
              <img src='/public/training2.jpeg' data-aos="fade-up"></img>
            </div>
            <div className='' data-aos="fade-up">
              <h3 className='normal-case text-3xl font-bold mb-10'>Training from the Ministry of Energy and Mineral Resources (ESDM)</h3>
              <p className='leading-loose text-gray-500'>Training from the Ministry of Energy and Mineral Resources (ESDM) is typically related to the energy and mineral resource industry. The Ministry of ESDM in Indonesia plays a crucial role in managing natural resources involving energy, mining, and related sectors. Training organized by the Ministry of ESDM can encompass various topics, such as natural resource management, energy policies, mining technologies, energy efficiency, or environmental issues related to these sectors.</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div className=''>
              <img src='/public/training1.jpeg' data-aos="fade-up"></img>
            </div>
            <div className='' data-aos="fade-up">
              <h3 className='normal-case text-3xl font-bold mb-10'>Offshore Training </h3>
              <p className='leading-loose text-gray-500'>Offshore training is a program designed to prepare workers who will be operating in offshore environments, such as oil drilling platforms, offshore wind installations, ships, and similar facilities. This training covers various aspects, ranging from occupational safety and health, specific operations relevant to their tasks, navigation, sea survival skills, teamwork, and an understanding of legal and regulatory aspects. The main goal is to ensure worker safety, maintain operational efficiency in often hazardous environments, and comply with strict industry regulations governing offshore activities.</p>
            </div>
          </div>
        </div>

        <div className='mx-56 my-24'>
          <h2 className='text-5xl font-extrabold leading-tight mb-20' data-aos="fade-up">Expert Manpower</h2>
          <div class="grid grid-cols-2 gap-6">
            <div className='mb-20'>
              <img src='/public/expert.jpeg' data-aos="fade-up"></img>
            </div>
            <div className='' data-aos="fade-up">
              <p className='leading-loose text-gray-500'>We have established a strong collaboration with experts from China to complete the floating solar power project (Floating Solar PV). This collaboration aims to combine their knowledge and experience in floating solar PV technology with our efforts to develop innovative renewable energy solutions. The experts from China have made valuable contributions in planning, designing, and implementing an efficient floating solar PV system. This collaboration reflects our commitment to sharing knowledge and resources globally, accelerating the development of renewable energy technology, and making a positive impact towards energy self-sufficiency and environmental protection. With the support and collaboration of Chinese experts, we believe that the floating solar PV project will achieve its goals more effectively and efficiently.</p>
            </div>
          </div>
        </div>
    </Layout>
  )
}
