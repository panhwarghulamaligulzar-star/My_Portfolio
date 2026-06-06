import React, { useEffect } from "react";
import { Steps, Tag } from "antd";
import "antd/dist/reset.css";
import Experience from "../utils/Experience.json";
import { useLocation } from "react-router-dom";

const { Step } = Steps;

export default function ExperienceTimeline() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  useEffect(() => {
    document.title = "Ghulam Ali | Experience";
  }, []);

  return (
    <div className="bg-[#0C0F17] h-full py-[100px]  text-[#fff] flex justify-center items-center flex-col gap-[50px]">
      <div className="w-[95%] h-full m-auto lg:w-[1600px]  flex justify-between items-center">
        <div className="flex flex-col gap-[70px]">
          <div className="w-full flex flex-col gap-[5px] justify-center items-center">
            <h2 className="h3 text-[40px] lg:h3 text-center">
              My <span className="text-[#1ea6c8]">Professional</span> Journey
            </h2>
            <p className="text-md text-center w-full lg:w-[60%] m-auto text-[#B0B7C5]">
              A passionate full-stack developer focused on building seamless,
              user-centered digital solutions. Explore the path behind my skills
              and creativity.
            </p>
          </div>
          <div className="w-full flex justify-center relative">
            <div className="w-[95%] lg:w-[70%] m-auto">
              <Steps direction="vertical" current={0} className="text-left">
                {Experience.map((data, index) => {
                  const {
                    title,
                    start_date,
                    end_date,
                    company_name,
                    company_location,
                    project_desc,
                    project_link,
                  } = data;
                  return (
                    <Step
                      key={index}
                      className="text-md"
                      title={<h6 className="h6">{title}</h6>}
                      description={
                        <div className="">
                          <div className=" flex gap-[10px]">
                            <span className="text-md text-[#1ea6c8] mb-2">
                              {start_date}
                            </span>
                            <span className="text-md text-[#1ea6c8] mb-2">
                              {end_date}
                            </span>
                          </div>
                          <h3 className="h6 text-[20px]">{company_name}</h3>
                          <p className="text-md text-[#ffff] text-[18px] ">
                            {company_location}
                          </p>
                          <p className="text-md text-[19px] text-[#B0B7C5] mt-2">
                            {project_desc}
                          </p>
                          <div className="flex flex-col gap-[12px] my-[10px]">
                            <div>
                              <h6 className="h6 text-[18px]">Tech Stack</h6>
                            </div>
                            <div className="flex flex-wrap gap-[8px]">
                              {data.tech_stack.map((name, index) => {
                                return (
                                  <div key={index} className="flex gap-[6px">
                                    <Tag className="tag flex gap-[6px]">
                                      <span className="text-md text-[16px]">
                                        {name}
                                      </span>
                                    </Tag>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <a
                            href={project_link}
                            className="text-[#1ea6c8] text-md text-[15px]"
                            target="_blank"
                          >
                            🔗 {project_link}
                          </a>
                        </div>
                      }
                    />
                  );
                })}
              </Steps>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
