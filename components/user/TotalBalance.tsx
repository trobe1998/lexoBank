import React from "react";

const TotalBalance = () => {
  return (
    <div className="h-20 flex flex-col justify-center leading-tight text-white padding-y">
      <div className="flex justify-between">
        <span className="h-full py-1 text-[12px] font-light">
          Total Balance <br />
          <p className="py-1 font-bold text-3xl">$104.00</p>
        </span>
        <span className="text-[12px] w-24 h-9 rounded-full font-extralight border border-slate-400 flex justify-around items-center relative z-50 before:absolute before:rounded-full before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-slate-50 before:opacity-10 before:-z-10 before:content['']">
          <p>Hide</p> <i className="mdi mdi-eye-outline text-lg"></i>
        </span>
      </div>
    </div>
  );
};

export default TotalBalance;
