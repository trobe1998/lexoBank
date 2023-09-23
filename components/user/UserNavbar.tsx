"use client" 
import {useState} from "react";
import Image from 'next/image' 
import { Logout } from "@components";

const UserNavbar = () => {
  const [profile, setProfile] = useState(false)
  let handleClose = ()=>{
    setProfile(prev => !prev)
  }
  return (
    <header className="">
      <nav className="h-14 flex justify-between items-center">
        {profile ? <Logout close={handleClose}/> : null}
        <span className="w-10 h-10 rounded-full border border-slate-400 relative overflow-hidden cursor-pointer" onClick={()=> setProfile(prev => !prev)}>
          <Image src={'/profile.jpg'} alt="profile"sizes="20" fill/>
        </span>
        
        <span className="text-sm flex flex-col leading-[11px] capitalize"><p className="font-extralight text-[12px]">welcome back <i className="mdi mdi-cloud px-1"></i></p><br/> jessica smith</span>
        
        <span className="w-10 h-10 rounded-full border border-slate-400 flex justify-center items-center relative overflow-hidden z-50 before:absolute before:rounded-full before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-slate-50 before:opacity-10 before:-z-10 before:content['']">
          <i className="mdi mdi-bell-outline"></i>
        </span>
      </nav>
    </header>
  );
};

export default UserNavbar;



