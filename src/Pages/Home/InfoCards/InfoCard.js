import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div className={`card md:card-side shadow-xl ${bgClass} md:pl-5 lg:px-6`}>
      <figure>
        <img className="mt-10 md:mt-0 lg:mt-0" src={icon} alt="icon" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
