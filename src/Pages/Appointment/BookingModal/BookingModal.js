import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const handleBooking = e => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const patientName = form.patientName.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
        appointmentDate: date,
        treatmentName: name,
        patientName,
        slot,
        email,
        phone,
    }

    console.log(booking);
    setTreatment(null);
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 text-white"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-6">
            <input type="text" disabled value={date} className="input input-disabled input-bordered w-full" />
            <select name="slot" className="select select-bordered w-full">
                {
                    slots.map((slot, indx) => <option value={slot} key={indx}>{slot}</option>)
                }
            </select>
            <input name="patientName" type="text" placeholder="Patient name" className="input input-bordered w-full" />
            <input name="email" type="email" placeholder="Email address" className="input input-bordered w-full" />
            <input name="phone" type="number" placeholder="Phone number" className="input input-bordered w-full" />
            <input type="submit" value="submit" className="btn btn-accent w-full text-white" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
