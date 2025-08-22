import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="pb-0 lg:pb-24">
        <div class="grid grid-col-1 lg:grid-flow-col auto-cols-auto">
          <div className="pl-10 lg:pl-56">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug">
              <span className="accent pb-2 px-2 leading-loose">
                Let's Connect{" "}
              </span>
              with Us
            </h2>
          </div>
          <div className="m-10">
            <div className="flex align-middle mb-5">
              <img src="/phone.png" className="w-8 mr-2"></img>
              <p className="text-lg">+62 823 5037 0695</p>
            </div>
            <div className="flex align-middle">
              <img src="/email.png" className="w-8 mr-2"></img>
              <p className="text-lg">contact@berkatbersatu.com</p>
            </div>
          </div>
          <div className="pl-10 lg:pl-56 accent">
            <p className="uppercase text-lg text-white font-bold m-10">
              TAMAN JAYA ASRI BLOK.C2 NO,09.BATAM KEPULAUAN RIAU.
            </p>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-white text-base-content border-t-2">
        <aside>
          <p className="text-xs">
            Copyright © {new Date().getFullYear()} - All right reserved by PT.
            Berkat Bersatu
          </p>
        </aside>
      </footer>
    </>
  );
};
