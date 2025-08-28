import { Layout } from "../layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <section>
        <img
          src="/Main Slide Mob.jpg"
          alt="Main image for mobile view showcasing solar power plants"
          className="w-full max-h-screen object-cover lg:hidden"
        ></img>
        <img
          src="/Main Slide2.jpg"
          alt="Main image for desktop view showcasing solar power plants"
          className="hidden lg:block w-full max-h-screen object-cover"
        ></img>

        <div className="hero-box">
          <div className="hero-text">
            <div className="box-inner">
              <div className="box-content">
                <h1
                  className="font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight"
                  data-aos="fade-left"
                >
                  General<br></br>Contractor
                </h1>
                <p className="leading-7">
                  specializing construction <br></br>of solar power plants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-10 md:mx-32 lg:mx-56 my-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="col-span-2 order-2 md:order-first"
              data-aos="fade-right"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug">
                We are specialist solar <br></br>power plant
                <span className="accent pb-2 px-2">Construction</span>
              </h2>
              <div className="text-base mt-12 mr-8">
                <p className="leading-loose text-gray-500">
                  PT Berkat Bersatu is a prominent general contractor
                  specializing in the construction of solar power plants, with a
                  strong commitment to renewable energy. In addition to our
                  expertise in solar energy, we also provide services in
                  electrical, manpower supply, and international trade,
                  including export and import activities. With a focus on
                  sustainability and quality, we excel in designing, building,
                  and managing efficient solar power generation facilities. Our
                  extensive experience and dedication to excellence make us a
                  trusted partner in the construction and renewable energy
                  sectors.
                </p>
              </div>
              <div className="mt-8">
                <a className="btn-site" href="/Project">
                  See Project
                </a>
              </div>
            </div>
            <div className="my-6" data-aos="fade-up">
              <img
                src="/Image1.png"
                alt="Solar power plant construction site"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-10 md:mx-32 lg:mx-56 my-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="accent pb-2 px-2">Why us?</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-28">
            <Link to="/WhyUs" aria-label="safety toolbox" data-aos="fade-up">
              <img
                src="/worker1.png"
                alt="Safety toolbox with safety equipment for workers"
                className="w-28 motion-worker skeleton"
              ></img>
              <h3 className="pt-8 pb-10 text-xl font-extrabold">
                Safety Toolbox
              </h3>
              <p className="text-gray-500 text-base leading-loose mb-6">
                The primary purpose of Toolbox Meetings within every work team
                is to prioritize safety and foster a culture of safety
                consciousness.
              </p>
              <span className="uppercase font-extrabold text-xs ms">
                Read more
              </span>
            </Link>
            <Link to="/WhyUs" aria-label="Trained Workers" data-aos="fade-up">
              <img
                src="/worker2.png"
                alt="Trained workers undergoing safety training"
                className="w-28 motion-worker skeleton"
              ></img>
              <h3 className="pt-8 pb-10 text-xl font-extrabold">
                Trained Workers
              </h3>
              <p className="text-gray-500 text-base leading-loose mb-6">
                Training from the Ministry of Energy and Mineral Resources
                "ESDM" is typically related to the energy and mineral resource
                industry and Offshore training.
              </p>
              <span className="uppercase font-extrabold text-xs">
                Read more
              </span>
            </Link>
            <Link to="/WhyUs" aria-label="Expert Manpower" data-aos="fade-up">
              <img
                src="/worker3.png"
                alt="Expert manpower collaborating with international experts"
                className="w-28 motion-worker skeleton"
              ></img>
              <h3 className="pt-8 pb-10 text-xl font-extrabold">
                Expert Manpower
              </h3>
              <p className="text-gray-500 text-base leading-loose mb-6">
                We have established a strong collaboration with experts from
                China to build the floating solar power project "Floating Solar
                PV"
              </p>
              <span className="uppercase font-extrabold text-xs">
                Read more
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Update Certification */}
      <section>
        <div className="mx-10 md:mx-32 lg:mx-56 my-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="accent pb-2 px-2">Certification</span>
          </h2>

          <h3 className="pt-12 pb-10 text-xl font-extrabold">
            SBU Pembangkit Tenaga Listrik (PLTS) & Konstruksi Sipil
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 my-28">
            <div className="flex items-center justify-center">
              <img
                src="/certif/crt1.png"
                alt="Certification for SBU Pembangkit Tenaga Listrik"
                className="w-full h-32 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/certif/crt2.png"
                alt="Certification for SBU Pembangkit Tenaga Listrik"
                className="w-full h-32 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/certif/crt3.png"
                alt="Certification for construction services"
                className="w-full h-32 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/certif/crt4.png"
                alt="Certification for solar power projects"
                className="w-full h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="cta-section pt100 pb50">
          <div className="image-box" data-aos="fade-right"></div>
          <div className="containerz">
            <div className="grid-rows-1 mt-36">
              <div className="columns-lg pl-0 offset-left mr-10 lg:mr-60 bg-dk">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug text-white mt-20 md:mt-28"
                  data-aos="fade-left"
                >
                  HEALTH SAFETY ENVIRONMENT
                </h2>
                <br></br>
                <p className="leading-loose text-white" data-aos="fade-left">
                  HSE (Health, Safety, and Environment) vision of PT Berkat
                  Bersatu is to become a leader in implementing the best safety,
                  health, and environmental practices within our industry. Our
                  primary focus is on safeguarding the health and safety of our
                  employees, reducing environmental impact, strict compliance
                  with regulations, and making a positive contribution to our
                  community and the environment.
                </p>
                <br></br>
                <p
                  className="leading-loose text-white mb-20 md:mb-28"
                  data-aos="fade-left"
                >
                  The HSE mission of PT Berkat Bersatu encompasses ensuring the
                  health and safety of employees as a paramount priority,
                  emphasizing the prevention of workplace injuries and
                  occupational illnesses. It also involves the rigorous
                  identification, assessment, and control of risks across
                  operational activities to minimize potential hazards to
                  employees and the environment. Compliance with relevant
                  regulations, standards, and active engagement with regulatory
                  authorities is integral, alongside a commitment to
                  environmental conservation and reducing the adverse impacts of
                  operations on ecosystems and natural resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Update terbaru */}
      <section>
        <div className="mx-10 md:mx-32 lg:mx-56 pt-0 md:pt-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="accent pb-2 px-2">Latest Project</span>
          </h2>
        </div>

        <div className="mx-10 md:mx-32 lg:mx-56 py-0 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 mt-10">
            <div className="col-span-2" data-aos="fade-right">
              <h3 className="text-2xl font-extrabold leading-tight mt-10">
                TJS 100 Mwp Ground mounted solar PV Farm Project
              </h3>
              <p className="font-bold accent-text text-lg mt-4 mb-10">
                Purwakarta, 2024
              </p>
              <div className="text-base mt-12 mr-8">
                <p className="leading-loose text-gray-500">
                  PT Berkat Bersatu is the contractor for the TJS 100 MWp Ground
                  Mounted Solar PV Farm Project, contributing to the
                  construction of a solar power plant with a capacity of 100
                  megawatt-peak (MWp) in a strategic area that ensures optimal
                  sunlight exposure year-round.
                </p>
                <br></br>
                <p className="leading-loose text-gray-500">
                  The TJS 100 MWp Ground Mounted Solar PV Farm in Bukit Indah
                  Industrial City is Indonesia's largest solar power plant,
                  offering efficient and eco-friendly renewable energy solutions
                  for the rapidly growing industrial area. With a capacity of
                  100 MWp, this project not only generates a significant amount
                  of clean electricity but also plays a crucial role in reducing
                  carbon emissions, in line with Indonesia’s commitment to green
                  energy transition.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/Construction-TJS" className="btn-site">
                  <p className="px-8">See Construction Process</p>
                </Link>
              </div>
            </div>
            <div className="my-6 order-first lg:order-last" data-aos="fade-up">
              <img
                src="/projectTJS/tjs0.png"
                alt="Construction of TJS 100 MWp Ground mounted solar PV farm"
              ></img>
            </div>
          </div>
          <hr className="mt-24"></hr>
        </div>
      </section>

      {/* Update terbaru End */}

      <section>
        <div className="mx-10 md:mx-32 lg:mx-56 py-0 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 mt-10">
            <div className="col-span-2" data-aos="fade-right">
              <h3 className="text-2xl font-extrabold leading-tight mt-10">
                Floating Solar PV project
              </h3>
              <p className="font-bold accent-text text-lg mt-4 mb-10">
                Purwakarta, 2023
              </p>
              <div className="text-base mt-12 mr-8">
                <p className="leading-loose text-gray-500">
                  Our project involves generating electricity from solar energy
                  using floating solar PV technology. Solar panels will be
                  installed on the surface of water bodies such as ponds or
                  reservoirs, harnessing sunlight to produce clean and
                  sustainable electricity.
                </p>
                <br></br>
                <p className="leading-loose text-gray-500">
                  The electricity generated from the Solar PV project, harnessed
                  by solar panels, goes through several stages before reaching
                  the main substation and eventually being distributed to the
                  grid for final consumers. These stages involve transformation
                  and transmission of the energy.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/Construction-Floating-Solar" className="btn-site">
                  <p className="px-8">See Construction Process</p>
                </Link>
              </div>
            </div>
            <div className="my-6 order-first lg:order-last" data-aos="fade-up">
              <img
                src="/Image3.png"
                alt="Floating Solar PV panels installed on water"
              ></img>
            </div>
          </div>
          <hr className="mt-24"></hr>
        </div>
      </section>

      <section>
        <div className="my-24 mx-10 lg:mx-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center">
            Quality Assurance & Control
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-20">
            <div className="">
              <img
                src="/Image4.png"
                className="bg-cover h-auto w-full overflow-hidden"
                alt="Quality assurance and control in solar PV project"
                data-aos="fade-right"
              ></img>
            </div>
            <div className="p-10 md:p-16 lg:p-28 bg-dark">
              <p
                className="text-white text-center lg:text-right leading-loose"
                data-aos="fade-left"
              >
                Our project involves generating electricity from solar energy
                using floating solar PV technology. Solar panels will be
                installed on the surface of water bodies such as ponds or
                reservoirs, harnessing sunlight to produce clean and sustainable
                electricity.
              </p>
              <br></br>
              <p
                className="text-white text-center lg:text-right leading-loose"
                data-aos="fade-left"
              >
                The electricity generated from the Solar PV project, harnessed
                by solar panels, goes through several stages before reaching the
                main substation and eventually being distributed to the grid for
                final consumers. These stages involve transformation and
                transmission of the energy.
              </p>
              <div className="mt-10 right-0">
                <img
                  src="/control-check.png"
                  alt="Control and quality check in solar PV project"
                  className="w-1/6"
                  data-aos="fade-right"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-10 md:mx-32 lg:mx-56 pt-0 md:pt-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="accent pb-2 px-2">Own Ship Assets</span>
          </h2>
        </div>
        <div className="mx-10 md:mx-32 lg:mx-56 my-24">
          <div className="grid grid-cols-1 gap-6">
            <div
              className="col-span-2 order-2 md:order-first"
              data-aos="fade-right"
            >
              <div className="text-base mr-8">
                <p className="leading-loose text-gray-500">
                  As part of our commitment to delivering excellence as a
                  professional contractor— especially in Floating Solar Power
                  Plant (PLTS Terapung) projects—our company owns and operates
                  its own ship assets. These vessels serve as a critical
                  logistical backbone, enabling efficient transport of
                  materials, equipment, and personnel across inland and coastal
                  water-based project sites. Our in-house marine capabilities
                  not only enhance operational flexibility and speed but also
                  ensure project timelines and quality standards are
                  consistently met.
                </p>
              </div>
            </div>
            <div className="my-6 grid grid-cols-2 gap-6" data-aos="fade-up">
              <img
                src="/ship1.jpg"
                alt="Solar power plant construction site"
              ></img>
              <img
                src="/ship2.jpg"
                alt="Solar power plant construction site"
              ></img>
              <img
                src="/ship3.jpg"
                alt="Solar power plant construction site"
              ></img>
              <img
                src="/ship4.jpg"
                alt="Solar power plant construction site"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
