import React from "react";
import Image from "next/image";

const Settings = () => {
  return (
    <div className="w-screen h-screen flex flex-col pt-5 items-center text-[12px] text-slate-400 gap-y-4">
      <h2 className="w-1/2 text-2xl text-white">Profile page</h2>
      <div className="w-1/2 flex justify-start items-center">
        <span className="w-28 h-28 rounded-full border border-slate-400 relative overflow-hidden cursor-pointer">
          <Image src={"/profile.jpg"} alt="profile" sizes="20" fill />
        </span>
      </div>
      <span className="w-1/2">
        Account Name <br />{" "}
        <span className="text-sm text-white">Jessica Smith</span>{" "}
      </span>
      <span className="w-1/2">
        Linked Email <br />
        <span className="text-sm text-white">jessicasmith12212@gmail.com</span>
      </span>
      <span className="w-1/2">
        Account Type <br /> <span className="text-sm text-white">Business</span>{" "}
      </span>
      <span className="w-1/2 text-center text-sm text-white py-2 bg-slate-900 rounded-full">
        edit
      </span>
    </div>
  );
};

export default Settings;
