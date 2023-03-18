// import { VscArrowDown } from "react-icons/vsc";

import { Feature } from "./feature";
import { Navbar } from "./navbar";

export const Hero = () => {
  return (
    <>
      <div className="h-fit w-full bg-red-50">
        <Navbar />
        <main className="mt-24 pt-32 pb-24 px-24 ">
          <div className="grid grid-cols-2 gap-36 mx-auto max-w-520">
            <div>
              <h1 className="font-bold text-8xl text-gray-800 tracking-tighter leading-none mb-9">
                A healthy meal delivered to your door, every single day
              </h1>
              <p className="mt-20 text-gray-700 text-3xl tracking-wide leading-relaxed mb-20">
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
              </p>
              <div className="mt-24 text-4xl font-bold ">
                <button className="mr-16 bg-orange-600 hover:bg-orange-700 text-gray-200 py-6 px-12 rounded-xl">
                  Start eating well
                </button>
                <button className="py-6 px-12 rounded-xl bg-white tracking-wide hover:bg-orange-100 border-4 border-white">
                  Learn more
                </button>
              </div>
              <div className="mt-28 flex items-center gap-8">
                <div className="flex  ">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/customers/customer-1.jpg"
                    }
                    alt="customer-1"
                    className="-mr-6 h-20 w-20 border-spacing-1 border-4 border-orange-50 rounded-full"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/customers/customer-2.jpg"
                    }
                    alt="customer-2"
                    className="-mr-6 h-20 w-20 border-4 border-orange-50 rounded-full"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/customers/customer-3.jpg"
                    }
                    alt="customer-3"
                    className="-mr-6 h-20 w-20 border-4 border-orange-50 rounded-full"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/customers/customer-4.jpg"
                    }
                    alt="customer-4"
                    className="-mr-6 h-20 w-20 border-4 border-orange-50 rounded-full"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/customers/customer-5.jpg"
                    }
                    alt="customer-5"
                    className="-mr-6 h-20 w-20 border-4 border-orange-50 rounded-full"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL + "/img/customers/customer-6.jpg"
                    }
                    alt="customer-6"
                    className="-mr-6 h-20 w-20 border-4 border-orange-50 rounded-full last:mr-0"
                  />
                </div>
                <p className="font-bold text-3xl">
                  <span className="text-orange-600">250,000+</span> meals
                  delivered last year!
                </p>
              </div>
            </div>

            <img
              src={process.env.PUBLIC_URL + "/img/hero.png"}
              alt="hero"
              className="max-w-full"
            />
          </div>
        </main>
      </div>
      <Feature />;
    </>
  );
};
