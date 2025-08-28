import { Layout } from "../layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ConstructionProcessTJS = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <section className="h-1/2 bg-header pt-40">
        <div className="w-screen px-10 lg:px-40">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
            data-aos="fade-right"
          >
            Construction Process<span className="accent-text">.</span>
          </h1>
          <div className="my-10">
            <h3
              className="accent text-center text-lg md:text-xl lg:text-2xl font-bold leading-tight lg:leading-snug p-5"
              data-aos="fade-up"
            >
              TJS 100 Mwp Ground mounted solar PV Farm Project
            </h3>
          </div>
        </div>
      </section>
      <div className="mx-10 md:mx-32 lg:mx-56 my-24">
        {/* Subject Project */}

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
          data-aos="fade-up"
        >
          Stacking Out
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
          <div data-aos="fade-up">
            <p>
              The task of staking out foundation points for PV modules using
              IRTK (Integrated Real-Time Kinematic) involves accurately
              determining and marking foundation locations as per the solar
              power plant project design. The IRTK tool allows surveyors to
              navigate to predetermined coordinates in real-time and precisely
              mark these points on-site. This process ensures that each
              foundation point is placed according to the plan, minimizing
              errors and enhancing time efficiency, thereby supporting the
              successful installation of PV modules and the overall project
              execution.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/projectTJS/tjs3.webp"></img>
          </div>
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
          data-aos="fade-up"
        >
          Screwpile Installation
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
          <div data-aos="fade-up">
            <p>
              The installation of screw pile foundations for PV modules involves
              the process of drilling holes into the ground and inserting screw
              piles to create a stable base. These steps include site
              preparation, positioning, drilling screw piles into the ground
              using machinery, precise alignment and leveling, and installation
              of the PV module structures. Screw pile foundations offer ease of
              installation, minimal environmental impact, and suitability for
              various soil conditions, making them an ideal choice for PV module
              installation projects.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/projectTJS/tjs12.webp"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Assembling Bracket & PV Module
          </h2>
          <div className="my-10" data-aos="fade-up">
            <p>
              The assembly of brackets and installation of PV modules involves
              preparing and installing the support structures and solar panels
              at the solar power generation project site. The process includes
              assembling the brackets, which serve as the supporting framework
              for the solar panels, according to the predetermined design.
              Subsequently, the PV modules are mounted onto the brackets using
              appropriate equipment and techniques, ensuring they are securely
              installed and aligned as per the specified requirements. This
              process requires precision and care to ensure the solar panels are
              properly installed and efficiently operate to generate electricity
              from sunlight.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/projectTJS/tjs4.jpg"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Grounding Installation
          </h2>
          <div className="my-10" data-aos="fade-up">
            <p>
              Grounding installation is the process of setting up an earthing
              system that connects electrical components to the ground to
              channel excess or leaking current, prevent electrical shock
              hazards, and protect equipment from damage. This process involves
              installing grounding rods or grounding plates into the earth,
              connecting them with copper cables to electrical equipment, and
              ensuring low soil resistance for effective current flow. Grounding
              is crucial for safety and stability in electrical systems,
              especially in large-scale projects like solar power plants (PLTS).
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/projectTJS/tjs13.jpg"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Cable Pulling (Solar DC Cable)
          </h2>
          <div className="my-10" data-aos="fade-up">
            <p>
              Pulling solar DC cables refers to the process of pulling and
              installing direct current (DC) cables that connect solar panels to
              the inverter in a Solar Power Plant (PLTS) system. These cables
              carry electrical energy from the solar panels to the inverter,
              where it is converted into alternating current (AC). The process
              involves laying out cable routes, pulling the cables through
              conduits or trays, and ensuring a safe and neat installation for
              efficient and uninterrupted power flow.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/projectTJS/tjs5.jpg"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Cable Pulling (AC Cable)
          </h2>
          <div className="my-10" data-aos="fade-up">
            <p>
              Pulling solar DC cables refers to the process of pulling and
              installing direct current (DC) cables that connect solar panels to
              the inverter in a Solar Power Plant (PLTS) system. These cables
              carry electrical energy from the solar panels to the inverter,
              where it is converted into alternating current (AC). The process
              involves laying out cable routes, pulling the cables through
              conduits or trays, and ensuring a safe and neat installation for
              efficient and uninterrupted power flow. SOLAR DC CABLE AC CABLE
              The pulling of AC cables refers to the process of pulling and
              installing alternating current (AC) cables that connect the
              inverter to the distribution panel or main electrical grid in a
              power system. These AC cables are responsible for transmitting
              electricity that has been converted from direct current (DC) by
              the inverter into alternating current (AC), which can then be used
              to power electrical equipment or fed into the grid. The process of
              pulling AC cables involves several steps, including planning the
              cable route, pulling the cables through trays (cable pathways) or
              conduits (protective pipes), and ensuring the installation adheres
              to safety and quality standards. Each cable must be securely
              installed, protected from potential physical damage such as
              moisture or impact, and properly laid out to ensure a stable and
              safe flow of electricity.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/projectTJS/tjs14.jpg"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Inverter Installation
          </h2>
          <div className="my-10" data-aos="fade-up">
            <p>
              The installation of an inverter is the process of setting up and
              connecting the inverter to the electrical system. The inverter
              functions to convert direct current (DC) produced by sources such
              as solar panels into alternating current (AC) that can be used by
              electrical equipment or fed into the electrical grid. This process
              includes placing the inverter in a safe location, connecting the
              DC cables from the energy source, linking the AC cables to the
              distribution panel, as well as configuring and testing to ensure
              the inverter operates properly and safely.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/projectTJS/tjs15.jpg"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Termination
          </h2>
          <div className="my-10" data-aos="fade-up">
            <p>
              DC cable termination involves connecting the ends of cables from
              the solar panels to the inverter terminals using appropriate DC
              connectors. This process ensures that the direct current (DC) from
              the solar panels is safely and reliably transmitted to the
              inverter, which will convert it to alternating current (AC). AC
              cable termination involves connecting the cables from the inverter
              output to the transformer using suitable AC connectors. This
              ensures efficient and safe transmission of alternating current
              (AC) from the inverter to the transformer for the necessary power
              conversion within the electrical system. Both termination
              processes are crucial for maintaining the integrity and safety of
              the electrical system.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/projectTJS/tjs6.jpg"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Supporting Component
          </h2>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">LIGHTNING ARRESTER</h4>
              <p>
                Installing a lightning arrester involves setting up a device
                designed to protect electrical systems from damage caused by
                lightning strikes. The lightning arrester is strategically
                placed on structures, such as buildings or electrical networks,
                and works by diverting the high-voltage currents of a lightning
                strike safely into the ground. This helps prevent damage to
                electrical equipment, reduces the risk of fires, and ensures the
                safety and reliability of the electrical system. Proper
                installation and maintenance of the lightning arrester are
                essential to provide effective protection and minimize the risk
                of lightning-related incidents.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-96 w-full object-cover"
                src="/projectTJS/tjs16.jpg"
              ></img>
            </div>

            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">CCTV</h4>
              <p>
                CCTV installation** involves mounting CCTV cameras on poles
                erected at strategic locations. This process includes creating
                and reinforcing the foundation for the pole, correctly
                installing the pole into the foundation, and attaching the CCTV
                camera at the top of the pole. Additionally, cables and
                connections for the CCTV system must be neatly organized and
                installed to ensure optimal image quality and functionality.
                Proper installation ensures that the cameras operate effectively
                and provide comprehensive surveillance coverage.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-96 w-full object-cover"
                src="/projectTJS/tjs17.jpg"
              ></img>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Testing Pre commissioning
          </h2>
          <div className="my-10" data-aos="fade-up">
            <p>
              Pre-commissioning on a 100 MWp ground-mounted solar power project
              (PLTS) involves preliminary checks and tests conducted before the
              system is fully operational. This phase includes inspecting and
              verifying the installation of electrical components, such as solar
              panels, inverters, and wiring, as well as ensuring that all
              systems are properly connected and functioning. It also involves
              testing individual components and system performance to identify
              and resolve any issues. The goal of pre-commissioning is to ensure
              that the system meets design specifications and is ready for the
              final commissioning and operation.
            </p>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">GROUNDING RESISTANCE TEST</h4>
              <p>
                Grounding resistance test using an earth tester measures the
                effectiveness of a grounding system by checking how well it
                conducts electricity into the ground. This test ensures the
                grounding system has a low enough resistance to protect
                electrical equipment and ensure safety.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/projectTJS/tjs18.jpg"
              ></img>
            </div>
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">
                PULL OUT COMPRESSION SCREWPILE TEST
              </h4>
              <p>
                Pull out and compression tests on screw piles use a chain block
                and hydraulic jack to measure their load-bearing capacity. The
                pull out test checks how much pulling force the pile can
                withstand before being removed from the ground, while the
                compression test assesses how much compressive force the pile
                can handle without failing.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/projectTJS/tjs19.jpg"
              ></img>
            </div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">
                CONTINUITY & VOLTAGE TEST SOLAR DC CABLE
              </h4>
              <p>
                Using a multimeter, continuity and voltage tests on solar DC
                cables check if the cable is intact (continuity) and measure the
                voltage to ensure it’s within the expected range.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/projectTJS/tjs8.jpg"
              ></img>
            </div>
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">
                INSULATION RESISTANCE TEST SOLAR DC CABLE
              </h4>
              <p>
                Insulation resistance test on solar DC cables using a megger
                measures the resistance of the cable’s insulation. This test
                ensures that the insulation is effective and there are no leaks
                or faults, helping to prevent electrical failures and ensure
                safe operation.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/projectTJS/tjs20.jpg"
              ></img>
            </div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">
                CURRENT SHORT CIRCUIT TEST SOLAR DC CABLE
              </h4>
              <p>
                Current short circuit test on solar DC cables using a Seaward
                Utility Pro checks the cable's ability to handle high current
                conditions without failure. The test simulates a short circuit
                to ensure the cable can safely manage short-circuit currents and
                maintain its integrity under stress.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/projectTJS/tjs9.jpg"
              ></img>
            </div>
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">CONTINUITY TEST AC CABLE</h4>
              <p>
                Continuity test on AC cables using a multimeter checks if there
                is a complete electrical path through the cable. This test
                ensures there are no breaks or faults, confirming the cable is
                properly connected and ready for use.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/projectTJS/tjs21.jpg"
              ></img>
            </div>
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">
                INSULATION RESISTANCE TEST AC CABLE
              </h4>
              <p>
                Insulation resistance test on AC cables using a megger measures
                the effectiveness of the cable's insulation. This test ensures
                that the insulation is intact and has a high resistance,
                preventing electrical leaks and maintaining safe operation.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/projectTJS/tjs10.jpg"
              ></img>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Drainage Installation
          </h2>
          <div className="my-10">
            <p data-aos="fade-up">
              Installing drainage using U- ditch** involves setting up a U-
              shaped drainage channel to direct water away from specific areas,
              such as roads or construction sites. The process includes
              excavating the trench, positioning the U-ditch properly, and
              backfilling around it to ensure stability. The U- ditch
              effectively manages and channels water flow, preventing water
              accumulation and reducing the risk of damage to the surrounding
              area.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/projectTJS/tjs11.jpg"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Road Access
          </h2>
          <div className="my-10">
            <p data-aos="fade-up">
              Creating access roads involves constructing pathways that can
              accommodate vehicle traffic, either using stone or concrete. For
              stone roads, the process includes selecting and arranging stones
              to form a durable and stable surface. This involves excavation,
              leveling the base, and carefully placing stones to ensure the road
              can support traffic loads. For concrete roads, the process
              involves pouring and compacting a concrete mix into molds to
              create a strong and long-lasting surface. This includes preparing
              the area, pouring the concrete, and allowing it to cure until it
              reaches the required strength. Both methods aim to provide a safe
              and functional access road.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 my-10">
            <img src="/projectTJS/tjs22.jpg" data-aos="fade-up"></img>
            <img src="/projectTJS/tjs23.jpg" data-aos="fade-up"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Visit Work Results
          </h2>
          <div className="my-10">
            <p data-aos="fade-up">
              The 100 Megawatt peak (MWp) solar power plant, located in the
              Bukit Indah Industrial City (BIC), Purwakarta, West Java, has been
              officially inaugurated by its owner, PT PLN (Persero), through its
              subsidiary PLN Batam, in partnership with PT Aruna Cahaya Pratama
              (Aruna PV). PT Berkat Bersatu played a vital role as a key
              subcontractor in the execution of this project, contributing
              significantly to the installation and completion phases. Their
              involvement ensured that the project was executed as planned and
              met the established quality standards.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 my-10">
            <img src="/projectTJS/tjs24.jpg" data-aos="fade-up"></img>
            <img src="/projectTJS/tjs25.jpg" data-aos="fade-up"></img>
          </div>
        </div>
      </div>
    </Layout>
  );
};
