import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/main.css";

import { setupActiveBtn } from "./ActiveBtn.js";
import { setupPlans } from "./setupPlans";

// active btn
const btnsPlans = document.querySelectorAll("#btns-plans button");
const dataPrice = document.querySelectorAll(".data-price");
setupActiveBtn(btnsPlans);

// setupPalns
setupPlans(btnsPlans, dataPrice);
