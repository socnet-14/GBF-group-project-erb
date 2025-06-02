/*
 **  Initialization
 */

// Retrieve data from localStorage
const fruits = JSON.parse(localStorage.getItem("fruits"));
let search_value = localStorage.getItem("search_value");
let cart_items = localStorage.getItem("cart_items");
if (!cart_items) {
  cart_items = [];
} else {
  cart_items = JSON.parse(localStorage.getItem("cart_items"));
}
let discount_percent = localStorage.getItem("discount_percent");
if (discount_percent) {
  discount_percent = parseInt(discount_percent);
} else {
  discount_percent = 0;
}

// JQuery
const cart_items_count = document.querySelector("#cart_items_count");
const cart_items_count_2 = document.querySelector("#cart_items_count_2");
const rd_navbar_search_form_input = document.querySelector(
  "#rd-navbar-search-form-input"
);
const cart_items_list_count = document.querySelector("#cart_items_list_count");
const cart_items_list_total_amount = document.querySelector(
  "#cart_items_list_total_amount"
);
const cart_items_list = document.querySelector("#cart_items_list");
const shopping_cart_list = document.querySelector("#shopping_cart_list");
const discount = document.querySelector("#discount");

/*
 **  End of Initialization
 */

/*
 **  Functions
 */

// Delete button
const callDeleteItem = (index) => {
  console.log(index);
  cart_items.splice(index, 1);

  update_total_amount();
  update_cart_list();
  update_count();

  if (shopping_cart_list) {
    update_shopping_cart();
  }

  localStorage.setItem("cart_items", JSON.stringify(cart_items));

  if (discount) {
    location.reload();
  }
};

// Update cart subtotal and total
const update_total_amount = () => {
  let total_amount = 0;
  if (cart_items.length > 0) {
    cart_items.forEach((cart_item) => {
      total_amount += parseInt(cart_item.price) * cart_item.quantity;
    });
  } else {
    cart_items_list_total_amount.innerText = 0;
  }
  cart_items_list_total_amount.innerText = `$${total_amount}`;
  cart_items_list_count.innerText = cart_items.length;
};

// Update item count of cart
const update_count = () => {
  if (cart_items.length == 0) {
    cart_items_count.innerText = "";
    cart_items_count_2.innerText = "";
  } else {
    cart_items_count.innerText = cart_items.length;
    cart_items_count.style.color = "red";
    cart_items_count_2.innerText = cart_items.length;
  }
};

// Update quantity and remove cart item when 0
const change_quantity = (e, value) => {
  if (value == 0) {
    // cart_items.splice(e, 1);
  } else {
    cart_items[e].quantity = value;
  }

  update_total_amount();
  update_cart_list();
  update_count();

  if (shopping_cart_list) {
    update_shopping_cart();
  }

  localStorage.setItem("cart_items", JSON.stringify(cart_items));
};

// Update cart list
const update_cart_list = () => {
  if (cart_items.length == 0) {
    cart_items_list.innerHTML = `
      <div>
          NO ITEMS
      </div>
      `;
  } else {
    cart_items_list.innerHTML = ``;
    cart_items.forEach((cart_item, index) => {
      cart_items_list.innerHTML += `
          <div class="cart-inline-item">
              <div class="unit align-items-center">
                  <div class="unit-left">
                      <a class="cart-inline-figure" href="single-product.html" id="cart-item-img-${
                        cart_item.id
                      }">
                          <img  src=${cart_item.image_7} alt=${
        cart_item.image_7
      } width="108" height="100"/>
                      </a>
                  </div>
                  <div class="unit-body">
                      <h6 class="cart-inline-name"><a href="single-product.html" id="cart-item-${
                        cart_item.id
                      }">${cart_item.name}</a></h6>
                      <div>
                          <div class="group-xs group-inline-middle">
                              <div class="table-cart-stepper">
                                  <input class="form-input" type="number" data-zeros="true" value=${
                                    cart_item.quantity
                                  } min="0" max="1000" oninput="change_quantity(${index}, this.value)">
                              </div>
                              <h6 class="cart-inline-title" > $${
                                cart_item.quantity * cart_item.price
                              }</h6>
                              <button class="delete-item" id="deleteItem_${index}"><img src="./svg/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1).svg" alt=""></button>
                                

                      </div>
                  </div>
              </div>
          </div>
          `;
    });

    // Delete item
    let item_index = 0;
    for (let i = 0; i < cart_items.length; i++) {
      const deleteItem = document.getElementById(`deleteItem_${i}`);
      console.log(deleteItem);
      deleteItem.addEventListener("click", () => {
        const index = i;
        callDeleteItem(index);
      });
    }

    // Add click event listener to the mini fruit list
    cart_items.forEach((cart_item) => {
      document
        .querySelector(`#cart-item-img-${cart_item.id}`)
        .addEventListener("click", () => {
          const index = fruits.findIndex((item) => item.id === cart_item.id);
          localStorage.setItem("fruitIndex", index);
        });
      document
        .querySelector(`#cart-item-${cart_item.id}`)
        .addEventListener("click", () => {
          const index = fruits.findIndex((item) => item.id === cart_item.id);
          localStorage.setItem("fruitIndex", index);
        });
    });
  }
};

