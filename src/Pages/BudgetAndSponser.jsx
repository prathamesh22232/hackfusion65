import { useState } from "react";
import "animate.css";

const BudgetAndSponser = () => {
  const [budgets, setBudgets] = useState([
    { id: 1, category: "Event Fund", amount: "₹50,000", status: "Approved" },
    { id: 2, category: "Department Budget", amount: "₹20,000", status: "Pending" },
    { id: 3, category: "Mess Fund", amount: "₹15,000", status: "Approved" },
  ]);

  const [proof, setProof] = useState(null);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleProofUpload = (e) => {
    setProof(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!proof || !category || !amount) {
      alert("Please fill all fields and upload proof.");
      return;
    }

    const newBudget = {
      id: budgets.length + 1,
      category,
      amount: `₹${amount}`,
      status: "Pending",
    };

    setBudgets([...budgets, newBudget]);
    setCategory("");
    setAmount("");
    setProof(null);
  };

  return (
    <div style={{ backgroundColor: "#03045e" }} className="flex justify-center items-center min-h-screen p-6">
      <div className="bg-gradient-to-br from-blue-300 to-blue-500 shadow-2xl rounded-xl p-8 max-w-2xl w-full animate__animated animate__fadeIn">
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Transparent College Budget & Sponsorship Tracking
        </h1>

        {/* Budget List */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Budget Records</h2>
          <ul className="space-y-3">
            {budgets.map((budget) => (
              <li
                key={budget.id}
                className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <p className="text-gray-800 font-medium">
                  {budget.category}: <span className="font-bold">{budget.amount}</span>
                </p>
                <span
                  className={`text-sm font-semibold ${
                    budget.status === "Approved" ? "text-green-600" : "text-yellow-600"
                  }`}
                >
                  {budget.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Upload Proof Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Expense Proof</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              className="w-full p-4 bg-gray-100 text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Category (Event Fund, Department Budget, Mess Fund)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <input
              type="number"
              className="w-full p-4 bg-gray-100 text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Amount (in ₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <input
              type="file"
              className="w-full p-4 bg-gray-100 text-gray-800 rounded-lg shadow-md"
              onChange={handleProofUpload}
              required
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-4 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
            >
              Submit Expense
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BudgetAndSponser;
