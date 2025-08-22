import { Layout } from "../layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Project = () => {
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
            Project<span className="accent-text">.</span>
          </h1>
        </div>
      </section>

      {/* update new */}
      <section>
        <div className="mx-10 md:mx-32 lg:mx-56 py-24">
          {/* <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-right"
          >
            <span className="accent pb-2 px-2">Latest Project</span>
          </h2> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            <div className="col-span-2" data-aos="fade-right">
              <h3 className="text-3xl font-extrabold leading-tight mt-10">
                TJS 100 Mwp Ground mounted solar PV Farm Project
              </h3>
              <p className="font-bold accent-text text-lg mt-4 mb-10">
                Purwakarta, 2024
              </p>
              <div className="text-base mt-12 mr-8">
                {/* <h3 className="text-xl font-extrabold leading-tight mt-10 mb-5">
                  Project 1
                </h3> */}
                <p className="leading-loose text-gray-500">
                  PT Berkat Bersatu is the contractor for the TJS 100 MWp Ground
                  Mounted Solar PV Farm Project, contributing to the
                  construction of a solar power plant with a capacity of 100
                  megawatt-peak (MWp) in a strategic area that ensures optimal
                  sunlight exposure year-round. This project will utilize
                  high-quality solar panels, inverters to convert DC electricity
                  to AC, transformers to adjust voltage, and monitoring systems
                  for optimal performance. Through the stages of design,
                  procurement, construction, commissioning, and maintenance,
                  this project aims to reduce carbon emissions, provide
                  sustainable energy, and boost the local economy. PT Berkat
                  Bersatu is committed to successfully completing this project,
                  significantly contributing to renewable energy and a cleaner
                  environment.
                </p>
              </div>
            </div>
            <div className="my-6 order-first lg:order-first" data-aos="fade-up">
              <img src="/projectTJS/tjs0.png"></img>
            </div>
          </div>

          <div>
            <div className="py-10" data-aos="fade-up">
              <img src="/projectTJS/tjs4.jpg"></img>
            </div>
          </div>

          <div>
            <div className="text-base mt-12 mr-8">
              {/* <h3
                className="text-xl font-extrabold leading-tight mt-10 mb-5"
                data-aos="fade-up"
              >
                Project 2
              </h3> */}
              <p className="leading-loose text-gray-500" data-aos="fade-up">
                The TJS 100 MWp Ground Mounted Solar PV Farm in Bukit Indah
                Industrial City is Indonesia's largest solar power plant,
                offering efficient and eco-friendly renewable energy solutions
                for the rapidly growing industrial area. With a capacity of 100
                MWp, this project not only generates a significant amount of
                clean electricity but also plays a crucial role in reducing
                carbon emissions, in line with Indonesia’s commitment to green
                energy transition. Leveraging cutting-edge technology and
                maximizing solar energy potential, the project delivers energy
                cost savings for companies in the area, creates local job
                opportunities, and serves as a sustainability model for
                Indonesia’s future industrial development. PT PLN (Persero)
                Group, through its subsidiary PLN Batam, has partnered with PT
                Aruna Cahaya Pratama (Aruna PV) to develop Indonesia's largest
                ground-mounted solar farm. This collaboration between PLN and
                the private sector supports efforts to reduce carbon emissions
                while enhancing the competitiveness of industries. PT Berkat
                Bersatu is proud to take a significant role in the development
                of this project.
              </p>
            </div>
          </div>

          <div>
            <div className="py-10">
              <img src="/projectTJS/tjs5.jpg" data-aos="fade-up"></img>
              <img src="/projectTJS/tjs6.jpg" data-aos="fade-up"></img>
              <img src="/projectTJS/tjs7.jpg" data-aos="fade-up"></img>
              <img src="/projectTJS/tjs8.jpg" data-aos="fade-up"></img>
              <img src="/projectTJS/tjs9.jpg" data-aos="fade-up"></img>
              <img src="/projectTJS/tjs10.jpg" data-aos="fade-up"></img>
              <img src="/projectTJS/tjs11.jpg" data-aos="fade-up"></img>
            </div>
          </div>

          <div className="my-8 text-center" data-aos="fade-up">
            <Link to="/ConstructionProcess" className="btn-site">
              <p className="px-8">See Construction Process</p>
            </Link>
          </div>
          <hr></hr>
        </div>
      </section>
      {/* update end */}
      <section>
        <div className="mx-10 md:mx-32 lg:mx-56 py-24">
          {/* <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-right"
          >
            <span className="accent pb-2 px-2">Latest Project</span>
          </h2> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            <div className="col-span-2" data-aos="fade-right">
              <h3 className="text-3xl font-extrabold leading-tight mt-10">
                Floating Solar PV project
              </h3>
              <p className="font-bold accent-text text-lg mt-4 mb-10">
                Purwakarta, 2023
              </p>
              <div className="text-base mt-12 mr-8">
                <h3 className="text-xl font-extrabold leading-tight mt-10 mb-5">
                  Project 1
                </h3>
                <p className="leading-loose text-gray-500">
                  Our project involves generating electricity from solar energy
                  using floating solar PV technology. Solar panels will be
                  installed on the surface of water bodies such as ponds or
                  reservoirs, harnessing sunlight to produce clean and
                  sustainable electricity.This approach offers several
                  advantages, including land savings and improved cooling
                  efficiency for the solar panels due to their exposure to
                  water. The project will encompass the design, installation,
                  and maintenance of the floating solar PV system, as well as
                  its integration into the electrical grid. By utilizing this
                  renewable resource, our project aims to contribute to carbon
                  emissions reduction and support environmentally friendly clean
                  energy.
                </p>
              </div>
            </div>
            <div className="my-6 order-first lg:order-first" data-aos="fade-up">
              <img src="/Image3.png"></img>
            </div>
          </div>

          <div>
            <div className="py-10" data-aos="fade-up">
              <img src="/project1.jpg"></img>
            </div>
          </div>

          <div>
            <div className="text-base mt-12 mr-8">
              <h3
                className="text-xl font-extrabold leading-tight mt-10 mb-5"
                data-aos="fade-up"
              >
                Project 2
              </h3>
              <p className="leading-loose text-gray-500" data-aos="fade-up">
                The electricity generated from the Solar PV project, harnessed
                by solar panels, goes through several stages before reaching the
                main substation and eventually being distributed to the grid for
                final consumers. These stages involve transformation and
                transmission of the energy.First, the DC electricity produced by
                the solar panels is converted into AC electricity by inverters.
                From there, it moves to a substation, which acts as an
                intermediate distribution facility. In the substation, the
                voltage may be transformed to meet specific requirements before
                being directed to the main substation. The main substation
                serves as a central hub for distributing electricity to a
                broader area. Here, voltage can be adjusted as needed, and the
                electricity may be combined with other power sources before
                entering the main grid. From the main substation, the
                electricity is further distributed to smaller load substations
                located in various regions or consumer locations. These
                substations fine-tune voltage levels and distribute electricity
                to homes, businesses, and other facilities. Finally, the
                electricity reaches end consumers, which can include households,
                companies, or entities using the power for a variety of
                purposes. Throughout this journey, voltage control, power
                quality monitoring, and network protection play crucial roles in
                ensuring safe, reliable, and efficient electricity distribution
                to all end users.
              </p>
            </div>
          </div>

          <div>
            <div className="py-10">
              <img src="/project2.jpg" data-aos="fade-up"></img>
              <img src="/project3.jpg" data-aos="fade-up"></img>
              <img src="/project4.jpg" data-aos="fade-up"></img>
              <img src="/project5.jpg" data-aos="fade-up"></img>
            </div>
          </div>

          <div className="my-8 text-center" data-aos="fade-up">
            <Link to="/ConstructionProcess" className="btn-site">
              <p className="px-8">See Construction Process</p>
            </Link>
          </div>
          <hr></hr>
        </div>
      </section>
    </Layout>
  );
};
