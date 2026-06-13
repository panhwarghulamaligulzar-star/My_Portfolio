import React, { useCallback, useEffect, useRef, useState } from "react";
import qarhami from "../assets/images/Projects/qarhami.png";
import ecommerce from "../assets/images/Projects/ecommerce.png";
import user_tod from "../assets/images/Projects/users_todo.png";
import endpoint_co from "../assets/images/Projects/endpoint_co.png";
import fkr_org from "../assets/images/Projects/fkr_org.png";
import rdco_org from "../assets/images/Projects/rdco_org.png";
import Gaming_chair from "../assets/images/Projects/Gaming_chair.png";
import isra_edu from "../assets/images/Projects/isra_edu.png";
import futuryfiveSoft from "../assets/images/Projects/futuryfiveSoft.png";

const ALL_PROJECTS = [
  { title: "Web App", subtitle: "Car Rental Business Web App", img: qarhami, link: "https://app.qarhami.com" },
  { title: "Web App", subtitle: "E-Commerce Web App - Full Functionalities", img: ecommerce, link: "https://shopping-app-84vb.vercel.app" },
  { title: "Web App", subtitle: "Users Post With CRUD", img: user_tod, link: "https://users-info-two.vercel.app" },
  { title: "Web Development", subtitle: "Full-Stack Marketing Agency Project", img: endpoint_co, link: "https://www.socialendpoint.com/" },
  { title: "Web Development", subtitle: "Full-Stack Non-Profit Organization Project", img: fkr_org, link: "https://www.fkrfoundation.org" },
  { title: "Web Development", subtitle: "Full-Stack Non-Profit Organization Project", img: rdco_org, link: "https://www.rozedhani.org" },
  { title: "Web Designing", subtitle: "Website Design for Gaming Chair Brand", img: Gaming_chair, link: "https://www.socialendpoint.com/Portfolio/GAMINGWORLD/" },
  { title: "Web App", subtitle: "Educational Institute Web Application", img: isra_edu, link: "https://odysseyacademy.education/" },
  { title: "Web App", subtitle: "Educational SaaS Product", img: futuryfiveSoft, link: "https://app.futurifysoft.com/app/education" },
];

