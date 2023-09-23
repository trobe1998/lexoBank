"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import style from "@assets/css/login.module.css";

// url: https://aop.ubagroup.com/SignUpNoBVN/roa/GH~en

function Login() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  type element = { userId: string; password: string };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (password !== "" && userId !== "") {
        if (password === "pretty@jess" && userId === "jesssmith69") {
          router.push("/user/dashboard");
        } else {
          alert("check user credentials");
        }
      } else {
        alert("input cannot be empty");
      }
    } catch (error) {
      alert("system busy try again");
    } finally {
      setPassword("");
      setUserId("");
    }
  };

  return (
    <div
      className={`${style.login_wrapper} w-screen min-h-screen flex justify-center items-center md:justify-stardt`}>
      <form
        className={`w-full h-[80vh] text-white flex flex-col gap-1 gap-y-2 justify-center items-center md:w-[30rem] md:h-[25rem] md:mt-5`}
        onSubmit={(e) => handleSubmit(e)}>
        <p className="text-3xl font-extralight p-5 md:text-4xl">
          Sign in to online banking
        </p>
        <input
          type="text"
          value={userId}
          className={` w-11/12 h-16 rounded-sm p-5 text-cyan-900 placeholder-cyan-900`}
          placeholder="User ID"
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          value={password}
          className={`w-11/12 h-16 rounded-sm p-5 text-cyan-900 placeholder-cyan-900`}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className={`w-11/12 h-16 bg-blue-500 text-white rounded-sm p-2`}>
          Login
        </button>
        <div className="w-11/12 h-16 flex justify-between">
          <span className="">forgot password?</span>
          <Link rel="stylesheet" href="#" className="">
            Open an account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
