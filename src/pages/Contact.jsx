import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import LetterBox from "../components/LetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center item-start gap-6 m-8">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            VRS & YRN College Chirala,
            <br /> R9MJ+RFP, Chirala Bypass Rd, NTR Nagar, Chirala, Ipuru Palem
            Rural, Andhra Pradesh 523157
          </p>
          <p className="text-gray-500">
            Tel: 91+987654321 <br /> Emali:dummy@gmail.com
          </p>
          <p className="text-gray-600 font-semibold text-xl ">
            Carrers at MyEcommerce
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings
          </p>
          <button className=" w-40 border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transitiona-all duration-500">
            Explore More
          </button>
        </div>
      </div>
      <LetterBox />
    </div>
  );
};

export default Contact;
