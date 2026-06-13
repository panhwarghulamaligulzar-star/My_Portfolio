import React, { useEffect } from "react";
import { Tag } from "antd";
import "antd/dist/reset.css";
import { useLocation } from "react-router-dom";
import ScrollRevealItem from "../components/ScrollRevealItem";
import ScrollRevealSection from "../components/ScrollRevealSection";
import Experience from "../utils/Experience.json";

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
    <ScrollRevealSection
      as="div"
      className="relative z-10 flex h-full flex-col items-center justify-center bg-transparent py-[100px] text-white"
      panelClassName="m-auto h-full w-[96%] px-3 py-8 sm:w-[94%] sm:px-4 sm:py-10 lg:w-[88%] lg:px-8 xl:w-[84%]"
      contentClassName="will-change-transform"
    >
      <div className="flex flex-col gap-10">
        <ScrollRevealItem>
          <div className="mx-auto flex w-full max-w-[920px] flex-col items-center justify-center gap-3 px-1 text-center">
            <h2 className="h3 text-[31px] leading-tight sm:text-[40px] lg:text-[54px]">
              My <span className="text-[#1ea6c8]">Professional</span> Journey
            </h2>
            <p className="max-w-[760px] text-[15px] leading-7 text-[#B0B7C5] sm:text-[16px] sm:leading-8">
              A passionate full-stack developer focused on building seamless,
              user-centered digital solutions. Explore the path behind my
              skills and creativity.
            </p>
          </div>
        </ScrollRevealItem>

        <div className="experience-timeline relative mx-auto w-full max-w-[1040px] px-1 sm:px-2 lg:px-6">
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
              <ScrollRevealItem key={index} delay={0.08 * (index + 1)}>
                <div className="experience-item relative grid grid-cols-1 items-start gap-4 pb-12 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-8 sm:pb-40 last:pb-0">
                  <div className="relative z-[1] hidden items-start justify-center pt-[2px] sm:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d2534] text-[13px] font-[600] text-[#dff9ff] ring-1 ring-[#2FB7D955] sm:h-9 sm:w-9 sm:text-[14px]">
                      {index + 1}
                    </div>
                  </div>

                  <div className="rounded-[20px] border border-[#2FB7D922] bg-[#0d1825f2] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-[18px] sm:rounded-[24px] sm:p-6 lg:mb-4 lg:ml-5 lg:p-7">
                    <h3 className="h6 leading-tight">{title}</h3>

                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                      <span className="text-[15px] text-[#1ea6c8] sm:text-[16px]">{start_date}</span>
                      <span className="text-[15px] text-[#1ea6c8] sm:text-[16px]">{end_date}</span>
                    </div>

                    <h4 className="mt-3 font-sans text-[19px] font-[600] text-white sm:text-[24px]">
                      {company_name}
                    </h4>
                    <p className="mt-1 text-[15px] text-white sm:text-[18px]">
                      {company_location}
                    </p>
                    <p className="mt-3 text-[15px] leading-8 text-[#B0B7C5] sm:text-[18px]">
                      {project_desc}
                    </p>

                    <div className="my-4 flex flex-col gap-3">
                      <h5 className="font-sans text-[16px] font-[600] text-white sm:text-[18px]">
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-[8px]">
                        {data.tech_stack.map((name, techIndex) => (
                          <Tag key={techIndex} className="tag flex gap-[6px]">
                            <span className="text-[14px] sm:text-[16px]">{name}</span>
                          </Tag>
                        ))}
                      </div>
                    </div>

                    {project_link ? (
                      <a
                        href={project_link}
                        className="break-all text-[14px] text-[#1ea6c8] sm:text-[15px]"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project_link}
                      </a>
                    ) : null}
                  </div>
                </div>
              </ScrollRevealItem>
            );
          })}
        </div>
      </div>
    </ScrollRevealSection>
  );
}
