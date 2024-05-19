import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepag</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/login" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Login
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/usersreg" style={{ color: "#87CEFA", textDecoration: "none" }}>
            UsersReg
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/userreg" style={{ color: "#87CEFA", textDecoration: "none" }}>
            UserReg
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/usersregone" style={{ color: "#87CEFA", textDecoration: "none" }}>
            UsersRegOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/checklisthistory" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Checklisthistory
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/orgreg" style={{ color: "#87CEFA", textDecoration: "none" }}>
            OrgReg
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
