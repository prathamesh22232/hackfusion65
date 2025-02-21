import { useState } from "react";
import BudgetAndSponser from "../Pages/BudgetAndSponser";
import CompliantSys from "../Pages/ComplaintSys";

function Content() {
  const [SelectedComponent, setSelectedComponent] = useState(null);

  const handleClick = (Component) => {
    setSelectedComponent(() => Component); // ✅ Fix: Store component function, not instance
  };

  return (
    <div style={{ backgroundColor: "#03045e" }} className="flex flex-col items-center space-y-4">
      <div className="flex justify-around w-full my-10">
        <button
          onClick={() => handleClick(CompliantSys)}
          className="px-6 py-3 text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 shadow-md transition-all duration-300 hover:from-red-500 hover:to-blue-500 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 disabled:opacity-50"
        >
          Complaint System
        </button>

        <button
          onClick={() => handleClick(BudgetAndSponser)}
          className="px-6 py-3 text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 shadow-md transition-all duration-300 hover:from-red-500 hover:to-blue-500 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 disabled:opacity-50"
        >
          Budget and Sponsorship Tracking
        </button>
      </div>

      {/* ✅ Fix: Ensure SelectedComponent is stored correctly */}
      <div className="w-full p-4">
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
}

export default Content;
