// import React from "react";
// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import logo from "@/assets/Mlogo.png"; // Updated logo path

// const Footer = () => {
//   return (
//     <footer>
//       <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
//         <div className="w-4/5">
//           <Image className="w-28 md:w-32" src={logo} alt="logo" />
//           <p className="mt-4 text-l">
//             Entuecode tech is a cutting-edge e-commerce platform specializing in
//             high-quality electronic devices. With a user-friendly interface and
//             secure payment options, Entuecode tech offers a seamless shopping
//             experience with a wide range of tech products for customers seeking
//             the latest in technology. From the latest smartphones, laptops, and
//             gaming consoles to accessories and smart home gadgets, We provide a
//             diverse range of high-quality products. Our platform ensures
//             competitive pricing, secure transactions, and fast delivery, making
//             it the go-to destination for tech enthusiasts and everyday
//             consumers. At Entuecode tech, innovation meets convenience, bringing
//             the best in electronics right to your fingertips.
//           </p>
//         </div>

//         <div className="w-1/2 flex items-center justify-start md:justify-center">
//           <div>
//             <h2 className="font-medium text-gray-900 mb-5">Company</h2>
//             <ul className="text-sm space-y-2">
//               <li>
//                 <a className="hover:underline transition" href="#">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:underline transition" href="#">
//                   About us
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:underline transition" href="#">
//                   Contact us
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:underline transition" href="#">
//                   Privacy policy
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="w-1/2 flex items-start justify-start md:justify-center">
//           <div>
//             <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
//             <div className="text-sm space-y-2">
//               <p>+(250) 788 402 197</p>
//               <p>support@entuecode.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <p className="py-4 text-center text-xs md:text-sm">
//         Copyright 2025 © Eduard NIYOMUGABO. All Right Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Image from "next/image";
import logo from "@/assets/Mlogo.png"; // Updated logo path

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get dynamic year

  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        {/* Company Info */}
        <div className="w-full md:w-3/5">
          <Image className="w-32 md:w-36" src={logo} alt="logo" />
          <p className="mt-0 text-sm leading-relaxed">
            Entuecode tech is a cutting-edge e-commerce platform specializing in
            high-quality electronic devices. With a user-friendly interface and
            secure payment options, Entuecode tech offers a seamless shopping
            experience with a wide range of tech products for customers seeking
            the latest in technology. From the latest smartphones, laptops, and
            gaming consoles to accessories and smart home gadgets, We provide a
            diverse range of high-quality products. Our platform ensures
            competitive pricing, secure transactions, and fast delivery, making
            it the go-to destination for tech enthusiasts and everyday
            consumers. At Entuecode tech, innovation meets convenience, bringing
            the best in electronics right to your fingertips.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/5 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-4">Company</h2>
            <ul className="py-4 text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/5 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-4">Get in Touch</h2>
            <div className="py-4 text-sm space-y-2">
              <p>+(250) 788 402 197</p>
              <p>support@entuecode.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright {currentYear} © Eduard NIYOMUGABO. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
