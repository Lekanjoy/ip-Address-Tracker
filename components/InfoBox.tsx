import { userInfoProps } from "@/utils";
import React from "react";

const InfoBox = ({ userInfo }: userInfoProps) => {
  // console.log(userInfo)

  return (
    <div className="w-full rounded-2xl shadow bg-white min-h-[100px] text-center py-6 flex flex-col gap-y-4 justify-center items-center">
      <div className="flex flex-col gap-y-1">
        <p className="text-darkGray text-xs lg:text-sm">IP ADDRESS</p>
        {/* <p className="text-veryDarkGray text-xl font-medium">{userInfo.ip}</p> */}
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="text-darkGray text-xs lg:text-sm">LOCATION</p>
        <p className="text-veryDarkGray text-xl font-medium">
          {/* {userInfo.location?.region}, {userInfo.location?.country} */}
        </p>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="text-darkGray text-xs lg:text-sm">TIMEZONE</p>
        <p className="text-veryDarkGray text-xl font-medium">
          {/* {userInfo.location?.timezone} */}
        </p>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="text-darkGray text-xs lg:text-sm">ISP</p>
        {/* <p className="text-veryDarkGray text-xl font-medium">{userInfo.isp}</p> */}
      </div>
    </div>
  );
};

export default InfoBox;
