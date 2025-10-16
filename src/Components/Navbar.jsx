import React from 'react';
import logo from "../assets/react.svg";
import { NavLink } from 'react-router';
import '../index.css'


const Navbar = () => {
    return (
        <div className="bg-white/80">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between max-w-[1300px] mx-auto  p-3 text-black">
        <div className=" p-2 rounded-full bg-gray-400  ">
          <img src={logo}></img>
        </div>
        <div>
          <NavLink className="mr-4" to="/">
            Home
          </NavLink>
          <NavLink className="mr-4" to="/dasbord">
            DasBord
          </NavLink>
          <NavLink className="mr-4" to="/signin">
            Login
          </NavLink>
          <NavLink className="mr-4" to="/register">
            Register
          </NavLink>
          {/* <NavLink className="mr-4" to="/user">
            User
          </NavLink> */}
          {/* {myLogingUser && (
            <NavLink className="mr-4" to="/dasbord">
              Dasbord
            </NavLink>
          )} */}
        </div>
        <div>
          {/* {? (
            <button onClick={outUser} className="btn btn-secondary">
              Sign Out
            </button>
          ) : (
            <Link to="/loging">
              {" "}
              <button className="btn btn-secondary">Sign In</button>
            </Link>
          )} */}
          <button onClick={""} className="btn btn-secondary">
              Sign Out
            </button>
        </div> 
      </div>
    </div>
    );
};

export default Navbar;