// import React from "react";
// import { assets } from "@/assets/assets";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10">
//       <div className="flex items-center gap-4">
//         <Image className="hidden md:block" src={assets.logo} alt="logo" />
//         <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
//         <p className="py-4 text-center text-xs md:text-sm text-gray-500">
//           Copyright 2025 © Eduard NIYOMUGABO. All Right Reserved.
//         </p>
//       </div>
//       <div className="flex items-center gap-3">
//         <a href="#">
//           <Image src={assets.facebook_icon} alt="facebook_icon" />
//         </a>
//         <a href="#">
//           <Image src={assets.twitter_icon} alt="twitter_icon" />
//         </a>
//         <a href="#">
//           <Image src={assets.instagram_icon} alt="instagram_icon" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import React from "react";
// import Image from "next/image";
// import logo from "@/assets/Mlogo.png"; // Updated logo path
// import { assets } from "@/assets/assets";

// const Footer = () => {
//   const currentYear = new Date().getFullYear(); // Get dynamic year

//   return (
//     <footer className="w-full px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
//       {/* Left Section */}
//       <div className="flex items-center gap-4">
//         <Image className="hidden md:block w-24 h-auto" src={logo} alt="logo" />
//         <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
//         <p className="text-center text-xs md:text-sm">
//           Copyright {currentYear} © Eduard NIYOMUGABO. All Rights Reserved.
//         </p>
//       </div>

//       {/* Social Icons */}
//       <div className="flex items-center gap-4 mt-4 md:mt-0">
//         <a href="#" aria-label="Facebook">
//           <Image
//             src={assets.facebook_icon}
//             alt="Facebook"
//             width={24}
//             height={24}
//           />
//         </a>
//         <a href="#" aria-label="Twitter">
//           <Image
//             src={assets.twitter_icon}
//             alt="Twitter"
//             width={24}
//             height={24}
//           />
//         </a>
//         <a href="#" aria-label="Instagram">
//           <Image
//             src={assets.instagram_icon}
//             alt="Instagram"
//             width={24}
//             height={24}
//           />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Image from "next/image";
import logo from "@/assets/Mlogo.png"; // Updated logo path
import { assets } from "@/assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get dynamic year

  return (
    <footer className="w-full px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <Image
          className="hidden md:block w-50 max-w-[150px] h-auto"
          src={logo}
          alt="logo"
        />
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="text-center text-xs md:text-sm">
          Copyright {currentYear} © Eduard NIYOMUGABO. All Rights Reserved.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <a href="#" aria-label="Facebook">
          <Image
            src={assets.facebook_icon}
            alt="Facebook"
            width={24}
            height={24}
          />
        </a>
        <a href="#" aria-label="Twitter">
          <Image
            src={assets.twitter_icon}
            alt="Twitter"
            width={24}
            height={24}
          />
        </a>
        <a href="#" aria-label="Instagram">
          <Image
            src={assets.instagram_icon}
            alt="Instagram"
            width={24}
            height={24}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
