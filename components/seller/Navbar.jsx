// import React from "react";
// import { assets } from "../../assets/assets";
// import Image from "next/image";
// import { useAppContext } from "@/context/AppContext";

// const Navbar = () => {
//   const { router } = useAppContext();

//   return (
//     <div className="flex items-center px-4 md:px-8 py-3 justify-between border-b">
//       <Image
//         onClick={() => router.push("/")}
//         className="w-28 lg:w-32 cursor-pointer"
//         src={assets.logo}
//         alt=""
//       />
//       <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import logo from "@/assets/Mlogo.png"; // Updated logo path

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <nav className="flex items-center px-4 md:px-8 py-3 justify-between border-b">
      <Image
        onClick={() => router.push("/")}
        className="w-32 lg:w-36 cursor-pointer"
        src={logo}
        alt="logo"
        priority
      />
      <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
