import React, { useState } from "react";

export default function CheatingRecord() {
  const [formData, setFormData] = useState({
    studentName: "",
    applicationID: "",
    reason: "",
    proof: null,
  });

  const [records, setRecords] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle proof upload
  const handleProofUpload = (e) => {
    const file = e.target.files[0];
    // File type validation (accepts only images or PDFs)
    if (file && (file.type.startsWith("image/") || file.type === "application/pdf")) {
      setFormData({ ...formData, proof: file });
    } else {
      alert("Please upload an image or PDF file.");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.proof) {
      alert("Please upload a proof file.");
      return;
    }

    const newRecord = {
      id: Date.now(),
      studentName: formData.studentName,
      applicationID: formData.applicationID,
      reason: formData.reason,
      proof: URL.createObjectURL(formData.proof), // Convert to URL for display
      reportedAt: new Date().toLocaleString(),
    };

    setRecords([...records, newRecord]);
    setFormData({ studentName: "", applicationID: "", reason: "", proof: null });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="bg-gradient-to-br from-blue-300 to-blue-500 shadow-2xl rounded-xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-white text-center mb-6 animate__animated animate__fadeIn">
          Academic Integrity Violation
        </h2>

        {/* Reporting Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="applicationID"
            placeholder="Registration Number"
            value={formData.applicationID}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="reason"
            placeholder="Reason for Violation"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input
            type="file"
            className="w-full p-3 bg-white text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleProofUpload}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-4 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
          >
            Report Cheating
          </button>
        </form>

        {/* Reported Cases */}
        <h3 className="text-xl font-semibold text-white mt-8">Reported Cases</h3>
        <ul className="mt-4 space-y-3">
          {records.length === 0 ? (
            <p className="text-white text-sm">No cases reported yet.</p>
          ) : (
            records.map((record) => (
              <li key={record.id} className="p-4 border rounded-lg shadow-md bg-white text-gray-800">
                <p><strong>Name:</strong> {record.studentName}</p>
                <p><strong>Registration Number:</strong> {record.applicationID}</p>
                <p><strong>Reason:</strong> {record.reason}</p>
                <p><strong>Proof:</strong> <a href={record.proof} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Proof</a></p>
                <p className="text-sm text-gray-600"><strong>Reported At:</strong> {record.reportedAt}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
