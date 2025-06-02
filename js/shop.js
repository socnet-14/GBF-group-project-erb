/*
 **  Initialization
 */

// JQuery
const element_list = document.querySelector("#e_list");
const fruit_list_from = document.querySelector("#fruit_list_from");
const fruit_list_total = document.querySelector("#fruit_list_total");
const fruit_list_number = document.querySelector("#fruit_list_number");
const search_form = document.querySelector("#search-form");
const value_1 = document.querySelector("#value_1");
const value_2 = document.querySelector("#value_2");
const popular_categories_1 = document.querySelector("#popular_categories_1");
const popular_categories_2 = document.querySelector("#popular_categories_2");
const popular_categories_3 = document.querySelector("#popular_categories_3");
const popular_categories_4 = document.querySelector("#popular_categories_4");
const pagination_list = document.querySelector("#pagination_list");
const mini_fruit_list = document.querySelector("#mini_fruit_list");
const fruit_category_1 = document.querySelector("#fruit_category_1");
const fruit_category_2 = document.querySelector("#fruit_category_2");
const fruit_category_3 = document.querySelector("#fruit_category_3");
const fruit_category_4 = document.querySelector("#fruit_category_4");
const popular_categories_1_title = document.querySelector(
  "#popular_categories_1_title"
);
const popular_categories_2_title = document.querySelector(
  "#popular_categories_2_title"
);
const popular_categories_3_title = document.querySelector(
  "#popular_categories_3_title"
);
const popular_categories_4_title = document.querySelector(
  "#popular_categories_4_title"
);

// Variables initialation
let element_list_inner = "";
let page_number = 1;
const items_to_displayed = 9;
let sorted_order = "1";
const fruit_category_type_1 = popular_categories_1_title.innerText;
const fruit_category_type_2 = popular_categories_2_title.innerText;
const fruit_category_type_3 = popular_categories_3_title.innerText;
const fruit_category_type_4 = popular_categories_4_title.innerText;

/*
 **   End of initilization
 */

/*
 **  Functions
 */

// Function to handle fruit list next page button
const next_page = () => {
  page_number += 1;
  filtered_list();
};

// Function to handle fruit list previous page button
const previous_page = () => {
  if (page_number > 1) page_number -= 1;
  filtered_list();
};

// Function to handle fruit list page number
const to_page_number = (value) => {
  page_number = parseInt(value);
  filtered_list();
};

// Function to handle fruit list ordering.
const selection = (value) => {
  sorted_order = value;
  filtered_list();
};

// Function to inject fruit list to HTML
const list_fruit = (fruit_item_list) => {
  element_list_inner = ``;

  // Sorting selection box
  switch (sorted_order) {
    case "2":
      fruit_item_list.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
      });
      break;
    case "3":
      fruit_item_list.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
      });
      break;
    default:
      console.log("No sorting is required");
  }

  // To prevent index error after filtering.
  let number_of_items = items_to_displayed * page_number + 1;
  if (page_number * items_to_displayed > fruit_item_list.length) {
    number_of_items =
      (page_number - 1) * items_to_displayed +
      (fruit_item_list.length % items_to_displayed) +
      1;
  }

  // Inject fruit list
  for (
    let i = (page_number - 1) * items_to_displayed + 1;
    i < number_of_items;
    i++
  ) {
    element_list_inner += `
    <div class="col-sm-6 col-md-4">
        <article class="product">
            <div class="product-figure">
                <img src="${
                  fruit_item_list[i - 1].image_1
                }" alt="" width="270" height="280"/>
                <div class="product-button">
                    <p class="button button-md button-white button-ujarak" href="single-product.html" id="addtocart-${
                      fruit_item_list[i - 1].id
                    }">Add to Cart</p>
                </div>
            </div>
            <h5 class="product-title">
                <a href="single-product.html" id="${
                  fruit_item_list[i - 1].id
                }">${fruit_item_list[i - 1].name}</a>
            </h5>
            <div class="product-price-wrap">
                <div class="product-price">$${
                  fruit_item_list[i - 1].price
                }</div>
            </div>
        </article>
    </div>`;
  }

  // Number of fruit in this page and total. (Need update)
  fruit_list_total.innerText = fruit_item_list.length;
  fruit_list_number.innerText = number_of_items - 1;
  fruit_list_from.innerText = (page_number - 1) * items_to_displayed + 1;

  // Update list
  element_list.innerHTML = element_list_inner;

  // Add event listener to fruit list
  for (
    let i = (page_number - 1) * items_to_displayed + 1;
    i < number_of_items;
    i++
  ) {
    const link = document.querySelector(`#${fruit_item_list[i - 1].id}`);
    const addtocart_link = document.querySelector(
      `#addtocart-${fruit_item_list[i - 1].id}`
    );
    const index = fruits.findIndex(
      (item) => fruit_item_list[i - 1].id === item.id
    );
    link.addEventListener("click", () => {
      localStorage.setItem("fruitIndex", index);
    });

    // console.log(fruit_item_list[i - 1].id, " ", fruit_item_list[i - 1].name);
    addtocart_link.addEventListener("click", () => {
      const quantity = 1;
      // Update the variable name.
      const item = fruit_item_list[i - 1];
      if (cart_items.length > 0) {
        let found = false;
        cart_items.map((cart_item) => {
          if (cart_item.id === item.id) {
            cart_item.quantity = parseInt(cart_item.quantity) + quantity;
            found = true;
          }
        });
        if (found == false) {
          item.quantity = parseInt(quantity);
          cart_items.push(item);
        }
      } else {
        item.quantity = parseInt(quantity);
        cart_items = [item];
      }

      // Update Cart (Functions are inside navigation-bar.js)
      update_total_amount();
      update_count();
      update_cart_list();

      // Store item into the cart.
      localStorage.setItem("cart_items", JSON.stringify(cart_items));
    });
  }

  // Function for generating pagination buttons.
  const number_of_pages = Math.ceil(
    fruit_item_list.length / items_to_displayed
  );

  let pagination_content = `
    <li class="page-item page-item-control">
      <div class="page-link" href="#" aria-label="Previous" onclick="previous_page()">
        <span class="icon" aria-hidden="true"></span>
      </div>
    </li>
  `;
  for (let i = 1; i < number_of_pages + 1; i++) {
    pagination_content += `<li class="page-item"><span class="page-link" onclick="to_page_number(${i})">${i}</span></li>`;
  }
  pagination_content += `
    <li class="page-item page-item-control">
      <div class="page-link" href="#" aria-label="Next" onclick="next_page()">
        <span class="icon" aria-hidden="true"></span>
      </div>
    </li>
    `;
  pagination_list.innerHTML = pagination_content;
};

