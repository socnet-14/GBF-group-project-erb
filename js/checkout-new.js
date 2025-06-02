/*
 **  Initialization
 */

// JQuery
const shopping_cart_total_1 = document.querySelector("#shopping_cart_total_1");
const shopping_cart_total_2 = document.querySelector("#shopping_cart_total_2");
const checkout_district = document.querySelector("#checkout_district");
const delivery_charge = document.querySelector("#delivery_charge");

const modal = document.getElementById("checkout-modal2");
const danger = document.getElementById("danger");

// Form-1 data
const checkout_first_name_1 = document.querySelector("#checkout-first-name-1");
const label_checkout_first_name_1 = document.querySelector(
  'label[for="checkout-first-name-1"]'
);
const checkout_last_name_1 = document.querySelector("#checkout-last-name-1");
const label_checkout_last_name_1 = document.querySelector(
  'label[for="checkout-last-name-1"]'
);
const checkout_company_1 = document.querySelector("#checkout-company-1");
const label_checkout_company_1 = document.querySelector(
  'label[for="checkout-company-1"]'
);
const checkout_address_1 = document.querySelector("#checkout-address-1");
const label_checkout_address_1 = document.querySelector(
  'label[for="checkout-address-1"]'
);
const checkout_city_1 = document.querySelector("#checkout-city-1");
const label_checkout_city_1 = document.querySelector(
  'label[for="checkout-city-1"]'
);
const checkout_country_1 = document.querySelector("#checkout-country-1");
const label_checkout_country_1 = document.querySelector(
  'label[for="checkout-country-1"]'
);
const checkout_email_1 = document.querySelector("#checkout-email-1");
const label_checkout_email_1 = document.querySelector(
  'label[for="checkout-email-1"]'
);
const checkout_phone_1 = document.querySelector("#checkout-phone-1");
const label_checkout_phone_1 = document.querySelector(
  'label[for="checkout-phone-1"]'
);

// Form-2 data
const checkout_first_name_2 = document.querySelector("#checkout-first-name-2");
const label_checkout_first_name_2 = document.querySelector(
  'label[for="checkout-first-name-2"]'
);
const checkout_last_name_2 = document.querySelector("#checkout-last-name-2");
const label_checkout_last_name_2 = document.querySelector(
  'label[for="checkout-last-name-2"]'
);
const checkout_company_2 = document.querySelector("#checkout-company-2");
const label_checkout_company_2 = document.querySelector(
  'label[for="checkout-company-2"]'
);
const checkout_address_2 = document.querySelector("#checkout-address-2");
const label_checkout_address_2 = document.querySelector(
  'label[for="checkout-address-2"]'
);
const checkout_email_2 = document.querySelector("#checkout-email-2");
const label_checkout_email_2 = document.querySelector(
  'label[for="checkout-email-2"]'
);
const checkout_phone_2 = document.querySelector("#checkout-phone-2");
const label_checkout_phone_2 = document.querySelector(
  'label[for="checkout-phone-2"]'
);

// Get localStorage
const pass_code = localStorage.getItem("pass_code");

