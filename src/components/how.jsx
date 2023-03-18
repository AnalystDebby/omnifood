import { Navbar } from "./navbar";

export const How = () => {
  return (
    <section>
      <Navbar />
      <div className="p-40">
        <h2>How it works</h2>
        <p>Your daily dose of health in 3 simple steps</p>
      </div>

      <div>
        <div>
          <p>01</p>
          <p>Tell us what you like (and what not)</p>
          <p>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div>
          <img src={``} alt="" />
        </div>
      </div>
      <div>
        <div>
          <p>02</p>
          <p>Approve your weekly meal plan</p>
          <p>
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
        <div>
          <img src={``} alt="" />
        </div>
      </div>
      <div>
        <div>
          <p>03</p>
          <p>Receive meals at convenient time</p>
          <p>
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div>
          <img src={``} alt="" />
        </div>
      </div>
    </section>
  );
};