const FeaturedProjects = () => {
  const outerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const filtered = ALL_PROJECTS;

  const onScroll = useCallback(() => {
    if (!outerRef.current) return;
    const rect = outerRef.current.getBoundingClientRect();
    const headerTrigger = window.innerHeight * 0.88;
    setHeaderVisible(rect.top < headerTrigger);
    const scrolledIn = -rect.top;
    if (scrolledIn <= 0) {
      setVisibleCount(0);
      return;
    }
    const STEP = 500;
    const count = Math.min(Math.floor(scrolledIn / STEP) + 1, filtered.length);
    setVisibleCount(count);
  }, [filtered.length]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <style>{`
        .fp-outer {
          position: relative;
          width: 100%;
        }

        .fp-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .fp-panel {
          position: relative;
          width: min(1180px, 100%);
          min-height: min(92vh, 920px);
          padding: 5.75rem 1rem 1.35rem;
          border-radius: 38px;
          background: transparent;
          box-shadow: none;
        }

        .fp-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          opacity: 0;
          transform: translateY(48px);
          transition:
            opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fp-header.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fp-title {
          margin: 0;
          color: #ffffff;
          font-size: clamp(2.5rem, 4vw, 3.4rem);
          line-height: 1.04;
          font-weight: 800;
          letter-spacing: 0.01em;
          font-family: "Inter_VariableFont", Arial, Helvetica, sans-serif;
          text-transform: uppercase;
        }

        .fp-title span {
          color: #2fb7d9;
        }

        .fp-copy {
          margin: 0;
          max-width: 760px;
          color: #b7c5d6;
          font-size: 1rem;
          line-height: 1.8;
          font-family: "Inter_VariableFont", Arial, Helvetica, sans-serif;
        }

        .fp-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          min-height: 560px;
          margin-top: 2.2rem;
        }

        .fp-stack {
          position: relative;
          width: min(980px, calc(100vw - 160px));
          height: 500px;
        }

        .fp-card {
          position: absolute;
          inset: 0;
          width: min(980px, calc(100vw - 160px));
          height: 500px;
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(47, 183, 217, 0.24);
          box-shadow: 0 24px 70px rgba(3, 9, 16, 0.36);
          transform: translateY(110vh);
          opacity: 0;
          transition:
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.5s ease;
          will-change: transform, opacity;
        }

        .fp-card.is-top {
          transform: translateY(0);
          opacity: 1;
        }

        .fp-card.is-depth-1 {
          transform: translateY(-16px) scale(0.97);
          opacity: 0.8;
        }

        .fp-card.is-depth-2 {
          transform: translateY(-30px) scale(0.94);
          opacity: 0.55;
        }

        .fp-card.is-depth-3 {
          transform: translateY(-42px) scale(0.91);
          opacity: 0.35;
        }

        .fp-card.is-depth-4 {
          transform: translateY(-52px) scale(0.88);
          opacity: 0.15;
        }

        .fp-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          background: #162031;
        }

        .fp-card-overlay {
          position: absolute;
          inset: auto 0 0 0;
          min-height: 165px;
          background: linear-gradient(
            180deg,
            rgba(4, 10, 18, 0) 0%,
            rgba(6, 13, 22, 0.45) 18%,
            rgba(7, 15, 25, 0.82) 52%,
            rgba(7, 15, 25, 0.96) 100%
          );
          pointer-events: none;
        }

        .fp-card-footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.4rem 1.4rem 1.45rem;
          background: transparent;
          z-index: 2;
        }

        .fp-card-copy {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          min-width: 0;
        }

        .fp-card-tag {
          color: #2fb7d9;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-family: "Inter_VariableFont", Arial, Helvetica, sans-serif;
        }

        .fp-card-subtitle {
          color: #ffffff;
          font-size: 1.25rem;
          line-height: 1.35;
          font-weight: 700;
          font-family: "Inter_VariableFont", Arial, Helvetica, sans-serif;
        }

        .fp-card-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 128px;
          white-space: nowrap;
          border-radius: 999px;
          background: #2fb7d9;
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          padding: 0.88rem 1.18rem;
          font-family: "Inter_VariableFont", Arial, Helvetica, sans-serif;
          box-shadow: 0 14px 30px rgba(47, 183, 217, 0.24);
          transition: transform 0.25s ease, background-color 0.25s ease;
        }

        .fp-card-link:hover {
          transform: translateY(-1px);
          background: #3bc0e0;
        }

        @media (max-width: 900px) {
          .fp-panel {
            min-height: 94vh;
            padding: 4.5rem 1rem 1.25rem;
          }

          .fp-stack,
          .fp-card {
            width: min(860px, calc(100vw - 110px));
            height: 480px;
          }

          .fp-card-image {
            height: 290px;
          }
        }

        @media (max-width: 640px) {
          .fp-panel {
            min-height: 96vh;
            padding: 7rem 0.9rem 1rem;
          }

          .fp-title {
            font-size: 2.1rem;
            line-height: 1;
          }

          .fp-copy {
            max-width: 92%;
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .fp-stage {
            min-height: 445px;
            margin-top: 1.5rem;
          }

          .fp-stack,
          .fp-card {
            width: calc(100vw - 64px);
            height: 395px;
          }

          .fp-card-image {
            height: 100%;
          }

          .fp-card-overlay {
            min-height: 170px;
            background: linear-gradient(
              180deg,
              rgba(4, 10, 18, 0) 0%,
              rgba(6, 13, 22, 0.56) 20%,
              rgba(7, 15, 25, 0.9) 58%,
              rgba(7, 15, 25, 0.98) 100%
            );
          }

          .fp-card-footer {
            gap: 0.9rem;
            padding: 1rem 1rem 1.1rem;
            flex-direction: column;
            align-items: flex-start;
          }

          .fp-card-subtitle {
            font-size: 0.88rem;
            line-height: 1.3;
          }

          .fp-card-link {
            min-width: 120px;
            padding: 0.8rem 1rem;
          }

          .fp-card.is-depth-1 {
            transform: translateY(-10px) scale(0.985);
            opacity: 0.82;
          }

          .fp-card.is-depth-2 {
            transform: translateY(-18px) scale(0.965);
            opacity: 0.6;
          }

          .fp-card.is-depth-3 {
            transform: translateY(-26px) scale(0.945);
            opacity: 0.4;
          }

          .fp-card.is-depth-4 {
            transform: translateY(-34px) scale(0.925);
            opacity: 0.22;
          }
        }
      `}</style>

      <div
        ref={outerRef}
        className="fp-outer"
        style={{
          position: "relative",
          height: `${100 + filtered.length * 60 + 20}vh`,
        }}
      >
        <div className="fp-sticky">
          <div className="fp-panel">
            <div className={`fp-header ${headerVisible ? "is-visible" : ""}`}>
              <h2 className="fp-title">
                Featured <span>Projects</span>
              </h2>

              <p className="fp-copy">
                Explore selected work through a scroll-driven showcase where each project rises into view one by one and holds at the center for a cleaner presentation.
              </p>
            </div>

            <div className="fp-stage">
              <div className="fp-stack">
                {filtered.map((project, index) => {
                  let cardClassName = "fp-card";

                  if (index === visibleCount - 1) {
                    cardClassName += " is-top";
                  } else if (index === visibleCount - 2) {
                    cardClassName += " is-depth-1";
                  } else if (index === visibleCount - 3) {
                    cardClassName += " is-depth-2";
                  } else if (index === visibleCount - 4) {
                    cardClassName += " is-depth-3";
                  } else if (index < visibleCount - 4) {
                    cardClassName += " is-depth-4";
                  }

                  return (
                    <article
                      key={`${project.link}-${index}`}
                      className={cardClassName}
                      style={{ zIndex: index + 1, opacity: index < visibleCount ? undefined : 0 }}
                      aria-hidden={index >= visibleCount}
                    >
                      <img src={project.img} alt={project.subtitle} className="fp-card-image" />
                      <div className="fp-card-overlay" />

                      <div className="fp-card-footer">
                        <div className="fp-card-copy">
                          <span className="fp-card-tag">{project.title}</span>
                          <span className="fp-card-subtitle">{project.subtitle}</span>
                        </div>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fp-card-link"
                        >
                          Visit {"->"}
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