// Initialize variables
const districts = [
  {
    id: 0,
    city: "------------",
  },
  {
    id: 1,
    city: "Guangzhou",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
  {
    id: 2,
    city: "Shenzhen",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
  {
    id: 3,
    city: "Zhuhai",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
  {
    id: 4,
    city: "Foshan",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
  {
    id: 5,
    city: "Dongguan",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
  {
    id: 6,
    city: "Zhaoqing",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
  {
    id: 7,
    city: "Zhongshan",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
  {
    id: 8,
    city: "Jiangmen",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
  {
    id: 9,
    city: "Huizhou",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
  {
    id: 10,
    city: "Hong Kong",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
  {
    id: 11,
    city: "Macau",
    land_delivery_cost: 50,
    air_delivery_cost: 100,
  },
];

const has_pass = cart_items.findIndex((cart_item) => cart_item.type === "pass");
let total_amount = 0;
let district_index = 0;

/*
 **  End of Initialization
 */

/*
 **  Functions
 */

// Auto fill data
const autofill = () => {
  label_checkout_first_name_1.style.visibility = "hidden";
  checkout_first_name_1.value = "嘉昭";
  label_checkout_last_name_1.style.visibility = "hidden";
  checkout_last_name_1.value = "俾";
  label_checkout_company_1.style.visibility = "hidden";
  checkout_company_1.value = "宊驅正撫";
  label_checkout_address_1.style.visibility = "hidden";
  checkout_address_1.value = "今終添尾度2號";
  label_checkout_city_1.style.visibility = "hidden";
  checkout_city_1.value = "香港";
  label_checkout_country_1.style.visibility = "hidden";
  checkout_country_1.value = "鐘角";
  label_checkout_email_1.style.visibility = "hidden";
  checkout_email_1.value = "俾嘉昭@宊驅正撫.gov.hk";
  label_checkout_phone_1.style.visibility = "hidden";
  checkout_phone_1.value = "173-173-173";

  label_checkout_first_name_2.style.visibility = "hidden";
  checkout_first_name_2.value = "巾蘋";
  label_checkout_last_name_2.style.visibility = "hidden";
  checkout_last_name_2.value = "什";
  label_checkout_company_2.style.visibility = "hidden";
  checkout_company_2.value = "鐘角正撫";
  label_checkout_address_2.style.visibility = "hidden";
  checkout_address_2.value = "不經史篩乘駒越彈男佳8號";
  label_checkout_email_2.style.visibility = "hidden";
  checkout_email_2.value = "什巾蘋@鐘角正撫.gov.cn";
  label_checkout_phone_2.style.visibility = "hidden";
  checkout_phone_2.value = "173-173-173-173";
};

// Clear localStorage when checkout button is clicked.
const clear_localStorage = () => {
  localStorage.clear();
};

// Check all fields are inputted
function checkoutPopUp() {
  if (
    checkout_first_name_1.value === "" ||
    checkout_last_name_1.value === "" ||
    checkout_company_1.value === "" ||
    checkout_address_1.value === "" ||
    checkout_city_1.value === "" ||
    checkout_country_1.value === "" ||
    checkout_email_1.value === "" ||
    checkout_phone_1.value === "" ||
    checkout_district.value == "------------"
  ) {
    // Display modal/danger
    danger.style.display = "block";
    setTimeout(() => {
      danger.style.display = "none";
    }, 9000);
  } else {
    setTimeout(() => {
      localStorage.clear();
    }, 2000);
    console.log("Modal", modal);
    modal.classList.add("open");
    danger.style.display = "none";
  }
}

// Update shopping cart in this page
const update_shopping_list = () => {
  let table_item = ``;
  if (cart_items.length > 0) {
    cart_items.forEach((cart_item, index) => {
      table_item += `
                <tr>
            <td><a class="table-cart-figure" href="single-product.html" id="checkout-item-img-${
              cart_item.id
            }"><img src=${
        cart_item.image_8
      } alt="" width="146" height="132"/></a><a class="table-cart-link" href="single-product.html" id="checkout-item-${
        cart_item.id
      }">${cart_item.name}</a></td>
            <td>$${cart_item.price}</td>
            <td>
            <div class="table-cart-stepper">
                <input class="form-input" type="number" data-zeros="true" value=${
                  cart_item.quantity
                } min="0" max="1000" oninput="change_quantity(${index}, this.value)">
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

  // Inject to HTML
  const table_item = update_shopping_list();
  shopping_cart_list.innerHTML = table_item;
  localStorage.setItem("cart_items", JSON.stringify(cart_items));
};

// Clear shopping cart list when checkout button is clicked.
const checkout = () => {
  localStorage.setItem("cart_items", JSON.stringify(cart_items));
};

// Show delivery charge in different conditions
const update_delivery_charge = (destination) => {
  district_index = districts.findIndex(
    (district) => district.city === destination
  );

  // Store district index in the localStorage.
  localStorage.setItem("district_index", district_index);

  // Show tariff if passcode is not exists.
  if (district_index > 0 && has_pass < 0 && !pass_code) {
    delivery_charge.innerText =
      "$" + districts[district_index].air_delivery_cost;
  }

  // Count total amount and update in HTML
  total_amount = 0;
  if (cart_items.length > 0) {
    cart_items.forEach((cart_item) => {
      total_amount += parseInt(cart_item.price) * cart_item.quantity;
    });
  } else {
    cart_items_list_total_amount.innerText = 0;
  }
  cart_items_list_count.innerText = cart_items.length;

  update_shopping_cart();
  update_total_amount();

  // Total + Tariff + Discount = ?
  if (has_pass < 0 && !pass_code) {
    shopping_cart_total_2.innerHTML = `$${Math.ceil(
      (total_amount + districts[district_index].air_delivery_cost) *
        (1 - discount_percent / 100)
    )}`;
  } else {
    shopping_cart_total_2.innerHTML = `$${Math.ceil(
      total_amount * (1 - discount_percent / 100)
    )}`;
  }
};

// Update shopping list in this page
const update_shopping_cart = () => {
  shopping_cart_list.innerHTML = update_shopping_list();

  // Add click event listener to the mini fruit list
  cart_items.forEach((cart_item) => {
    document
      .querySelector(`#checkout-item-img-${cart_item.id}`)
      .addEventListener("click", () => {
        const index = fruits.findIndex((item) => item.id === cart_item.id);
        localStorage.setItem("fruitIndex", index);
      });
    document
      .querySelector(`#checkout-item-${cart_item.id}`)
      .addEventListener("click", () => {
        const index = fruits.findIndex((item) => item.id === cart_item.id);
        localStorage.setItem("fruitIndex", index);
      });
  });

  // shopping_cart_list.innerHTML = table_item;
  shopping_cart_total_1.innerText = cart_items_list_total_amount.innerHTML;
  shopping_cart_total_2.innerText = cart_items_list_total_amount.innerHTML;
};

/*
 **  End of functions
 */

/*
 **  Code to run when access this page.
 */

// Selection for the district field.
let delivery_district = ``;
districts.forEach((district) => {
  delivery_district += `<option value="${district.city}">${district.city}</option>`;
});
checkout_district.innerHTML = delivery_district;
discount.innerText = discount_percent;

update_shopping_cart();

// Calculate total amount
total_amount = 0;
if (cart_items.length > 0) {
  cart_items.forEach((cart_item) => {
    total_amount += parseInt(cart_item.price) * cart_item.quantity;
  });
} else {
  cart_items_list_total_amount.innerText = 0;
}

// Total + Tariff + Discount
if (has_pass < 0 && !pass_code && district_index > 0) {
  shopping_cart_total_2.innerHTML = `$${Math.ceil(
    (total_amount + districts[district_index].air_delivery_cost) *
      (1 - discount_percent / 100)
  )}`;
} else {
  shopping_cart_total_2.innerHTML = `$${Math.ceil(
    total_amount * (1 - discount_percent / 100)
  )}`;
}

/*
 **  end of cart item update
 */
