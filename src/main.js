// Import global CSS
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/global.css";

// Dynamically load page-specific CSS
const currentPage = document.body.dataset.page;

if (currentPage === "home") {
  import("./css/home.css");
}

import { setupActiveBtn } from "./ActiveBtn.js";
import { setupPlans } from "./setupPlans";

// active btn
const btnsPlans = document.querySelectorAll("#btns-plans button");
const dataPrice = document.querySelectorAll(".data-price");
setupActiveBtn(btnsPlans);

// setupPalns
setupPlans(btnsPlans, dataPrice);
