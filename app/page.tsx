"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import mobBg from "@/public/pattern-bg-mobile.png";
import SearchBox from "@/components/SearchBox";
import InfoBox from "@/components/InfoBox";
import { userInfoProps, initialUserInfo } from "@/utils";
import Map from "@/components/Map";

export default function Home() {
  const api_Key = process.env.NEXT_PUBLIC_ABSTRACT_API_KEY;
  const [userInfo, setUserInfo] = useState<userInfoProps>(initialUserInfo);
  const [IP_input, setIP_input] = useState<string>("");

  const getUserIP = () => {
    fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${api_Key}&ip_address=${IP_input}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      }); 
  };

  useEffect(() => {
    getUserIP();
  }, []);


  const getInputValue = (value: string) => {
    setIP_input(value);
  };

  return (
    <main className="relative w-full min-h-screen px-4 ">
      <div className="w-full h-[40vh] fixed top-0 left-0 -z-[1]">
        <Image src={mobBg} alt="" className="absolute z-10 w-full h-full" />
      </div>
      <h1 className="text-white text-3xl text-center mt-4 lg:text-5xl">
        IP Address Tracker
      </h1>
       <SearchBox getInputValue={getInputValue} getUserIP={getUserIP} />
      <InfoBox userInfo={userInfo.userInfo} />
      <Map /> 
    </main>
  );
}
