import { useState } from "react";

export default function HealthLeaveNotification() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    coordinatorEmail: "",
    parentEmail: "",
    reason: "",
    type: "health", // Default type
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipient = formData.type === "health" ? formData.coordinatorEmail : formData.parentEmail;

    // Simulate email sending
    setMessage(`✅ Notification sent to ${recipient}`);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        studentName: "",
        studentEmail: "",
        coordinatorEmail: "",
        parentEmail: "",
        reason: "",
        type: "health",
      });
      setMessage("");
    }, 3000);
  };

  return (
    <div style={{ backgroundColor: "#03045e" }} className="flex justify-center items-center min-h-screen p-6">
      <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-2xl rounded-xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-white text-center mb-6 animate__animated animate__fadeIn">Health & Leave Notification</h2>

        {message && <p className="text-green-600 text-center mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            name="studentEmail"
            placeholder="Student Email"
            value={formData.studentEmail}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            name="coordinatorEmail"
            placeholder="Class Coordinator Email"
            value={formData.coordinatorEmail}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            name="parentEmail"
            placeholder="Parent Email"
            value={formData.parentEmail}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            name="reason"
            placeholder="Reason (sickness or leave)"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>

          <div className="flex gap-4">
            <button
              type="button"
              className={`w-1/2 p-4 rounded-md text-white transition-all duration-300 ${
                formData.type === "health" ? "bg-blue-700" : "bg-blue-300"
              } hover:bg-blue-500`}
              onClick={() => setFormData({ ...formData, type: "health" })}
            >
              Health Report
            </button>
            <button
              type="button"
              className={`w-1/2 p-4 rounded-md text-white transition-all duration-300 ${
                formData.type === "leave" ? "bg-blue-700" : "bg-blue-300"
              } hover:bg-blue-500`}
              onClick={() => setFormData({ ...formData, type: "leave" })}
            >
              Leave Report
            </button>
          </div>

          <button type="submit" className="w-full bg-blue-700 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
            Send Notification
          </button>
        </form>
      </div>
    </div>
  );
}
