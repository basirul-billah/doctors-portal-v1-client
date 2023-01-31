import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-32">
      <div
        className="hero bg-base-200"
        style={{
          background: `url(${appointment})`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row overflow-y-clip over">
          <img src={doctor} className="-mt-32 -mb-24 hidden md:block lg:w-1/2" alt="" />
          <div>
            <h4 className="uppercase text-lg text-primary font-bold">
              appointment
            </h4>
            <h1 className="text-4xl font-bold text-white">
              Make an appointment today!
            </h1>
            <p className="py-6 text-justify text-white">
              Welcome to our state-of-the-art medical facility, where our team
              of highly skilled and compassionate doctors are dedicated to
              providing the highest level of care to our patients. With our
              online appointment scheduling system, it's never been easier to
              book an appointment with one of our specialists. Whether you're in
              need of a routine check-up or a specialized treatment, our doctors
              are here to help. Trust us to be your partner in health and
              wellness, and book your appointment today!
            </p>
            <PrimaryButton>make an appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