// Save search value into localStorage.
const search_item = () => {
  localStorage.setItem("search_value", rd_navbar_search_form_input.value);
};

/*
 **  End of functions
 */

/*
 **  Code to run when access this page.
 */

// Update cart in the navigation bar.
update_count();
update_total_amount();
update_cart_list();

// Update Get in Touch information
document.querySelector("#contact_us_new").innerHTML = `
  <div class="rd-navbar-project-modern-header">
    <h4 class="rd-navbar-project-modern-title">Get in Touch</h4>
    <div class="rd-navbar-project-hamburger" data-multitoggle=".rd-navbar-main" data-multitoggle-blur=".rd-navbar-wrap" data-multitoggle-isolate>
      <div class="project-close"><span></span><span></span></div>
    </div>
  </div>
  <div class="rd-navbar-project-content rd-navbar-modern-project-content">
    <div>
      <p>We are always ready to provide you with high-quality fruits for your home or office. Contact us to find out how we can help you.</p>
      <div class="heading-6 subtitle">Facebook</div>
      <div class="row row-10 gutters-10">
        <div class="col-12"><img src="images/home-sidebar-394x255.jpg" alt="" width="394" height="255"/>
        </div>
      </div>
      <ul class="rd-navbar-modern-contacts">
        <li>
          <div class="unit unit-spacing-sm">
            <div class="unit-left"><span class="icon fa fa-phone"></span></div>
            <div class="unit-body"><span class="link-phone" href="tel:#">+852 3442-7423</span></div>
          </div>
        </li>
        <li>
          <div class="unit unit-spacing-sm">
            <div class="unit-left"><span class="icon fa fa-location-arrow"></span></div>
            <div class="unit-body"><a class="link-location" href="/contact-us.html">UG301, UG3/F, ChinaChem Golden Plaza, 16 Science Museum Road, Tsim Sha Tsui East, Kowloon, Hong Kong</a></div>
          </div>
        </li>
        <li>
          <div class="unit unit-spacing-sm">
            <div class="unit-left"><span class="icon fa fa-envelope"></span></div>
            <div class="unit-body"><a class="link-email" href="mailto:#">mail@greaterbayfruits.com</a></div>
          </div>
        </li>
      </ul>
      <ul class="list-inline rd-navbar-modern-list-social">
        <li><a class="icon fa fa-facebook" href="https://www.facebook.com/login" target="_blank"></a></li>
        <li><a class="icon fa fa-twitter" href="https://x.com/?mx=2" target="_blank"></a></li>
        <li><a class="icon fa fa-google-plus" href="https://www.google.com.hk/" target="_blank"></a></li>
        <li><a class="icon fa fa-instagram" href="https://www.instagram.com/" target="_blank"></a></li>
        <li><a class="icon fa fa-pinterest" href="https://www.pinterest.com/" target="_blank"></a></li>
      </ul>
    </div>
  </div>
`;

/*
 **  end of cart item update
 */
