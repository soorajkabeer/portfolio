"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const Project = () => {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title="Turmerry.com" href="https://www.turmerry.com/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Turmerry
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              A leading Bedding D2C brand located in Charlotte, North Carolina,
              USA
            </span>
          </div>
          <div className="flex flex-1 w-full  mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
              src="/projects/turmerry.jpg"
              width={500}
              height={500}
              alt="Turmerry"
            />
          </div>
        </div>
      </PinContainer>
      <PinContainer title="Turmerry.com" href="https://www.turmerry.com/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Turmerry
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              A leading Bedding D2C brand located in Charlotte, North Carolina,
              USA
            </span>
          </div>
          <div className="flex flex-1 w-full  mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
              src="/projects/turmerry.jpg"
              width={500}
              height={500}
              alt="Turmerry"
            />
          </div>
        </div>
      </PinContainer>
      <PinContainer title="Turmerry.com" href="https://www.turmerry.com/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Turmerry
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              A leading Bedding D2C brand located in Charlotte, North Carolina,
              USA
            </span>
          </div>
          <div className="flex flex-1 w-full  mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
              src="/projects/turmerry.jpg"
              width={500}
              height={500}
              alt="Turmerry"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default Project;
