"use client";

import Image from "next/image";

import { CustomButton } from "@components";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero text-white ">
      <div className="flex-1 flex flex-col place-items-center pt-28 padding-x lg:place-items-start">
        <h1 className="hero__title">
          Make your life easier with online banking
        </h1>

        <p className="hero__subtitle text-white">
          Explore and enjoy banking at your fingertips,anywhere, and anytime
        </p>

        <CustomButton
          title="Open an Account"
          containerStyles="w-44 bg-white text-blue-500 rounded-full mt-6"
          handleClick={()=> router.push('/auth/signUp')}
        />
      </div>
      <div className="hero__image-container hidden lg:flex ">
        <div className="w-[20rem] h-[20rem] relative shadow-sm shadow-sky-400 rounded-lg overflow-hidden">
          <Image src="/bnk1.jpg" alt="hero" fill />
        </div>
        <div className="w-[20rem] h-[20rem] shadow-sm shadow-sky-400  relative right-32 top-24 rounded-lg overflow-hidden">
          <Image src="/bnk4.avif" alt="hero" fill />
        </div>
      </div>
    </div>
  );
};

export default Hero;
