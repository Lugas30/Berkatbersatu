import { Layout } from "../layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Contact = () => {
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
            Contact<span className="accent-text">.</span>
          </h1>
        </div>
      </section>
      <div className="mx-10 md:mx-32 lg:mx-48 my-24">
        <div className="accent p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
            <div className="m-0 lg:m-10" data-aos="fade-up">
              <h2 className="mb-16 text-3xl text-white font-bold">
                Information Contact
              </h2>
              <div className="bg-dark w-24 mb-10" data-aos="fade-up">
                <img src="/logo.png"></img>
              </div>
              <div className="align-middle mb-5">
                <img src="/phone.png" className="w-8 mb-2"></img>
                <p className="text-lg">+62 823 5037 0695</p>
                <p className="text-lg">+62 812 8123 8421</p>
              </div>
              <div className="align-middle mb-5">
                <img src="/email.png" className="w-8 mb-2"></img>
                <p className="text-lg">contact@berkatbersatu.com</p>
              </div>
              <div className="align-middle mb-5">
                <img src="/location.png" className="w-8 mb-2"></img>
                <p className="text-lg">
                  Taman Jaya Asri Blok.C2 NO,09. Batam Kepulauan Riau.
                </p>
              </div>
            </div>
            <div className="bg-dark w-auto border-8" data-aos="fade-up">
              <img src="/kantorPTBB.jpeg"></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
