import { useState, useEffect } from "react";

function Apply2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Event Organization",
    details: "",
  });

  const [applications, setApplications] = useState([]);
  const [passcode, setPasscode] = useState("");
  const [isPasscodeCorrect, setIsPasscodeCorrect] = useState(true); // Track if passcode is correct
  const [actionId, setActionId] = useState(null); // Track which application is being acted upon
  const [actionType, setActionType] = useState(""); // Track if the action is approve or reject

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle passcode change
  const handlePasscodeChange = (e) => {
    setPasscode(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplication = {
      id: Date.now(),
      ...formData,
      status: "Pending",
      priority: 0, // Lower priority value means higher priority
      submittedAt: new Date(),
    };

    setApplications([...applications, newApplication]);
    setFormData({ name: "", email: "", type: "Event Organization", details: "" });
  };

  // Approve an application with passcode verification
  const handleApprove = (id) => {
    setActionId(id); // Store the application ID to act upon
    setActionType("approve"); // Set the action type to "approve"
  };

  // Reject an application with passcode verification
  const handleReject = (id) => {
    setActionId(id); // Store the application ID to act upon
    setActionType("reject"); // Set the action type to "reject"
  };

  // Verify passcode and then approve or reject the application
  const handlePasscodeVerification = (e) => {
    e.preventDefault();
    if (passcode === "Hackit") {
      setIsPasscodeCorrect(true);

      setApplications((prevApps) =>
        prevApps.map((app) =>
          app.id === actionId
            ? {
                ...app,
                status: actionType === "approve" ? "Approved" : "Rejected", // Set status to Approved or Rejected based on actionType
              }
            : app
        )
      );
      setActionId(null); // Reset actionId after the action is taken
      setActionType(""); // Reset actionType after the action is taken
    } else {
      setIsPasscodeCorrect(false); // Set to false if passcode is incorrect
    }
  };

  // Escalate older applications over time
  useEffect(() => {
    const interval = setInterval(() => {
      setApplications((prevApps) =>
        prevApps.map((app) =>
          app.status === "Pending" ? { ...app, priority: app.priority - 1 } : app
        )
      );
    }, 10000); // Increase priority every 10 seconds (for demo)

    return () => clearInterval(interval);
  }, []);

  // Sort applications by priority
  const sortedApplications = [...applications].sort((a, b) => a.priority - b.priority);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6">
      <div className="bg-gradient-to-br from-blue-300 to-blue-500 text-white shadow-xl rounded-xl p-8 max-w-lg w-full border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 text-center">Application & Approval System</h2>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-lg bg-white text-black placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-lg bg-white text-black placeholder-gray-400"
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-lg bg-white text-black"
          >
            <option>Budget Approval</option>
            <option>Sponsorship</option>
            <option>Event Organization (Pragyaa)</option>
            <option>Event Organization (Utsav)</option>
            <option>Event Organization (Zenith)</option>
            <option>Departmental Event</option>
          </select>
          <textarea
            name="details"
            placeholder="Application Details"
            value={formData.details}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-lg bg-white text-black placeholder-gray-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>

        {/* Passcode Input for Approval or Rejection */}
        {actionId && (
          <div className="mt-6">
            <input
              type="password"
              placeholder="Enter passcode to approve/reject"
              value={passcode}
              onChange={handlePasscodeChange}
              className="p-2 w-full border rounded-lg"
            />
            <button
              onClick={handlePasscodeVerification}
              className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 mt-2"
            >
              Confirm
            </button>
            {!isPasscodeCorrect && (
              <p className="text-red-500 text-sm mt-2">Incorrect passcode. Please try again.</p>
            )}
          </div>
        )}

        {/* Applications List */}
        <h3 className="text-xl font-bold mt-8 text-center">Pending Applications</h3>
        <ul className="mt-4 space-y-3">
          {sortedApplications.length === 0 ? (
            <p className="text-gray-400 text-sm text-center">No applications submitted yet.</p>
          ) : (
            sortedApplications.map((app) => (
              <li key={app.id} className="p-4 border rounded-lg bg-gray-700">
                <p className="font-bold">{app.type} - {app.name}</p>
                <p className="text-sm mt-1">{app.details}</p>
                <p className="text-sm font-bold mt-1">
                  Status: <span className={app.status === "Pending" ? "text-red-500" : "text-green-500"}>{app.status}</span>
                </p>
                {app.status === "Pending" && (
                  <div className="mt-2 flex space-x-3">
                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                      onClick={() => handleApprove(app.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                      onClick={() => handleReject(app.id)}
                    >
                      Reject
                    </button>
                  </div>
                )}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Apply2;
