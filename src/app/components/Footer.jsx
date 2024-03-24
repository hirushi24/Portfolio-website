import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-center items-center" style={{ marginLeft: "auto", marginRight: "auto" }}>
        <div className="text-center">
          <span style={{ color: "purple", fontWeight: "bold" }}>Hirushi Silva</span>
          <br />
          <span className="text-slate-600">&copy; 2024 Hirushi Silva. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
