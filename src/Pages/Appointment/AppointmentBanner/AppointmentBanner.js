import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="hero text-accent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg lg:w-1/2 shadow-xl"
            alt=""
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
