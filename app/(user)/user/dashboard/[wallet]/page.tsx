"use client";
import { CCuse, RecentActivities, WalletBalance } from "@components";
import { cardData } from "@constants";
import { useParams } from "next/navigation";
import React from "react";

const Wallet = () => {
  const { wallet } = useParams();
  let n = Number(wallet)

  console.log(cardData[n]);
  let arr = [
    {
      title: "Deposit",
      icon: "mdi-arrow-bottom-left",
    },
    {
      title: "Transfer",
      icon: "mdi-cash-usd",
    },
    {
      title: "Spending",
      icon: "mdi-arrow-top-right",
    },
  ];

  return (
    <div className="">
      <WalletBalance cardDetail={cardData[n]} />
      <div className="flex justify-around padding-y">
        {arr.map((detail) => (
          <CCuse detail={detail} key={detail.title} />
        ))}
      </div>

      <div>
        <div className="flex justify-between items-center">
          <span className="h-full text-lg font-thin">Card Information</span>
          <p className="text-[11px] w-24 h-9 rounded-full font-extralight border flex justify-around items-center relative z-50 before:absolute before:rounded-full before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-slate-50 before:opacity-20 before:-z-10 before:content['']">
            <span>Hide</span> <i className="mdi mdi-eye-outline text-sm"></i>
          </p>
        </div>

        <div className="flex justify-between py-5 capitalize border-b border-slate-400 text-[13px] px-3">
          <span className="text-[13px]">Card Number</span>
          <span className="text-[11px] font-semibold">{cardData[n].card}</span>
        </div>

        <div
          className="flex justify-between py-5 capitalize border-b border-slate-400 text-[13px] px-3"
          key={cardData[n].title}>
          <p className="text-[13px]">
            Expiration Date <span className="lowercase">mm/yy</span>
          </p>
          <span className="text-[11px] font-semibold">
            {cardData[n].expire}
          </span>
        </div>

        <div
          className="flex justify-between py-5 capitalize border-b border-slate-400 text-[13px] px-3"
          key={cardData[n].title}>
          <span className="text-[13px]">CVV</span>
          <span className="text-[11px] font-semibold">{cardData[n].CVV}</span>
        </div>
        <p className="text-[11px] font-thin py-1">
          Please<span className="font-normal"> do not provide</span> your card
          details to anyone including lexo officials
        </p>
      </div>
      <RecentActivities />
    </div>
  );
};

export default Wallet;
