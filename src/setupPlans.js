const state = {
  free: {
    monthly: "0",
    yearly: "0",
  },
  pro: {
    monthly: "$79",
    yearly: "$948",
  },
};

export function setupPlans(btnsPlans, dataPrice) {
  btnsPlans.forEach((el) => {
    el.addEventListener("click", (event) => {
      let plansId = event.target.id;
      dataPrice.forEach((elementDataPrice) => {
        let elementPriceId = elementDataPrice.id;
        elementDataPrice.textContent = state[elementPriceId][plansId];
      });
    });
  });
}
