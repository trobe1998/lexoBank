"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface ICard {
  card: {
    id:number;
    title: string;
    agency: string;
    balance: string;
    bank: string;
    card: string;
    expire: string;
    logo: string;
  };
}
const CCcard = ({ card }: ICard) => {
  const router = useRouter()
  return (
    <div className="min-w-[12rem] flex flex-col border p-2 rounded-2xl bg-white text-cyan-900">
      <p className="font-semibold">{card.agency}</p>
      <p className="py-1 text-[12px] font-light">
        Balance <br />
        <span className="p-0 font-bold text-2xl">{card.balance}</span>
      </p>
      <Image src={card.logo} alt="logo" width={50} height={5} />
      <p className="py-1 text-sm font-light">{card.bank}</p>
      <p className="font-semibold">
        {card.title} {card.card}
      </p>
      <p className="py-1 text-[12px] font-light">
        Expiry Date {card.expire}{" "}
        <button className="rounded-full p-1 px-5 ml-2 text-white bg-black" onClick={()=> router.push(`/user/dashboard/${card.id}`)}>
          Edit
        </button>
      </p>
    </div>
  );
};

export default CCcard;
