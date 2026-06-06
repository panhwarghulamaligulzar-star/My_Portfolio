import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Input, Button, message } from "antd";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    document.title = "Ghulam Ali | Contact Me";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Optionally clear form
      setFormData({ name: "", email: "", message: "" });
    } else {
      message.error("Please fill all required fields correctly.");
    }
  };

  return (
    <div className="bg-custom-gradient min-h-screen flex flex-col items-center justify-center p-6">
      <div className="mb-[20px]">
        <motion.h2
          className="h3 text-[40px] lg:h3 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Get <span className="text-[#1ea6c8]">in</span> Touch
        </motion.h2>

        <motion.p
          className="text-md text-center w-full lg:w-[40%] m-auto text-[#B0B7C5]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out
          — I'm here to help with your web development needs. Let's make
          something amazing together!
        </motion.p>
      </div>

      <div className="card shadow-md rounded-md w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Info Section */}
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 p-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-[30px]">{<CiLocationOn />}</span>
            <h6 className="h6">Address</h6>
            <p className="heading-md !text-[18px] text-center">
              Defence View Phase 2, Karachi, Sindh, Pakistan
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-[30px]">{<FaPhoneAlt />}</span>
            <h6 className="h6">Phone</h6>
            <p className="heading-md !text-[18px] text-center">
              <a href="tel:+923113897856" className="block">
                0311 3897856
              </a>
              <a href="tel:+923093701294" className="block">
                0309 3701294
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-[30px]">{<FaEnvelope />}</span>
            <h6 className="h6">Email</h6>
            <p className="heading-md !text-[18px] text-center">
              <a href="mailto:panhwar.ghulamali.gulzar@gmail.com">
                panhwar.ghulamali.gulzar@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col gap-[18px] p-4">
          <h6 className="h6">Send us a message</h6>
          <p className="text-md text-[16px]">
            If you have any work from me or any types of queries related to my
            tutorial, you can send me message from here.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              status={errors.name ? "error" : ""}
              className="input"
            />
            {errors.name && <div className="text-red-500">{errors.name}</div>}

            <Input
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              status={errors.email ? "error" : ""}
              className="input"
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}

            <Input.TextArea
              name="message"
              placeholder="Enter your message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              status={errors.message ? "error" : ""}
              className="input h-[150px]"
            />
            {errors.message && (
              <div className="text-red-500">{errors.message}</div>
            )}

            <Button type="primery" htmlType="submit" className="btn-sm">
              <span className="text-md">Submit</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
