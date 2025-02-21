import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log("Sign Up attempt:", { email, username, password, acceptTerms });
    }
  };

  return (
    <div style={{ backgroundColor: "#03045e" }} className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-[#90e0ef] p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center py-3 rounded-lg">
          Sign Up with SGGS Email ID
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-900 font-medium">Username</label>
            <input
              type="text"
              className="w-full px-4 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-900 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-900 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-900 font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              className="mr-2 accent-blue-500"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              required
            />
            <label className="text-gray-900">I accept the terms and conditions</label>
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-4 py-3 text-white bg-[#0077b6] rounded-lg hover:bg-[#005f8e] transition font-semibold shadow-md"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-gray-900 text-sm">
            Already have an account? <a href="/login" className="text-blue-800 hover:underline">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
