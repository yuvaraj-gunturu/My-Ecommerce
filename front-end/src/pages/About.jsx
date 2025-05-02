import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import LetterBox from "../components/LetterBox";

const About = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col gap-6 justify-center md-w2/4 text-gray-600">
          <p>
            To deploy a website on Vercel, you'll typically connect your
            project's Git repository (GitHub, GitLab, or Bitbucket) to Vercel,
            then Vercel will automatically build and deploy your website when
            you push changes to your repository.{" "}
          </p>
          <p>
            To deploy a website on Vercel, you'll typically connect your
            project's Git repository (GitHub, GitLab, or Bitbucket) to Vercel,
            then Vercel will automatically build and deploy your website when
            you push changes to your repository.{" "}
          </p>
          <b className="text-gray-800">our Mission</b>
          <p>
            To deploy a website on Vercel, you'll typically connect your
            project's Git repository (GitHub, GitLab, or Bitbucket) to Vercel,
            then Vercel will automatically build and deploy your website when
            you push changes to your repository.{" "}
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"Why"} text2={"Choose Us"} />
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gary-600">
              To deploy a website on Vercel, you'll typically connect your
              project's Git repository (GitHub, GitLab, or Bitbucket) to Vercel,
              then Vercel will automatically build and deploy your website when
              you push changes to your repository.{" "}
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gary-600">
              To deploy a website on Vercel, you'll typically connect your
              project's Git repository (GitHub, GitLab, or Bitbucket) to Vercel,
              then Vercel will automatically build and deploy your website when
              you push changes to your repository.{" "}
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
            <b>Exceptional customer Service:</b>
            <p className="text-gary-600">
              To deploy a website on Vercel, you'll typically connect your
              project's Git repository (GitHub, GitLab, or Bitbucket) to Vercel,
              then Vercel will automatically build and deploy your website when
              you push changes to your repository.{" "}
            </p>
          </div>
        </div>
      </div>
      <LetterBox />
    </div>
  );
};

export default About;
