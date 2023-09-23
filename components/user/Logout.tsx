"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

interface IProp {
  close: () => void;
}
const Logout = ({ close }: IProp) => {
  const pathname = usePathname();
  let router = useRouter();

  return (
    <div
      className={`w-full fixed capitalize flex justify-start items-center top-12 z-50`}>
      <div className="flex flex-col relative w-4/12 p-2 text-center text-[12px] font-thin justify-center items-center text-white bg-slate-900 rounded-2xl">
        <p
          className="py-2 w-full border-b border-slate-400"
          onClick={() => {
            close()
            router.push("/user/dashboard/settings")
            }}>
          Profile
        </p>
        <p className="py-2 w-full" onClick={() => router.push("/auth/login")}>
          Logout
        </p>
        <p
          className="py-1 mt-3 w-full bg-white text-slate-900 rounded-full text-center"
          onClick={() => close()}>
          close
        </p>
      </div>
    </div>
  );
};

export default Logout;
