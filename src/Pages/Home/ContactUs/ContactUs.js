import React from "react";
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center py-16 p-5"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="text-center">
        <h4 className="uppercase text-lg text-primary font-bold">contact us</h4>
        <h1 className="text-3xl font-bold text-white mb-4">
          Get in touch with us!
        </h1>
      </div>

      <form className="grid grid-cols-1 gap-3">
        <input
          type="email"
          placeholder="Email"
          className="input w-56 md:w-96"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-56 md:w-96"
        />
        <textarea
          type="text"
          placeholder="Your message"
          className="input h-20 w-56 md:w-96"
        />
      </form>
    </div>
  );
};

export default ContactUs;
