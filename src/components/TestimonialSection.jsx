import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollRevealSection from "./ScrollRevealSection";
import ScrollRevealItem from "./ScrollRevealItem";

const testimonials = [
  {
    name: "Asad Ali",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Ghulam built our school management system with great care and professionalism. The platform made student, staff, and academic workflows much easier for our academy team.",
    company: "ODC Academy",
    role: "CEO, Pakistan",
  },
  {
    name: "Ahmed Raza",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    message:
      "Ghulam delivered our project ahead of schedule with clean, maintainable code. Highly recommended for startups in Pakistan.",
    company: "TechLink Pvt Ltd",
    role: "CTO, Pakistan",
  },
  {
    name: "Shahid Ali",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    message:
      "Ghulam worked with us as a full-stack developer on our product and handled both frontend and backend responsibilities with strong commitment, clean execution, and reliable delivery.",
    company: "FuturifySoft",
    role: "CEO, Pakistan",
  },
  {
    name: "Bilal Khan",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    message:
      "From backend APIs to responsive frontend design, Ghulam handled everything like a pro. Will definitely hire again!",
    company: "PakDev Studio",
    role: "Founder, Pakistan",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  };

  return (
    <ScrollRevealSection
      as="div"
      className="relative z-10 w-full bg-transparent px-4 py-20"
      panelClassName="mx-auto w-full max-w-[1180px] px-5 py-10 lg:px-8"
      contentClassName="will-change-transform"
    >
      <ScrollRevealItem>
        <div className="mb-12 text-center">
          <motion.h2
            className="h3 text-center text-[40px] lg:h3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What My <span className="text-[#1ea6c8]">Clients</span> Says
          </motion.h2>
          <motion.p
            className="text-md m-auto w-full text-center text-[#B0B7C5] lg:w-[40%]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={1}
          >
            Hear directly from my amazing clients, real stories, honest
            feedback, and shared success from our collaborations.
          </motion.p>
        </div>
      </ScrollRevealItem>

      <ScrollRevealItem delay={0.1}>
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cyan-700 bg-transparent p-3 text-cyan-400 hover:bg-cyan-700/20 lg:left-2"
          >
            <FaChevronLeft />
          </button>

          <div className="w-full max-w-3xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="glass-panel flex min-w-full flex-col items-start justify-start rounded-[28px] border border-[#2FB7D966] px-6 py-7 lg:px-8 lg:py-8"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={index + 1}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="h5">{testimonial.name}</h3>
                      <div className="flex text-orange-400">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <FaStar key={i} />
                          ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-md text-start text-[#B0B7C5]">
                    {testimonial.message}
                  </p>

                  <div>
                    <p className="h6">{testimonial.company}</p>
                    <p className="text-md text-[#B0B7C5]">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#1ea6c8] bg-transparent p-3 text-[#1ea6c8] hover:bg-[#1ea6c8]-700/20 lg:right-2"
          >
            <FaChevronRight />
          </button>
        </div>
      </ScrollRevealItem>

      <ScrollRevealItem delay={0.16}>
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 w-3 cursor-pointer rounded-full ${
                current === idx ? "bg-cyan-400" : "bg-gray-500 opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </ScrollRevealItem>
    </ScrollRevealSection>
  );
}
