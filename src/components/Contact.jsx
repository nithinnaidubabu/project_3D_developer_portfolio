import React, { useState } from "react";
import { color, motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRedirect = (service) => {
    const { name, email, message } = form;

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    setLoading(true);

    // Build the email body
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}%0DEmail: ${email}%0DMessage: ${message}`;

    // Redirect based on the selected service
    switch (service) {
      case "gmail":
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=nithinnaidubabu@gmail.com&su=${subject}&body=${body}`,
          "_blank"
        );
        break;
      case "outlook":
        window.open(
          `https://outlook.office.com/mail/deeplink/compose?to=nithinnaidubabu@gmail.com&subject=${subject}&body=${body}`,
          "_blank"
        );
        break;
      case "default":
        window.location.href = `mailto:nithinnaidubabu@gmail.com?subject=${subject}&body=${body}`;
        break;
      default:
        alert("Invalid email service selected.");
    }

    setLoading(false);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name <span className='text-red-500'>*</span>
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your email <span className='text-red-500'>*</span>
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message <span className='text-red-500'>*</span>
            </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className="flex gap-4 mt-4">
            <button
              type='button'
              onClick={() => handleRedirect("gmail")}
              className='bg-red-500 py-2 px-6 rounded-md text-white font-bold shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-150'
            >
              {loading ? "Sending..." : "Send via Gmail"}
            </button>

            <button
              type='button'
              onClick={() => handleRedirect("outlook")}
              className='bg-blue-500 py-2 px-6 rounded-md text-white font-bold shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-150'
            >
              {loading ? "Sending..." : "Send via Outlook"}
            </button>

            <button
              type='button'
              onClick={() => handleRedirect("default")}
              className='bg-green-500 py-2 px-6 rounded-md text-white font-bold shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-150'
            >
              {loading ? "Sending..." : "Send via Default Mail"}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
