import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdError, MdCheckCircle } from "react-icons/md";
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

  const validateField = (name, value) => {
    let error = "";
    if (name === "name" && !value.trim()) {
      error = "Name is required";
    }
    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Invalid email address";
      }
    }
    if (name === "message" && !value.trim()) {
      error = "Message is required";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  return (
    <>
      <section id="contact" className="scroll-mt-16 " />
      <div className="antialiased dark:bg-card-dark bg-gray-50 py-5 flex w-full min-h-screen justify-center items-center">
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          className="flex flex-col md:flex-row space-x-6 md:space-x-0 space-y-6 bg-linear-to-br from-accent via-accent-light to-accent-dark w-[90vw] max-w-5xl p-8 rounded-xl shadow-lg text-white"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="200"
            className="flex flex-col justify-between "
          >
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
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="200"
            className="bg-white rounded-xl shadow-lg p-8 md:w-[75%]"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="text-accent flex flex-col space-y-4 "
            >
              {/* Status Messages */}
              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium"
                >
                  <MdCheckCircle size={20} className="shrink-0" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium"
                >
                  <MdError size={20} className="shrink-0" />
                  Something went wrong. Please try again.
                </div>
              )}
              <div>
                <label htmlFor="name" className="text-md font-semibold">
                  Your name
                </label>
                <div className="relative mt-2">
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`ring-1 w-full rounded-md px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 ${errors.name ? "ring-red-500" : "ring-gray-300"
                      }`}
                  />
                  {errors.name && (
                    <MdError
                      size={20}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none"
                    />
                  )}
                </div>
                {errors.name && (
                  <div role="alert" aria-live="polite" className="flex items-center gap-2 px-2 py-1 mt-1 text-sm text-red-600">
                    <MdError size={18} className="shrink-0" />
                    {errors.name}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-md font-semibold">
                  Email Address
                </label>
                <div className="relative mt-2">
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`ring-1 w-full rounded-md px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 ${errors.email ? "ring-red-500" : "ring-gray-300"
                      }`}
                  />
                  {errors.email && (
                    <MdError
                      size={20}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none"
                    />
                  )}
                </div>
                {errors.email && (
                  <div role="alert" aria-live="polite" className="flex items-center gap-2 px-2 py-1 mt-1 text-sm text-red-600">
                    <MdError size={18} className="shrink-0" />
                    {errors.email}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-md font-semibold">
                  Message
                </label>
                <div className="relative mt-2">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    autoComplete="off"
                    value={formData.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    className={`ring-1 w-full rounded-md px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 ${errors.message ? "ring-red-500" : "ring-gray-300"
                      }`}
                  />
                  {errors.message && (
                    <MdError
                      size={20}
                      className="absolute right-3 top-3 text-red-500 pointer-events-none"
                    />
                  )}
                </div>
                {errors.message && (
                  <div role="alert" aria-live="polite" className="flex items-center gap-2 px-2 py-1 mt-1 text-sm text-red-600">
                    <MdError size={18} className="shrink-0" />
                    {errors.message}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer inline-block self-end bg-accent rounded-lg text-white font-bold py-2 uppercase text-sm px-2"
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
