import { useState } from "react";
import "animate.css";

export default function FacilityBooking() {
  const facilities = ["Tennis Court", "Auditorium", "Library Hall", "Conference Room"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    facility: facilities[0],
    date: "",
    time: "",
  });

  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isBooked = bookings.some(
      (booking) => booking.facility === formData.facility && booking.date === formData.date && booking.time === formData.time
    );

    if (isBooked) {
      setMessage(`❌ The ${formData.facility} is already booked at this time.`);
    } else {
      setBookings([...bookings, formData]);
      setMessage(`✅ Booking request sent for ${formData.facility}. Waiting for approval.`);
    }

    setTimeout(() => setMessage(""), 4000);
    setFormData({ name: "", email: "", facility: facilities[0], date: "", time: "" });
  };

  return (
    <div style={{ backgroundColor: "#03045e" }} className="flex justify-center items-center min-h-screen p-6">
      <div className="bg-gradient-to-br from-blue-300 to-blue-500 shadow-2xl rounded-xl p-8 max-w-2xl w-full animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">Campus Facility Booking</h2>
        {message && <p className="text-center mb-3 text-sm font-semibold text-white">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="facility"
            value={formData.facility}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md"
          >
            {facilities.map((facility) => (
              <option key={facility} value={facility}>{facility}</option>
            ))}
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md"
          />
          <button type="submit" className="w-full bg-red-600 text-white p-4 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300">
            Request Booking
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Facility Availability</h3>
          <ul className="space-y-3">
            {facilities.map((facility) => {
              const isBooked = bookings.find((b) => b.facility === facility);
              return (
                <li key={facility} className="p-4 bg-white rounded-lg shadow-md border border-gray-200 flex justify-between">
                  <span className="text-gray-800">{facility}</span>
                  <span className={isBooked ? "text-red-500" : "text-green-500"}>{isBooked ? "Booked" : "Available"}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
