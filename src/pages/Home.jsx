import { Layout } from '../layout/Layout'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
    AOS.refresh();
  }, []);

  return (
    <Layout>
        <section>
          <img src='/public/Main Slide Mob.jpg' className='w-full max-h-screen object-cover lg:hidden'></img>
          <img src='/public/Main Slide2.jpg' className='hidden lg:block w-full max-h-screen object-cover'></img>
          
          <div className='hero-box'>
            <div className='hero-text'>
              <div className='box-inner'>
                <div className='box-content'>
                  <h2 className='font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight' data-aos="fade-left">General<br></br>Contractor</h2>
                  <p className='leading-7'>specializing construction <br></br>of solar power plants</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='mx-10 md:mx-32 lg:mx-56 my-24'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2 order-2 md:order-first" data-aos="fade-right">
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug'>We are specialist solar <br></br>power plant<span className='accent pb-2 px-2'>Construction</span></h2>
                <div className='text-base mt-12 mr-8'>
                  <p className='leading-loose text-gray-500'>
                    PT Berkat Bersatu is a prominent general contractor specializing in the construction of solar power plants, with a strong commitment to renewable energy. In addition to our expertise in solar energy, we also provide services in electrical, manpower supply, and international trade, including export and import activities. With a focus on sustainability and quality, we excel in designing, building, and managing efficient solar power generation facilities. Our extensive experience and dedication to excellence make us a trusted partner in the construction and renewable energy sectors.
                  </p>
                </div>
                <div className='mt-8'>
                  <a className='btn-site'>See Project</a>
                </div>
              </div>
              <div className="my-6" data-aos="fade-up">
                <img src='/public/Image1.png'></img>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='mx-10 md:mx-32 lg:mx-56 my-24'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight'><span className='accent pb-2 px-2'>Why us?</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-28">
              <Link to='/WhyUs' data-aos="fade-up">
                <img src='/public/worker1.png' className='w-28 motion-worker skeleton'></img>
                <h3 className='pt-8 pb-10 text-xl font-extrabold'>Saftey Toolbox</h3>
                <p className='text-gray-500 text-base leading-loose mb-6'>The primary purpose of Toolbox Meetings within every work team is to prioritize safety and foster a culture of safety consciousness.</p>
                <a className='uppercase font-extrabold text-xs ms'>Read more</a>
              </Link>
              <Link to='/WhyUs' data-aos="fade-up">
                <img src='/public/worker2.png' className='w-28 motion-worker skeleton'></img>
                <h3 className='pt-8 pb-10 text-xl font-extrabold'>Trained Workers</h3>
                <p className='text-gray-500 text-base leading-loose mb-6'>Training from the Ministry of Energy and Mineral Resources "ESDM" is typically related to the energy and mineral resource industry and Offshore training.</p>
                <a className='uppercase font-extrabold text-xs'>Read more</a>
              </Link>
              <Link to='/WhyUs' data-aos="fade-up">
                <img src='/public/worker3.png' className='w-28 motion-worker skeleton'></img>
                <h3 className='pt-8 pb-10 text-xl font-extrabold'>Expert Manpower</h3>
                <p className='text-gray-500 text-base leading-loose mb-6'>We have established a strong collaboration with experts from China to build the floating solar power project "Floating Solar PV"</p>
                <a className='uppercase font-extrabold text-xs'>Read more</a>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className='cta-section pt100 pb50'>
            <div className='image-box' data-aos="fade-right"></div>
            <div className='containerz'>
              <div className='grid-rows-1 mt-36'>
                <div className='columns-lg pl-0 offset-left mr-10 lg:mr-60 bg-dk' >
                  <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug text-white mt-20 md:mt-28' data-aos="fade-left">HEALTH SAFETY ENVIRONMENT</h2><br></br>
                  <p className='leading-loose text-white' data-aos="fade-left">HSE (Health, Safety, and Environment) vision of PT Berkat Bersatu is to become a leader in implementing the best safety, health, and environmental practices within our industry. Our primary focus is on safeguarding the health and safety of our employees, reducing environmental impact, strict compliance with regulations, and making a positive contribution to our community and the environment.</p>
                  <br></br>
                  <p className='leading-loose text-white mb-20 md:mb-28' data-aos="fade-left">The HSE mission of PT Berkat Bersatu encompasses ensuring the health and safety of employees as a paramount priority, emphasizing the prevention of workplace injuries and occupational illnesses. It also involves the rigorous identification, assessment, and control of risks across operational activities to minimize potential hazards to employees and the environment. Compliance with relevant regulations, standards, and active engagement with regulatory authorities is integral, longside a commitment to environmental conservation and reducing the adverse impacts of operations on ecosystems and natural resources.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='mx-10 md:mx-32 lg:mx-56 py-0 md:py-24'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight'><span className='accent pb-2 px-2'>Latest Project</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 mt-10">
              <div className="col-span-2" data-aos="fade-right">
                <h3 className='text-2xl font-extrabold leading-tight mt-10'>Floating Solar PV project</h3>
                <p className='font-bold accent-text text-lg mt-4 mb-10'>Purwakarta, 2023</p>
                <div className='text-base mt-12 mr-8'>
                  <p className='leading-loose text-gray-500'>
                    Our project involves generating electricity from solar energy using floating solar PV technology. Solar panels will be installed on the surface of water bodies such as ponds or reservoirs, harnessing sunlight to produce clean and sustainable electricity.
                  </p>
                  <br></br>
                  <p className='leading-loose text-gray-500'>
                    The electricity generated from the Solar PV project, harnessed by solar panels, goes through several stages before reaching the main substation and eventually being distributed to the grid for final consumers. These stages involve transformation and transmission of the energy.
                  </p>
                </div>
                <div className='mt-8'>
                  <Link to="/ConstructionProcess" className='btn-site'><p className='px-8'>See Construction Process</p></Link>
                </div>
              </div>
              <div className="my-6 order-first lg:order-last" data-aos="fade-up">
                <img src='/public/Image3.png'></img>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='my-24 mx-10 lg:mx-0'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center'>Quality Assurance & Control</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 my-20">
              <div className=''>
                <img src='/public/Image4.png' className='bg-cover h-auto w-full overflow-hidden' data-aos="fade-right"></img>
              </div>
              <div className='p-10 md:p-16 lg:p-28 bg-dark'>
                <p className='text-white text-center lg:text-right leading-loose' data-aos="fade-left">Our project involves generating electricity from solar energy using floating solar PV technology. Solar panels will be installed on the surface of water bodies such as ponds or reservoirs, harnessing sunlight to produce clean and sustainable electricity.</p>
                <br></br>
                <p className='text-white text-center lg:text-right leading-loose' data-aos="fade-left">The electricity generated from the Solar PV project, harnessed by solar panels, goes through several stages before reaching the main substation and eventually being distributed to the grid for final consumers. These stages involve transformation and transmission of the energy.</p>
                <div className='mt-10 right-0'>
                  <img src='/public/control-check.png' className='w-1/6' data-aos="fade-right"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}
