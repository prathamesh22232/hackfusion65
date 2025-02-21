import { Link } from "react-router-dom";
import React from "react";
import sggs from '../Images/bw sggs.png'

const Navbar = () => {
  return (
    <>
    <header style={{ backgroundColor: "#03045e" }} className="text-white p-4">

      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
       <img width={"120px"} height={"120px"} src={sggs}valt="sggsimg" />
        <nav>
          <ul className="flex space-x-6  text-lr ">
            <li className="text-red">
              <Link
                to="/home"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/election"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Elections
              </Link>
            </li>
            <li>
             <Link to="/leave" className="hover:text-yellow-300 transition-colors duration-200">Health & Leave</Link>
            </li>

            <li>
             <Link to="/permit" className="hover:text-yellow-300 transition-colors duration-200">My Permissions</Link>
            </li>

             <Link to="/application" className="hover:text-yellow-300 transition-colors duration-200">
                        Apply Here
                      </Link>

            <li>
             <Link to="/cheat" className="hover:text-yellow-300 transition-colors duration-200">Academic Integrity Violation</Link>
            </li>
          </ul>

        </nav>

        
      </div>
    </header>   

    </>
  );
};

export default Navbar;
