import { useState } from "react";
import "animate.css";
import vaishnavi from "../Images/vaishnavi.jpg";
import Atharva from "../Images/atharva.jpg";
import kunal from "../Images/kunal.jpg";
import vaibhavi from "../Images/Vaibhavi.jpg";

export default function Elections() {
  const candidates = [
    {
      name: "Vaishnavi Patil",
      party: "EXTC A- girls",
      image: vaishnavi,
      manifesto: "Student Empowerment",
    },
    {
      name: "Kunal Rathod",
      party: "Extc A-Boys",
      image: kunal,
      manifesto: "Steady Student Council",
    },
    {
      name: "Vaibhavi Zamde",
      party: "IT Girls",
      image: vaibhavi,
      manifesto: "Tech support for tech branches",
    },
    {
      name: "Atharva Kulkarni",
      party: "Extc B-Boys",
      image: Atharva,
      manifesto: "Localites Issues",
    },
  ];

  return (
    <div style={{ backgroundColor: "#03045e" }} className="flex flex-wrap justify-center items-center min-h-screen p-6 gap-6">
      {candidates.map((candidate, index) => (
        <div key={index} className="bg-gradient-to-br from-blue-300 to-blue-500 shadow-md rounded-xl overflow-hidden p-6 border border-gray-200 animate__animated animate__fadeInUp max-w-xs w-full text-center">
          <div className="w-32 h-32 mx-auto mb-4">
            <img className="w-full h-full object-cover rounded-full border-4 border-gray-300" src={candidate.image} alt={candidate.name} />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-900">{candidate.name}</h2>
            <p className="text-sm text-gray-600 font-medium">{candidate.party}</p>
            <p className="text-gray-700 mt-2">{candidate.manifesto}</p>
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-all duration-300">
              Vote for {candidate.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
