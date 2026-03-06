import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  return (
    <>
      <section id="contact" className="scroll-mt-16 "/>
      <div className="antialiased dark:bg-card-dark bg-gray-50 py-5 flex w-full min-h-screen justify-center items-center">
        <div data-aos="zoom-in"
      data-aos-duration="700" className="flex flex-col md:flex-row space-x-6 md:space-x-0 space-y-6 bg-linear-to-br from-violet via-violet-light to-indigo-500 w-[90vw] max-w-4xl p-8 rounded-xl shadow-lg text-white">
          <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" className="flex flex-col justify-between ">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Me</h1>
              <p className="pt-2 text-white md:max-w-[90%]">
                I'm always open to new opportunities, collaborations, or just a
                friendly chat about tech and ideas.
              </p>
            </div>
            <div className="flex space-x-3 text-2xl mt-5 md:mt-0">
              <a
                href="https://github.com/vidhisonani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub className="cursor-pointer" />
              </a>
              <a
                href="https://linkedin.com/in/vidhipatel73/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="cursor-pointer" />
              </a>
              <a href="mailto:vidhilotus7@gmail.com" aria-label="Send Email">
                <MdOutlineEmail className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" className="bg-white rounded-xl shadow-lg p-8 md:w-[65%]">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="text-violet flex flex-col space-y-4 "
            >
              <div>
                <label htmlFor="name" className="text-md font-semibold">
                  Your name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-violet"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-md font-semibold">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-violet"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-md font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-violet"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>{" "}
              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-600 font-medium">
                  Message sent successfully 🎉
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-medium">
                  Something went wrong. Try again.
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer inline-block self-end bg-violet rounded-lg text-white font-bold py-2 uppercase text-sm px-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
