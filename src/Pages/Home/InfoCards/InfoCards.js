import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hour",
      description: "Monday - Friday: 9:00AM - 5:00PM / Saturday-Sunday: Closed",
      icon: clock,
      bgClass: "bg-primary",
    },
    {
      id: 2,
      name: "Location",
      description: "123 Main St, Anytown, CA 98765",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact",
      description: "Phone: (555) 555-5555 / Email: smile@dentalclinic.com",
      icon: phone,
      bgClass: "bg-primary",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {
            cardData.map(card => <InfoCard
                key={card.id}
                card={card}
            ></InfoCard>)
        }
    </div>
  );
};

export default InfoCards;
