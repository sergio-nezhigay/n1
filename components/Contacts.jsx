import React from "react";
import ContactForm from "./ContactForm";

function Contacts() {
  return (
    <section
      id="contacts"
      className="py-[56px] md:py-[64px] xl:py-[104px] h-screen contacts-img bg-img text-sm md:text-base xl:text-lg md:leading-5 xl:leading-6"
    >
      <div className="container mx-auto px-5 md:px-8 xl:px-6 flex flex-col justify-between  h-full  ">
        <h2 className="text-4xl md:text-[67px] xl:text-[98px]  md:leading-[66px] xl:leading-[119px] uppercase  md:col-start-1 md:row-start-1 md:self-start mb-9 xl:mb-[71px]">
          <span className="font-thin">Contact </span>US
        </h2>
        <div className="xl:flex ">
          <div className="grid  grid-cols-[auto,auto] md:grid-cols-[221px,auto,auto,auto] xl:grid-cols-2 auto-rows-auto gap-x-[20px] align-items-center leading-6 mb-3 md:mb-16 xl:mb-0 xl:basis-1/2">
            <div className="text-right text-sm leading-6 md:text-base xl:text-lg">
              <a href="tel:+380981234567" className="block">
                +38 (098) 12 34 567
              </a>
              <a href="tel:+380731234567" className="block">
                +38 (073) 12 34 567
              </a>
            </div>
            <p className="text-xs font-extralight leading-6">Phone number</p>
            <p className="text-right text-sm leading-6 md:text-base xl:text-lg md:col-start-1 md:row-start-2 md:self-end xl:self-start">
              <a href="mailto:support@carptravel.com">support@carptravel.com</a>
            </p>
            <p className="text-xs font-extralight leading-6 md:col-start-2 md:row-start-2 md:self-end xl:self-start ">
              E-mail
            </p>
            <p className="text-right text-xs font-extralight leading-6 md:col-start-3 xl:col-start-2 xl:text-left xl:row-start-3 ">
              Follow us
            </p>
            <ul className="text-sm leading-6 md:col-start-4 xl:col-start-1 xl:row-start-3 md:row-span-2 xl:text-right xl:row-span-1 ">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  youtube
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  tiktok
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
