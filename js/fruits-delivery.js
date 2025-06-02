/*
 **  Initialization
 */

// Retrieve data from localStorage
const delivery_pass = JSON.parse(localStorage.getItem("delivery_pass"));

/*
 **  End of initialization
 */

/*
 **  Functions
 */

// Purchase delivery pass
const order_pass = (index) => {
  const item = delivery_pass[index];
  item.quantity = 1;

  const has_pass_index = cart_items.findIndex((cart) => cart.type === "pass");
  if (has_pass_index > -1) {
    cart_items.splice(has_pass_index);
  }
  cart_items.push(item);

  // Update Cart (Functions are inside navigation-bar.js)
  update_total_amount();
  update_count();
  update_cart_list();

  // Store item into the cart.
  localStorage.setItem("cart_items", JSON.stringify(cart_items));
};

/*
 **  End of functions
 */

/*
 **  Code to run when access this page.
 */

/*
 **  End of code to run when access this page.
 */
