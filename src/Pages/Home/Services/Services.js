import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import cavity from "../../../assets/images/cavity.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Preventive Care",
      description: "Routine checkups and cleanings to maintain oral health.",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cosmetic Dentistry",
      description: "Improve your smile with veneers, whitening, and more.",
      icon: whitening,
    },
    {
      id: 3,
      name: "Restorative Dentistry",
      description:
        "Repair and restore damaged teeth with fillings, crowns, and more.",
      icon: cavity,
    },
  ];

  return (
    <div className="px-4">
      <div className="mt-24">
        <h3 className="text-center text-lg font-bold text-primary uppercase">
          Our Services
        </h3>
        <h1 className="text-center text-5xl text-accent">
          Services We Provide
        </h1>
      </div>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
