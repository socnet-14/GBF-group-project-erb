/*
 **  The cart HTML page does not include navigation-bar.js
 **  Function for cart and shopping cart
 */

/*
 **  Initialization
 */

// JQuery
const shopping_cart_total = document.querySelector("#shopping_cart_total");
const coupon_code = document.querySelector("#coupon-code");
const modal = document.getElementById("checkout-modal2");
const danger = document.getElementById("danger");

// Variables initialation
let pass_code = localStorage.getItem("pass_code");

/*
 **  End of initialization
 */

/*
 **  Functions
 */

// Get coupon code and store into the localStorage.
const apply_coupon = (event) => {
  pass_code = event.target.email.value;
  localStorage.setItem("pass_code", pass_code);

  // Pop-up modal/danger
  danger.style.display = "block";
  setTimeout(() => {
    danger.style.display = "none";
  }, 9000);
  modal.classList.add("open");
  danger.style.display = "none";
};

// Update shopping cart information in this page
const update_shopping_list = () => {
  let table_item = ``;
  if (cart_items.length > 0) {
    cart_items.forEach((cart_item, index) => {
      table_item += `
              <tr>
          <td><a class="table-cart-figure" href="single-product.html" id="cart-page-item-img-${
            cart_item.id
          }"><img src=${
        cart_item.image_8
      } alt="" width="146" height="132"/></a><a class="table-cart-link" href="single-product.html" id="cart-page-item-${
        cart_item.id
      }">${cart_item.name}</a></td>
          <td>$${cart_item.price}</td>
          <td>
          <div class="table-cart-stepper">
              <input class="form-input" type="number" data-zeros="true" value=${
                cart_item.quantity
              } min="0" max="1000" oninput="shopping_list_change_quantity(${index}, this.value)">
          </div>
          </td>
          <td>$${cart_item.price * cart_item.quantity}</td>
      </tr>
          `;
    });
  } else {
    table_item = `
    <tr>
      <td>
        <div class="group-sm group-justify">
          <div>
            <div class="group-sm group-middle">
              <p class="box-comment-author danger
            ">
              <a href="/shop.html">Browse the products.</a>
              </p>
              <div class="box-rating">
              <!-- Stars -->
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
    `;
  }
  return table_item;
};

// Update quantity and remove cart item when 0
const shopping_list_change_quantity = (e, value) => {
  if (value == 0) {
    cart_items.splice(e, 1);
  } else {
    cart_items[e].quantity = value;
  }

  update_total_amount();
  update_cart_list();
  update_count();
  update_shopping_cart();

  localStorage.setItem("cart_items", JSON.stringify(cart_items));
};

// Clear shopping cart list when checkout button is clicked.
const checkout = () => {
  localStorage.setItem("cart_items", JSON.stringify(cart_items));
};

// Update cart list in this page.
const update_shopping_cart = () => {
  shopping_cart_list.innerHTML = update_shopping_list();

  // Add click event listener to the mini fruit list
  cart_items.forEach((cart_item) => {
    document
      .querySelector(`#cart-page-item-img-${cart_item.id}`)
      .addEventListener("click", () => {
        const index = fruits.findIndex((item) => item.id === cart_item.id);
        localStorage.setItem("fruitIndex", index);
      });
    document
      .querySelector(`#cart-page-item-${cart_item.id}`)
      .addEventListener("click", () => {
        const index = fruits.findIndex((item) => item.id === cart_item.id);
        localStorage.setItem("fruitIndex", index);
      });
  });

  // Inject into HTML
  const table_item = update_shopping_list();
  shopping_cart_total.innerHTML = cart_items_list_total_amount.innerHTML;
  shopping_cart_list.innerHTML = table_item;
};

/*
 **  End of functions
 */

/*
 **  Code to run when access this page.
 */

// Show passcode if it is exist in the localStorage.
if (pass_code) {
  coupon_code.value = pass_code;
}
update_shopping_cart();

/*
 **  end of cart item update
 */
