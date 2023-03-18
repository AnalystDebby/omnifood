import React from "react";
import { Navbar } from "./navbar";

export const Meals = () => {
  return (
    <div className="bg-red-50 w-full h-screen">
      <Navbar />
      <div className="mt-24 pt-32 pb-24 px-24 ">
        <h1>MEALS</h1>
        <h2>Omnifood AI chooses from 5,000+ recipes</h2>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/meals/meal-1.jpg"}
            alt="omnifood logo"
            className="h-9 "
          />
          <div>
            <span>VEGETARIAN</span>
            <p>Japanese Gyozas</p>
            <div> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 650 calories
// NutriScore ® 74
// 4.9 rating (537)
// Avocado Salad
// VEGAN
// PALEO
// Avocado Salad

// 400 calories
// NutriScore ® 92
// 4.8 rating (441)
// Works with any diet:
// Vegetarian
// Vegan
// Pescatarian
// Gluten-free
// Lactose-free
// Keto
// Paleo
// Low FODMAP
// Kid-friendly
// See all recipes →
