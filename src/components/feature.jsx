// import { motion } from "framer-motion";

export const Feature = () => {
  return (
    <div className="w-full pt-9">
      <h3 className="text-3xl font-bold text-center px-14 uppercase">
        as featured in
      </h3>
      <div className="flex justify-evenly my-12 h-14 opacity-50 brightness-0">
        <img
          src={process.env.PUBLIC_URL + "/img/logos/business-insider.png"}
          alt="logo-1"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/logos/forbes.png"}
          alt="logo-2"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/logos/techcrunch.png"}
          alt="logo-3"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/logos/the-new-york-times.png"}
          alt="logo-4"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/logos/usa-today.png"}
          alt="logo-5"
        />
      </div>
    </div>
  );
};
