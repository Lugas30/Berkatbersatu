import { Layout } from '../layout/Layout'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import location from "../assets/location.png";
import logo from "../assets/logo.png";

export const Contact = () => {
    useEffect(() => {
    AOS.init({duration: 2000});
    AOS.refresh();
  }, []);

  return (
    <Layout>
        <section className='h-80 bg-header pt-40'>
            <div className='container mx-10 lg:mx-40'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-white' data-aos="fade-right">Contact<span className='accent-text'>.</span></h1>
            </div>
        </section>
        <div className='mx-10 md:mx-32 lg:mx-48 my-24'>
            <div className='accent p-10'>
                <h2 className='text-center text-3xl text-white font-bold'>Information Contact</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                    
                    <div className='m-0 lg:m-10' data-aos="fade-up">
                        <div className='align-middle mb-5'>
                        <img src={phone} className='w-8 mb-2'></img>
                        <p className='text-lg'>+62 823 5037 0695</p>
                        <p className='text-lg'>+62 812 8123 8421</p>
                        </div>
                        <div className='align-middle mb-5'>
                        <img src={email} className='w-8 mb-2'></img>
                        <p className='text-lg'>contact@berkatbersatu.com</p>
                        </div>
                        <div className='align-middle mb-5'>
                        <img src={location} className='w-8 mb-2'></img>
                        <p className='text-lg'>Taman Jaya Asri Blok.C2 NO,09. Batam Kepulauan Riau.</p>
                        </div>
                    </div>
                    <div className='bg-dark' data-aos="fade-up">
                        <img src={logo}></img>
                    </div>
                </div>
                
            </div>
        </div>
        
    </Layout>
  )
}
