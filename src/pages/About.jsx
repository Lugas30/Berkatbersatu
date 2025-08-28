import React from "react";
import { Layout } from "../layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <section className="h-80 bg-header pt-40">
        <div className="container mx-10 lg:mx-40">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
            data-aos="fade-right"
          >
            About us<span className="accent-text">.</span>
          </h1>
        </div>
      </section>
      <div className="mx-10 md:mx-32 lg:mx-56 my-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug">
              We are specialist solar <br></br>power plant
              <span className="accent pb-2 px-2">Construction</span>
            </h2>
            <div className="text-base mt-12 mr-8">
              <p className="leading-loose text-gray-500">
                PT Berkat Bersatu is a prominent general contractor specializing
                in the construction of solar power plants, with a strong
                commitment to renewable energy. In addition to our expertise in
                solar energy, we also provide services in electrical, manpower
                supply, and international trade, including export and import
                activities. With a focus on sustainability and quality, we excel
                in designing, building, and managing efficient solar power
                generation facilities. Our extensive experience and dedication
                to excellence make us a trusted partner in the construction and
                renewable energy sectors.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/Project" className="btn-site">
                <p className="px-8">See Our Project</p>
              </Link>
            </div>
          </div>
          <div className="my-6" data-aos="fade-up">
            <img src="/Image1.png"></img>
          </div>
        </div>
      </div>

      <section>
        <div className="cta-section pt100 pb50">
          <div className="image-box-about" data-aos="fade-right"></div>
          <div className="containerz">
            <div className="grid-rows-1 mt-36">
              <div className="columns-lg pl-0 offset-left mr-10 lg:mr-60 bg-dk">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white mt-28"
                  data-aos="fade-left"
                >
                  Client Feedback
                </h2>
                <br></br>
                <p className="leading-loose text-white" data-aos="fade-left">
                  It is an honor to receive a visit from the Governor of West
                  Java. This visit serves as recognition for our efforts and
                  contributions in supporting the development and progress of
                  this region. We view this visit as an opportunity to share our
                  work outcomes, innovative ideas, and the challenges we face as
                  we collectively strive to advance West Java.
                </p>
                <br></br>
                <p
                  className="leading-loose text-white mb-28"
                  data-aos="fade-left"
                >
                  Alongside us during this visit were senior executives from PT
                  Masdar. This collaboration signifies the strong partnership
                  between our organization and PT Masdar, reflecting our joint
                  commitment to advancing renewable energy and sustainable
                  initiatives in this region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className='mx-56 my-24'>
            <h2 className='text-5xl font-extrabold leading-tight'>Client Feedback</h2>
            <div className='my-24 bg-dark'>
                <span className='text-7xl accent-text absolute m-20'>"</span>
                <div className="carousel w-3/4 flex mx-auto py-32">
                <div id="item1" className="carousel-item w-full">
                    <div className='block'>
                    <p className='text-white pb-10'>It is an honor to receive a visit from the Governor of West Java. This visit serves as recognition for our efforts and contributions in supporting the development and progress of this region. We view this visit as an opportunity to share our work outcomes, innovative ideas, and the challenges we face as we collectively strive to advance West Java.</p>
                    <p className='accent-text'>Ridwan Kamil</p>
                    <p className='text-white text-sm'>Governor of West Java</p>
                    </div>
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <div className='block'>
                    <p className='text-white pb-10'>Alongside us during this visit were senior executives from PT Masdar. This collaboration signifies the strong partnership between our organization and PT Masdar, reflecting our joint commitment to advancing renewable energy and sustainable initiatives in this region.</p>
                    <p className='accent-text'>Senior Executives</p>
                    <p className='text-white text-sm'>Executives from PT Masdar</p>
                    </div>
                </div>
                </div> 
                <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                </div>
            </div>
        </div> */}
    </Layout>
  );
};
