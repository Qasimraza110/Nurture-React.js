import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {

    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-100 to-white-200 px-2 py-8">
      <div className="bg-gray-100 rounded-xl shadow-lg p-6 md:p-10 w-full max-w-5xl flex flex-col md:flex-row gap-10">
       
        <div className="flex-1 min-w-[280px]">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-black-700">
            Contact Us
          </h1>
          <p className="mb-6 text-gray-600">
            We'd love to hear from you! Fill out the form and our team will get
            back to you soon.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
            autoComplete="off"
          >
            <input
              type="text"
              {...register("name", { required: "Your name is required" })}
              placeholder="Your Name"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}

            <input
              type="email"
              {...register("email", {
                required: "Your email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Your Email"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}

            <textarea
              rows={5}
              {...register("message", { required: "Your message is required" })}
              placeholder="Your Message"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message.message}</p>
            )}

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition w-fit"
            >
              Send Message
            </button>
            {isSubmitSuccessful && (
              <p className="text-green-600 text-sm mt-2">
                Thank you for contacting us!
              </p>
            )}
          </form>
        </div>
      
        <div className="flex-1 min-w-[220px]">
          <h2 className="text-xl font-semibold mb-4 text-black-700">
            Contact Information
          </h2>
          <p className="mb-2 flex items-center">
            <span className="mr-2 text-green-600">
              <i className="fa fa-map-marker" />
            </span>
            123 Shad Bagh Lahore
          </p>
          <p className="mb-2 flex items-center">
            <span className="mr-2 text-green-600">
              <i className="fa fa-envelope" />
            </span>
            sh.qasim.raza110@gmail.com
          </p>
          <p className="mb-6 flex items-center">
            <span className="mr-2 text-green-600">
              <i className="fa fa-phone" />
            </span>
            +92 316 4144423
          </p>
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-green-600 text-2xl">
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

