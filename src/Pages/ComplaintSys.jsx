import { useState } from "react";
import "animate.css";

const ComplaintSys = () => {
  const [complaints, setComplaints] = useState([]);
  const [complaintText, setComplaintText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (complaintText.trim() === "") return;

    const newComplaint = {
      id: complaints.length + 1,
      text: complaintText,
      status: "Pending Moderation",
    };

    setComplaints([...complaints, newComplaint]);
    setComplaintText("");
  };

  return (
    <div style={{ backgroundColor: "#03045e" }} className="flex justify-center items-center min-h-screen p-6">
      <div className="bg-gradient-to-br from-blue-300 to-blue-500 shadow-2xl rounded-xl p-8 max-w-2xl w-full animate__animated animate__fadeIn">
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Anonymous Complaint System
        </h1>

        {/* Complaint Submission Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your complaint..."
            value={complaintText}
            onChange={(e) => setComplaintText(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-4 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
          >
            Submit Complaint
          </button>
        </form>

        {/* Complaints Display */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Submitted Complaints
          </h2>
          {complaints.length === 0 ? (
            <p className="text-white text-sm">No complaints submitted yet.</p>
          ) : (
            <ul className="space-y-3">
              {complaints.map((complaint) => (
                <li
                  key={complaint.id}
                  className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
                >
                  <p className="text-gray-800">{complaint.text}</p>
                  <span className="text-sm text-gray-500">
                    Status: {complaint.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintSys;
