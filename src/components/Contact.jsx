import React, { useState, useEffect } from "react";
import { MdOutlineEmail, MdError, MdCheckCircle } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";

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
      <section id="contact" className="border-t border-border">
        <div className="antialiased bg-bg px-5 py-15 md:px-10 md:py-20 flex w-full min-h-screen justify-center items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="flex flex-col md:flex-row space-x-6 md:space-x-0 space-y-6 bg-contact-card w-[95vw] max-w-5xl p-5 md:py-15 md:px-10 shadow-lg text-white"
          >
            <div
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="200"
              className="flex flex-col justify-between "
            >
              <div className="py-3">
                <p className="font-mono-label">04 / Next Conversation</p>
                <h2 className="text-[44px] md:text-[78px] font-semibold leading-[0.90] tracking-[0.001em] mt-2">
                  Have a good problem?
                </h2>
                <p className="mt-5 text-white md:max-w-[90%]">
                  I'm always open to new opportunities, collaborations, or just a
                  friendly chat about tech and ideas.
                </p>
              </div>
              <a href="mailto:vidhilotus7@gmail.com" aria-label="Send Email" className="flex flex-row pt-5 gap-2">
                <MdOutlineEmail />
                <p className="font-mono font-medium text-[11px]">vidhilotus7@gmail.com</p>
              </a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="200"
              className="md:w-[70%]"
            >
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col space-y-4"
              >
                {/* Status Messages */}
                {status === "success" && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium font-body"
                  >
                    <MdCheckCircle size={20} className="shrink-0" />
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium font-body"
                  >
                    <MdError size={20} className="shrink-0" />
                    Something went wrong. Please try again.
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="font-mono-label text-white">
                    Your name
                  </label>
                  <div className="relative mt-2">
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      placeholder="How can I call you?"
                      value={formData.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`text-sm font-body w-full bg-white/10 border px-4 py-2 pr-10 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 ${errors.name
                        ? "border-error focus:ring-error"
                        : "border-white/30"
                        }`}
                    />

                    {errors.name && (
                      <MdError
                        size={20}
                        className="font-body absolute right-3 top-1/2 -translate-y-1/2  text-error pointer-events-none"
                      />
                    )}
                  </div>

                  {errors.name && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="flex items-center gap-2 px-2 py-1 mt-1 text-sm  text-error"
                    >
                      <MdError
                        size={16}
                        className="shrink-0"
                      />
                      {errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="font-mono-label text-white">
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
                      className={`text-sm font-body w-full bg-white/10 border px-4 py-2 pr-10 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 ${errors.email
                        ? "border-error focus:ring-error"
                        : "border-white/30"
                        }`}
                    />

                    {errors.email && (
                      <MdError
                        size={20}
                        className="font-body absolute right-3 top-1/2 -translate-y-1/2 text-error pointer-events-none"
                      />
                    )}
                  </div>

                  {errors.email && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="flex items-center gap-2 px-2 py-1 mt-1 text-sm  text-error"
                    >
                      <MdError
                        size={16}
                        className="shrink-0"
                      />
                      {errors.email}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="font-mono-label text-white">
                    A Note
                  </label>
                  <div className="relative mt-2">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me a little about you're making..."
                      rows="4"
                      autoComplete="off"
                      value={formData.message}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      className={`text-sm font-body w-full bg-white/10 border px-4 py-2 pr-10 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 ${errors.message
                        ? "border-error focus:ring-error"
                        : "border-white/30"
                        }`}
                    />

                    {errors.message && (
                      <MdError
                        size={20}
                        className="font-body absolute right-3 top-1/2 -translate-y-1/2  text-error pointer-events-none"
                      />
                    )}
                  </div>

                  {errors.message && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="flex items-center gap-2 px-2 py-1 mt-1 text-sm  text-error"
                    >
                      <MdError
                        size={16}
                        className="shrink-0"
                      />
                      {errors.message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer inline-block rounded-sm self-start bg-accent text-card font-bold p-3 text-[12px]"
                >
                  {isSubmitting ? "Sending..." : "Send Message "} <ArrowRight size={17} className="inline-block" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
