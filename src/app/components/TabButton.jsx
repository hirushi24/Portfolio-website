// import React from "react";
// import { motion } from "framer-motion";

// const variants = {
//   default: { width: 0 },
//   active: { width: "calc(100% - 0.75rem)" },
// };

// const TabButton = ({ active, selectTab, children }) => {
//   const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

//   return (
//     <button onClick={selectTab}>
//       <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
//         {children}
//       </p>
//       <motion.div
//         animate={active ? "active" : "default"}
//         variants={variants}
//         className="h-1 bg-primary-500 mt-2 mr-3"
//       ></motion.div>
//     </button>
//   );
// };

// export default TabButton;

"use client";

import React from "react";

export default function TabButton({ selectTab, active = false, children }) {
  return (
    <button
      type="button"
      onClick={selectTab}
      aria-pressed={active}
      className={`px-4 py-2 mr-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 transition ${
        active
          ? "bg-primary-600 text-white"
          : "bg-transparent text-[#ADB7BE] hover:bg-white/5"
      }`}
    >
      {children}
    </button>
  );
}
