import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";

const AvailableAppointment = ({ selectedDate, setSelectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="mt-16 p-8">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            option={option}
          ></AppointmentOptions>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
