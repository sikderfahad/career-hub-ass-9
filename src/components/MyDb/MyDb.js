import { ToastMsg } from "../Toast/ToastMsg";

const getJobCart = () => {
  let jobCart = {};
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    jobCart = JSON.parse(storedCart);
  }
  return jobCart;
};

const addToDb = (id) => {
  let jobCart = getJobCart();

  const quantity = jobCart[id];
  if (!quantity) {
    jobCart[id] = 1;
  } else {
    ToastMsg();
  }
  localStorage.setItem("job-cart", JSON.stringify(jobCart));
};

export { getJobCart, addToDb };
