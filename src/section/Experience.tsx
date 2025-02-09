import React, { Suspense, useState } from "react";

import { workExperiences } from "../constants/faker.js";
import { useQuery } from "@tanstack/react-query";
import { getEduExp, getWorkExp } from "../services/apiServices.js";
import dayjs from "dayjs";

const Experience = ({item}:{item:any}) => {
  return (
    <div className="work-content_container group">
      <div className="flex flex-col h-full justify-start items-center py-2">
        <div className="work-content_logo">
          <img className="w-full h-full" src={item.icon} alt="" />
        </div>

        <div className="work-content_bar" />
      </div>

      <div className="sm:p-3 px-2.5 py-3">
        <p className="font-bold text-white-800">{item.name}</p>
        <p className="text-sm mb-5">
          {item.pos} -- <span>{item.duration}</span>
        </p>
        <p className="group-hover:text-white transition-all ease-in-out duration-500">
          {item.title}
        </p>
      </div>
    </div>
  );
};

const EducationAndExperience = () => {
  const API_BASE_URI = import.meta.env.VITE_NOCODB_BASE_URI;

  const convertDateData = (
    startDate: string,
    endDate: string,
    isYearOnly: boolean,
    isCurrent: boolean
  ) => {
    const startDateParser = dayjs(startDate).format(
      isYearOnly ? "YYYY" : "MMM YYYY"
    );
    const endDateParser = isCurrent
      ? "Current"
      : dayjs(endDate).format(isYearOnly ? "YYYY" : "MMM YYYY");

    return startDateParser + " - " + endDateParser;
  };

  const handleExpData = (d: any) => {
    const data = d.list;
    console.log(data);

    return data.map((x: any) => ({
      id: x["id"],
      name: x["title"],
      pos: x["position"],
      title: x["description"],
      icon: API_BASE_URI + x["logo"][0]["path"],
      duration: convertDateData(
        x["start"],
        x["end"],
        x["isYearOnly"],
        x["isCurrent"]
      ),
    }));
  };

  const {
    isPending: isEduPending,
    isError: isEduError,
    data: education,
    error: eduError,
  } = useQuery({
    queryKey: ["education"],
    queryFn: getEduExp,
    select: handleExpData,
  });

  const {
    isPending: isExpPending,
    isError: isExpError,
    data: workExperiences,
    error: expError,
  } = useQuery({
    queryKey: ["work"],
    queryFn: getWorkExp,
    select: handleExpData,
  });

  // console.log(workExperiences)

  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600 text-base">
        <p className="head-text">Education & Experience</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-12">
          <div className="work-container">
            <div className="sm:py-10 py-3 sm:px-5 px-2.5">
              <div className="px-5 text-white text-2xl italic py-3">
                Education
              </div>
              {isEduPending ? (
                <div>Loading....</div>
              ) : isEduError ? (
                <div>Error....{eduError.message}</div>
              ) : (
                education.map((item, index) => <Experience item={item} key={index}/>)
              )}
            </div>
          </div>
          <div className="work-container">
            <div className="sm:py-10 py-3 sm:px-5 px-2.5">
              <div className="px-5 text-white text-2xl italic py-3">
                Experience
              </div>

              {isExpPending ? (
                <div>Loading....</div>
              ) : isExpError ? (
                <div>Error....{expError.message}</div>
              ) : (
                workExperiences.map((item, index) => (
                  <Experience item={item} key={index} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;
