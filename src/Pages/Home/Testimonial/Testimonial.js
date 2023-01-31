import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      patientName: "John Smith",
      review:
        "I had a great experience at this dental clinic. The staff was friendly and professional, and the dentist was very thorough and gentle. I highly recommend this clinic.",
      location: "New York, NY",
      img: people1,
    },
    {
      id: 2,
      patientName: "Jane Doe",
      review:
        "I was very impressed with the level of care and expertise at this dental clinic. The hygienist was very gentle and thorough, and the dentist was very knowledgeable and kind. I will definitely be returning.",
      location: "Los Angeles, CA",
      img: people2,
    },
    {
      id: 3,
      patientName: "Michael Johnson",
      review:
        "I had a root canal done at this dental clinic, and it was a great experience. The staff was very friendly and scraping, and the procedure was done quickly and with minimal discomfort. I highly recommend this clinic.",
      location: "Chicago, IL",
      img: people3,
    },
  ];

  return (
    <section className="my-16 px-4">
      <div className="flex justify-between w-full">
        <div>
          <h4 className="font-bold text-xl text-primary">Testimonial</h4>
          <h2 className="text-4xl">What our patients says</h2>
        </div>
        <figure>
          <img src={quote} className="w-48" alt="" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
