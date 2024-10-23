"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const Project = () => {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center flex-wrap my-10 mx-5">
      <div>
        <PinContainer title="Turmerry.com" href="https://www.turmerry.com/">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-primary text-xl  dark:text-theme-white text-theme-green-dark">
              Turmerry
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="dark:text-theme-white text-theme-black/[.8] ">
                A leading Bedding D2C brand located in Charlotte, North
                Carolina, USA
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
      <div>
        <PinContainer
          title="Team Motorcycle"
          href="https://www.teammotorcycle.com/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-primary text-xl  dark:text-theme-white text-theme-green-dark">
              Team Motorcycle
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="dark:text-theme-white text-theme-black/[.8] ">
                A leading motorcycle accessories D2C brand located in USA
              </span>
            </div>
            <div className="flex flex-1 w-full  mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image
                src="/projects/teammotorcycle.jpg"
                width={500}
                height={500}
                alt="TeamMotocycle"
              />
            </div>
          </div>
        </PinContainer>
      </div>
      <div>
        <PinContainer
          title="American Islamic Outreach"
          href="https://americanislamicoutreach.org/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-primary text-xl  dark:text-theme-white text-theme-green-dark">
              American Islamic Outreach
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="dark:text-theme-white text-theme-black/[.8] ">
                A non profit outreach frederation located in USA
              </span>
            </div>
            <div className="flex flex-1 w-full  mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image
                src="/projects/americanislamicoutreach.jpg"
                width={500}
                height={500}
                alt="American Islamic Outreach"
              />
            </div>
          </div>
        </PinContainer>
      </div>
      <div>
        <PinContainer title="House of Oud" href="https://houseofoud.in/">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-primary text-xl  dark:text-theme-white text-theme-green-dark">
              House of Oud
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="dark:text-theme-white text-theme-black/[.8] ">
                A prefume brand in Kerala, India
              </span>
            </div>
            <div className="flex flex-1 w-full  mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image
                src="/projects/houseofoudh.jpg"
                width={500}
                height={500}
                alt="House of Oud"
              />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
};

export default Project;