// Function for filtering check boxes
const filtered_list = () => {
  // console.log(value_1.value + " - " + value_2.value);
  let filtered_fruit = fruits.filter(
    (item) => item.price > value_1.value && item.price < value_2.value
  );
  if (!popular_categories_1.checked) {
    filtered_fruit = filtered_fruit.filter(
      (item) => item.type.toLowerCase() != fruit_category_type_1.toLowerCase()
    );
  }
  if (!popular_categories_2.checked) {
    filtered_fruit = filtered_fruit.filter(
      (item) => item.type.toLowerCase() != fruit_category_type_2.toLowerCase()
    );
  }
  if (!popular_categories_3.checked) {
    filtered_fruit = filtered_fruit.filter(
      (item) => item.type.toLowerCase() != fruit_category_type_3.toLowerCase()
    );
  }
  if (!popular_categories_4.checked) {
    filtered_fruit = filtered_fruit.filter(
      (item) => item.type.toLowerCase() != fruit_category_type_4.toLowerCase()
    );
  }

  // Return page number to 1 when the next button is clicked in the last page of list.
  if (page_number > Math.ceil(filtered_fruit.length / items_to_displayed)) {
    page_number = 1;
  }

  list_fruit(filtered_fruit);
};

// Function for the search box.
const search_item_form = () => {
  const search_text = search_form.value;
  localStorage.setItem("search_value", search_text);
};

/*
 **  End of functions
 */

/*
 **  Code to run when access this page.
 */

// Inject the list with full fruit list when open this web page.
list_fruit(fruits);

// Inject the mini fruit list to popular product section.
// TODO: Filter list based on 4 random numbers
let four_numbers = [];
let filtered_mini_fruit_list = [];
// TODO: Updated on 5/2/2025
while (four_numbers.length < 5) {
  const random_number = Math.floor(Math.random() * fruits.length);
  if (four_numbers.includes(random_number)) {
    continue;
  } else {
    four_numbers.push(random_number);
    filtered_mini_fruit_list.push(fruits[random_number]);
  }
}

mini_fruit_list.innerHTML = ``;
for (let i = 0; i < 4; i++) {
  mini_fruit_list.innerHTML += `
    <div class="list-popular-product-item">
        <!-- Product Minimal-->
        <article class="product-minimal unit unit-spacing-md">
        <div class="unit-left"><a class="product-minimal-figure" href="single-product.html" id="mini-img-${filtered_mini_fruit_list[i].id}"><img src=${filtered_mini_fruit_list[i].image_7} alt="" width="108" height="100"/></a></div>
        <div class="unit-body">
            <h6 class="product-minimal-title" id="mini-${filtered_mini_fruit_list[i].id}"><a href="single-product.html">${filtered_mini_fruit_list[i].name}</a></h6>
            <div class="product-minimal-price">$${filtered_mini_fruit_list[i].price}</div>
        </div>
        </article>
    </div>
    `;
}

// Add click event listener to the popular product list
for (let i = 0; i < 4; i++) {
  document
    .querySelector(`#mini-${filtered_mini_fruit_list[i].id}`)
    .addEventListener("click", () => {
      const updated_index = fruits.findIndex(
        (fruit) => fruit.id === filtered_mini_fruit_list[i].id
      );
      localStorage.setItem("fruitIndex", updated_index);
    });
  document
    .querySelector(`#mini-img-${filtered_mini_fruit_list[i].id}`)
    .addEventListener("click", () => {
      const updated_index = fruits.findIndex(
        (fruit) => fruit.id === filtered_mini_fruit_list[i].id
      );
      localStorage.setItem("fruitIndex", updated_index);
    });
}

// Update number of popular categories in each categories.
fruit_category_1.innerText = fruits.filter(
  (fruit) => fruit.type.toLowerCase() === fruit_category_type_1.toLowerCase()
).length;
fruit_category_2.innerText = fruits.filter(
  (fruit) => fruit.type.toLowerCase() === fruit_category_type_2.toLowerCase()
).length;
fruit_category_3.innerText = fruits.filter(
  (fruit) => fruit.type.toLowerCase() === fruit_category_type_3.toLowerCase()
).length;
fruit_category_4.innerText = fruits.filter(
  (fruit) => fruit.type.toLowerCase() === fruit_category_type_4.toLowerCase()
).length;

/*
 **  End of code to run when access this page.
 */
