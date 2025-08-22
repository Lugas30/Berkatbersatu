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
      <section className="h-80 bg-header pt-40">
        <div className="container mx-10 lg:mx-40">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
            data-aos="fade-right"
          >
            Construction Process TJS<span className="accent-text">.</span>
          </h1>
        </div>
      </section>
      <div className="mx-10 md:mx-32 lg:mx-56 my-24">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
          data-aos="fade-up"
        >
          Preparing & Unloading Materials
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
          <div data-aos="fade-up">
            <p>
              The initial steps in a project involving procurement and delivery
              of required materials typically entail planning the material
              requirements, procuring from selected suppliers, on-time material
              delivery, receipt and inspection of materials, secure storage,
              inventory control, and coordination with the field team to ensure
              project continuity.{" "}
            </p>
            <br></br>
            <p>
              Delivering materials and dropping them from the warehouse to the
              project site begins with the procurement of necessary materials,
              which are then properly packed and stored securely in the
              company's warehouse. Following a delivery plan, the materials are
              loaded onto trucks and transported to the project site. On-site,
              the materials are dropped as per the plan, then inspected and
              accepted to ensure they are in good condition.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/public/const1.jpg"></img>
          </div>
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
          data-aos="fade-up"
        >
          Installation & Assembly
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
          <div data-aos="fade-up">
            <p>
              The assembly of PV (Photovoltaic) modules onto brackets involves a
              series of steps to ensure proper installation. Initially, secure
              the brackets firmly onto the designated mounting surface, whether
              it's a roof or a ground-based structure, ensuring they are
              correctly aligned and spaced for the PV modules. Subsequently,
              carefully position and attach the PV modules onto these brackets,
              ensuring secure anchoring and optimal positioning for sunlight
              capture. Use appropriate hardware like bolts and clamps to fasten
              the modules securely while maintaining adequate spacing for
              airflow and cooling. It is vital to conduct thorough inspections,
              confirming all connections and fastenings are tight to prevent
              potential shifts or damage to the PV modules, and to perform
              routine maintenance to uphold the solar array's performance.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/public/const2.jpg"></img>
          </div>

          <div data-aos="fade-up">
            <p>
              Installation of one of the supplementary equipment in a solar
              panel system, such as an inverter, involves steps like physically
              mounting the inverter at an appropriate location, connecting DC
              cables from the solar panels to the inverter, and linking the
              inverter to the home's electrical system or the grid. Ensure to
              follow the manufacturer's instructions and adhere to local
              regulations, and consider using trained personnel if necessary to
              ensure a safe and efficient installation.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/public/const3.jpg"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Towing Sub Array
          </h2>
          <div className="my-10" data-aos="fade-up">
            <p>
              The process of towing a subarray of PV (photovoltaic) modules
              refers to the use of solar panel modules integrated with a towing
              system (typically a boat or ship) to generate electrical power
              while moving on water. This technology is applied in various water
              bodies, such as lakes, rivers, or even the ocean, with the aim of
              generating electrical energy that can be used for different
              applications, including powering onboard equipment, providing
              energy for sensors or other devices used in aquatic environments,
              or supporting research and development needs in aquatic settings.
              The process involves using PV modules typically integrated into a
              floating structure or attached to a boat or vessel. As the vessel
              or device carrying the PV subarray moves through the water, the
              solar panels capture sunlight and convert it into electricity,
              which can be stored in batteries or used directly to meet the
              power requirements of connected devices. This can offer an
              environmentally friendly and cost-effective solution to support
              operations in aquatic environments that do not always have easy
              access to conventional power sources. This process can be applied
              in various contexts, including environmental monitoring,
              hydrographic surveys, underwater surveys, water transportation,
              and more, where reliable access to electricity is essential.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/public/const4.jpg"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Jointing Sub Array
          </h2>
          <div className="my-10" data-aos="fade-up">
            <p>
              The process of connecting sub-arrays in a solar panel system
              begins with tool and material preparation, which includes
              gathering necessary equipment such as DC cables, MC4 connectors,
              and cutting and stripping tools. After identifying the appropriate
              sub-array based on the layout in the sub ID array, cut the DC
              cable to the correct length and strip the ends to access the core.
              Next, attach MC4 connectors to the cable ends and connect the
              cables to the solar panels within the corresponding sub-array,
              ensuring correct polarity. Proceed to connect the solar panels one
              by one according to the specified layout. After completing all
              connections, test them to ensure smooth electrical current flow
              between the panels. Finally, protect all cables from physical
              damage and extreme weather conditions, and conduct regular
              monitoring and maintenance following the manufacturer's
              instructions to ensure optimal performance of the solar panel
              system. This process should be executed meticulously while
              adhering to relevant electrical safety standards, and consultation
              with experts or licensed technicians may be necessary if needed.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/public/const5.jpg"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Offshore Activity
          </h2>
          <div className="my-10" data-aos="fade-up">
            <p>
              Electrical work activities in offshore locations, spanning from
              cable installation to termination and testing, involve a series of
              carefully executed steps adhering to stringent safety standards
              and environmental protections. This includes the installation of
              cables designed to withstand harsh marine conditions, the
              placement of electrical devices such as switchgear and control
              panels, and the meticulous termination of cables with connectors
              and appropriate safeguards. The installation of electrical panels
              and connections to power sources is also carried out with
              precision. Upon completion, the system undergoes testing to ensure
              all components function according to specifications, and regular
              monitoring and maintenance are necessary to uphold system
              performance. Certification and compliance with regulations and
              safety standards are paramount throughout every stage of this
              work, conducted in the challenging marine environment, demanding a
              deep technical knowledge and substantial experience in the field.
            </p>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">INSPECTION</h4>
              <p>
                Inspection is a systematic process of conducting examinations,
                evaluations, and assessments of something to assess its quality,
                compliance, safety, or other specific criteria.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/public/const6.jpg"
              ></img>
            </div>
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">TIGHTHINING</h4>
              <p>
                Tightening a bolt is the act of ensuring that the bolt or screw
                used in various applications is securely and safely fastened.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/public/const7.jpg"
              ></img>
            </div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">TESTING</h4>
              <p>
                Testing is the process of conducting an examination or
                evaluation of an object or system to assess its performance,
                check compliance with standards or specific requirements, and
                ensure that the object or system functions properly according to
                predetermined objectives.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/public/const8.jpg"
              ></img>
            </div>
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">INSTALLATION CHECK</h4>
              <p>
                Installation inspection is the process of systematically
                evaluating and examining an installed system, equipment, or
                structure to ensure that it has been set up correctly, complies
                with relevant regulations, standards, and specifications, and
                functions as intended.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/public/const9.jpg"
              ></img>
            </div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">TERMINATION</h4>
              <p>
                Termination a cable involves the precise process of preparing
                the cable end by stripping its outer insulation, trimming and
                exposing the inner conductors, and then securely connecting
                these conductors to the relevant terminal or connector, ensuring
                a reliable electrical or data connection.
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/public/const10.jpg"
              ></img>
            </div>
            <div data-aos="fade-up">
              <h4 className="text-lg font-bold">REPAIR SUB ARRAY</h4>
              <p>
                Repairing a sub array floater involves a series of critical
                steps to address issues or damage that may occur in the floating
                component
              </p>
            </div>
            <div data-aos="fade-up">
              <img
                className="max-h-60 w-full object-cover"
                src="/public/const11.jpg"
              ></img>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Quality Assurance and Quality Control
          </h2>
          <div className="my-10">
            <p data-aos="fade-up">
              Quality Assurance/Quality Control (QA/QC) at PT Berkat Bersatu is
              a systematic approach implemented to ensure that products and
              services meet established quality standards. PT Berkat Bersatu is
              committed to maintaining a high level of quality across all
              aspects of their work, whether it be in construction,
              manufacturing, or the services they provide. Through QA/QC, they
              implement tested and proven processes to prevent defects, identify
              issues, and ensure that the products or services provided align
              with defined standards and meet customer expectations. Thus, QA/QC
              at PT Berkat Bersatu plays a crucial role in ensuring customer
              satisfaction, safety, and consistent quality in every aspect of
              their business.
            </p>
          </div>
          <div data-aos="fade-up">
            <img src="/public/image4.png"></img>
          </div>
        </div>

        <div className="my-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug"
            data-aos="fade-up"
          >
            Visit Work Result
          </h2>
          <div className="my-10">
            <p data-aos="fade-up">
              Site visit to assess work outcomes is an activity in which an
              individual or a team goes to observe and evaluate the results of
              completed or ongoing work or projects. The purpose of such visits
              is to conduct inspections, monitoring, or assessments of the
              quality, success, or compliance of a project or work against
              established standards, specifications, or objectives. The findings
              from these visits can serve as a basis for making decisions,
              improvements, or recommendations for the future. Site visits often
              involve physical inspections, testing, interviews, and
              documentation, depending on the nature of the work or project
              being evaluated. This is a crucial step in the quality assurance
              and quality control process in various fields, such as
              construction, manufacturing, healthcare, or research projects.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 my-10">
            <img src="/public/const13.jpeg" data-aos="fade-up"></img>
            <img src="/public/const12.jpg" data-aos="fade-up"></img>
          </div>
        </div>
      </div>
    </Layout>
  );
};
