"use client";
import {
  AnalyticStats,
  CCuse,
  RecentActivities,
  WalletBalance,
} from "@components";
import { analytics } from "@constants";
import { useState } from "react";

const Analytics = () => {
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
  const [duration, setDuration] = useState("Daily");
  const cardInfo = [
    { title: "Card Number", value: "2651 4762 2212 2386" },
    { title: "Expiration Date", value: "22/17" },
    { title: "CVV", value: "728" },
  ];
  return (
    <div className="">
      <div className="flex flex-col justify-center padding-y">
        <span className="h-full font-extralight text-[12px]">
          Optimize performances
        </span>
        <p className="h-full text-lg font-thin">
          Analytics <span className="font-extralight text-[12px]">Dec 22</span>
        </p>
        <div className="w-full h-10 p-1 my-5 flex bg-white text-black rounded-full">
          <span
            className={`${
              duration === "Daily" ? "bg-black text-white" : null
            } w-1/2 h-full flex justify-center items-center rounded-full `}
            onClick={() => setDuration("Daily")}>
            Daily
          </span>{" "}
          <span
            className={`${
              duration === "Weekly" ? "bg-black text-white" : null
            } w-1/2 h-full flex justify-center items-center rounded-full`}
            onClick={() => setDuration("Weekly")}>
            Weekly
          </span>
        </div>
        <p className="h-full flex flex-col text-lg font-thin">
          <span className="font-extralight text-[12px]">Total Amount</span>{" "}
          <span className="text-lg font-thin">$104.00</span>
        </p>
      </div>

      <div>
        <div className="flex flex-col font-extralight text-[12px]">
          <span className="flex items-center">
            <p className="rounded-full w-2 h-2 mr-2 bg-slate-200" />
            income
          </span>
          <span className="flex items-center">
            <p className="rounded-full w-2 h-2 mr-2 bg-slate-500" />
            outcome
          </span>
        </div>
        <div className="scroll__hide flex justify-between items-center overflow-x-auto">
          {/* {analytics.map((analytic) => 
          ( <AnalyticStats spent={"h-[60%]"} saved={"h-[40%]"} week={"1st"} key={analytic.week} />)
        )} */}
          <AnalyticStats spent={"h-[20%]"} saved={"h-[80%]"} week={"1st"} />
          <AnalyticStats spent={"h-[33%]"} saved={"h-[67%]"} week={"2nd"} />
          <AnalyticStats spent={"h-[60%]"} saved={"h-[40%]"} week={"3rd"} />
          <AnalyticStats spent={"h-[70%]"} saved={"h-[30%]"} week={"4th"} />
          <AnalyticStats spent={"h-[22%]"} saved={"h-[78%]"} week={"5th"} />
        </div>
      </div>

      <RecentActivities />
    </div>
  );
};

export default Analytics;
