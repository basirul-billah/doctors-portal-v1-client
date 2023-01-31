import React from "react";

const Review = ({ review }) => {
  const { patientName, review: userReview, location, img } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="mt-4 flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="ml-6">
            <h5 className="text-lg font-semibold">{patientName}</h5>
            <h5 className="text-md">{location}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
