import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Lara Johnson",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Working with Ghulam was an absolute pleasure. His React expertise and clear communication made our U.S. e-commerce platform upgrade seamless.",
    company: "Johnson and Brothers",
    role: "CEO, USA",
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
    name: "Emily Carter",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "Very responsive and detail-oriented. He helped improve our website’s performance significantly. Great job!",
    company: "BrightWeb Agency",
    role: "Project Manager, USA",
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
        delay: i * 0.1, // staggered delay
      },
    }),
  };

  return (
    <div className="bg-custom-gradient py-20 px-4 w-full">
      <div className="w-[95%] m-auto lg:w-[1600px]">
        <div className="text-center mb-12">
          <motion.h2
            className="h3 text-[40px] lg:h3 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What My <span className="text-[#1ea6c8]">Clients</span> Says
          </motion.h2>
          <motion.p
            className="text-md text-center w-full lg:w-[40%] m-auto text-[#B0B7C5]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={1}
          >
            Hear directly from my amazing clients — real stories, honest
            feedback, and shared success from our collaborations.
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:left-[23%] top-1/2 -translate-y-1/2 z-10 bg-transparent border border-cyan-700 text-cyan-400 hover:bg-cyan-700/20 rounded-full p-3"
          >
            <FaChevronLeft />
          </button>

          {/* Slider */}

          <div className="overflow-hidden w-full max-w-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="min-w-full card flex flex-col justify-start items-start"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={index + 1}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
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

                  <p className="text-md text-[#B0B7C5] text-start">
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

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 lg:right-[23%] top-1/2 -translate-y-1/2 z-10 bg-transparent border border-[#1ea6c8] text-[#1ea6c8] hover:bg-[#1ea6c8]-700/20 rounded-full p-3"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === idx ? "bg-cyan-400" : "bg-gray-500 opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
