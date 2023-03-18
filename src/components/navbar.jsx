// import { useState } from "react";
import React from "react";

export const Navbar = () => {
  let Links = [
    { name: "How it works", link: "/how" },
    { name: "Meals", link: "/meals" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Pricing", link: "/pricing" },
    { name: "Try for free", link: "/try" },
  ];
  return (
    <nav className="w-full h-36 bg-red-50 fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-10 px-20">
        <a
          href="/"
          alt="omnifood"
          className="active:border-orange-300  active:border-8 active:border-solid"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/omnifood-logo.png"}
            alt="omnifood logo"
            className="h-9 "
          />
        </a>
        <ul className="md:flex md:items-center">
          {Links.map((link) => (
            <li key={link.name} className=" mt-4 md:gap-12 text-xl  ">
              <a
                href={link.link}
                className={
                  link.name !== "Try for free"
                    ? "transition-all hover:text-orange-400 active:border-orange-300 active:border-8 active:border-solid text-gray-700 text-3xl font-bold py-4 px-10 rounded-xl"
                    : "bg-orange-700 font-semibold text-gray-50 py-5 px-10 rounded-2xl  text-3xl hover:bg-orange-600 active:border-orange-300  active:border-8 active:border-solid ml-2 transition-all"
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
