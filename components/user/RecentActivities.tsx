import { RecentActivity } from "@components";
import {Activities} from "@constants"
import React from "react";

const RecentActivities = () => {
 

  return (
    <div className="w-full flex flex-col relative padding-y">
      <span className="w-full flex justify-between text-lg font-thin">
        <span>Recent Activity</span>{" "}
        <span className="text-[12px] font-thin">see All</span>
      </span>
      {Activities.map((transaction) => (
        <RecentActivity activity={transaction} key={transaction.desc} />
      ))}
    </div>
  );
};

export default RecentActivities;
