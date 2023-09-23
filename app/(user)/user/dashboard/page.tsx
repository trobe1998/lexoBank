import {
  CCcard,
  QuickTransactions,
  RecentActivities,
  TotalBalance,
} from "@components";
import { cardData } from "@constants";
import React from "react";

const UserDashboard = () => {

  return (
    <div>
      <TotalBalance />
      <div>
        <span className="text-lg font-thin">Card</span>
        <div className="scroll__hide h-full flex items-center overflow-x-auto scroll-smooth gap-2">
          {cardData.map((data) => (
            <CCcard card={data} key={data.logo} />
          ))}
        </div>
      </div>

      <QuickTransactions />
      <RecentActivities />
    </div>
  );
};

export default UserDashboard;
