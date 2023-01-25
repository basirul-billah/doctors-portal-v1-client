import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div className={`card card-side shadow-xl ${bgClass} px-6`}>
      <figure>
        <img src={icon} alt="icon" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
