/*
 **  Initialization
 */

// JQuery
const related_fruit_list = document.querySelector("#related_fruit_list");
const product_rating = document.querySelector("#product_rating");
const add_cart = document.querySelector("#add_cart");
const product_name = document.querySelector("#product_name");
const product_price = document.querySelector("#product_price");
const product_type = document.querySelector("#product_type");
const product_description = document.querySelector("#product_description");
const product_image_1 = document.querySelector("#product_image_1");
const product_image_2 = document.querySelector("#product_image_2");
const product_image_3 = document.querySelector("#product_image_3");
const product_image_4 = document.querySelector("#product_image_4");
const product_image_5 = document.querySelector("#product_image_5");
const product_image_6 = document.querySelector("#product_image_6");
const product_weight = document.querySelector("#product_weight");
const product_country_of_origin = document.querySelector(
  "#product_country_of_origin"
);
const product_container = document.querySelector("#product_container");
const product_quantity = document.querySelector("#product_quantity");
const fruit_comments = document.querySelector("#fruit_comments");
const number_of_comments = document.querySelector("#number_of_comments");
const rate_star_user = document.querySelector("#rate_star_user");
const rate_user = document.querySelector("#rate_user");

// Retrieve data from localStorage
const product = parseInt(localStorage.getItem("fruitIndex"));
let comments = JSON.parse(localStorage.getItem("fruit_comments"));
const pikachus = JSON.parse(localStorage.getItem("pikachus"));

/*
 **  End of initialization
 */

/*
 **  Functions
 */

const formatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

// Handle when user change rating
const change_rating = (value) => {
  // display stars
  // rate_star_user
  console.log(value);
  let stars = ``;
  if (value > 0) {
    for (let i = 1; i <= 5; i++) {
      if (value >= i) {
        stars += `<span class="icon fa fa-star"></span>`;
      } else {
        stars += `<span class="icon fa fa-star-o"></span>`;
      }
    }
  } else {
    for (let i = 0; i < 5; i++) {
      stars += `<span class="icon fa fa-star-o"></span>`;
    }
  }
  rate_star_user.innerHTML = stars;
};

// Handle subitted form
const submit_user_comment = (event) => {
  const submit_name = event.target.name.value;
  const submit_rate = event.target.rate.value;
  const submit_message = event.target.message.value;
  console.log(submit_name, submit_rate, submit_message);

  const next_id = comments.length + 1;
  const today = new Date();
  const random = Math.floor(Math.random() * pikachus.length);

  const comment = {
    id: next_id,
    fruit_id: fruits[product].id,
    date: formatter.format(today),
    name: submit_name,
    image: pikachus[random],
    // image: "./images/peka_pansage.png",
    rating: submit_rate,
    comment: submit_message,
  };

  comments.push(comment);
  localStorage.setItem("fruit_comments", JSON.stringify(comments));
  // Reload page.
  location.reload();
};

/*
 **  End of functions
 */

/*
 **  Code to run when access this page.
 */

// Inject fruit list into the related products section. (First 4 items in the fruit list with the same type).
const filtered_related_fruit_list = fruits.filter(
  (fruit) =>
    fruit.type === fruits[product].type && fruit.id != fruits[product].id
);

let items_to_loop = 4;
if (filtered_related_fruit_list.length < items_to_loop) {
  items_to_loop = filtered_related_fruit_list.length;
}

related_fruit_list.innerHTML = ``;
for (let i = 0; i < items_to_loop; i++) {
  related_fruit_list.innerHTML += `
    <div class="col-sm-6 col-md-5 col-lg-3">
      <!-- Product-->
      <article class="product">
        <div class="product-figure"><img src=${filtered_related_fruit_list[i].image_1} alt="" width="270" height="280"/>
          <div class="product-button"><p class="button button-md button-white button-ujarak" href="single-product.html" id="addtocart-${filtered_related_fruit_list[i].id}">Add to Cart</p></div>
        </div>
        <h5 class="product-title"><a href="single-product.html" id="${filtered_related_fruit_list[i].id}">${filtered_related_fruit_list[i].name}</a></h5>
        <div class="product-price-wrap">
          <div class="product-price">$${filtered_related_fruit_list[i].price}</div>
        </div>
      </article>
    </div>
  `;
}

// Add event listener to the related products fruit list
for (let i = 0; i < items_to_loop; i++) {
  const link = document.querySelector(`#${filtered_related_fruit_list[i].id}`);
  const addtocart_link = document.querySelector(
    `#addtocart-${filtered_related_fruit_list[i].id}`
  );
  link.addEventListener("click", () => {
    const updated_index = fruits.findIndex(
      (fruit) => fruit.id === filtered_related_fruit_list[i].id
    );
    localStorage.setItem("fruitIndex", updated_index);
  });
  addtocart_link.addEventListener("click", () => {
    const quantity = 1;
    // Update the variable name.
    const item = fruits[i];
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

// Update fruit details on the web page.
product_name.innerText = fruits[product].name;
product_description.innerText = fruits[product].description;
product_price.innerText = `$${fruits[product].price}`;
product_type.innerText = fruits[product].type;
product_weight.innerText = fruits[product].weight;
product_country_of_origin.innerText = fruits[product].country_of_origin;
product_container.innerText = fruits[product].container;
product_country_of_origin.innerText = fruits[product].country_of_origin;
product_image_1.src = fruits[product].image_1;
product_image_2.src = fruits[product].image_2;
product_image_3.src = fruits[product].image_3;
product_image_4.src = fruits[product].image_4;
product_image_5.src = fruits[product].image_5;
product_image_6.src = fruits[product].image_6;

console.log(comments);
console.log(fruits[product].id);

// Update rating
const filtered_comments = comments.filter(
  (comment) => comment.fruit_id === fruits[product].id
);
const fruit_rating = Math.ceil(
  filtered_comments.reduce(
    (total, comment) => total + parseInt(comment.rating),
    0
  ) / filtered_comments.length
);

console.log("Fruit Rating: ", fruit_rating);

let rating = ``;
for (let i = 1; i < 6; i++) {
  // if (fruits[product].rate >= i) {
  if (fruit_rating >= i) {
    rating += `<span class="icon fa fa-star"></span>`;
  } else {
    rating += `<span class="icon fa fa-star-o"></span>`;
  }
}
product_rating.innerHTML = rating;

// Add event listener to the "Add to Cart" button.
add_cart.addEventListener("click", (event) => {
  event.preventDefault();
  const quantity = product_quantity.value;
  const item = fruits[product];
  if (cart_items.length > 0) {
    let found = false;
    cart_items.map((cart_item) => {
      if (cart_item.id === item.id) {
        cart_item.quantity = parseInt(cart_item.quantity) + parseInt(quantity);
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

// Inject comments of the fruit
let fruit_comments_content = ``;
if (filtered_comments.length > 0) {
  filtered_comments.forEach((comment) => {
    fruit_comments_content += `
    <div class="box-comment">
      <div class="unit unit-spacing-md flex-column flex-md-row align-items-lg-center" >
        <div class="unit-left">
          <a class="box-comment-figure" href="#"><img src=${comment.image} alt="" width="119" height="119"/></a>
        </div>
        <div class="unit-body">
          <div class="group-sm group-justify">
            <div>
              <div class="group-sm group-middle">
                <p class="box-comment-author">${comment.name}
                </p>
                <div class="box-rating" id="rate_${comment.id}">
                <!-- Stars -->
                </div>
              </div>
            </div>
            <div class="box-comment-time">
              <time >${comment.date}</time>
            </div>
          </div>
          <p class="box-comment-text">${comment.comment}</p>
        </div>
      </div>
    </div>
  `;
  });
  fruit_comments.innerHTML = fruit_comments_content;

  console.log(comments);

  filtered_comments.forEach((comment) => {
    const comment_rating = document.querySelector(`#rate_${comment.id}`);
    let rating = ``;
    for (let i = 1; i < 6; i++) {
      if (comment.rating >= i) {
        rating += `<span class="icon fa fa-star"></span>`;
      } else {
        rating += `<span class="icon fa fa-star-o"></span>`;
      }
    }
    comment_rating.innerHTML = rating;
  });
} else {
  fruit_comments.innerHTML = `
  <div class="box-comment">
    <div class="unit unit-spacing-md flex-column flex-md-row align-items-lg-center" >
      <div class="unit-left">
        <p class="box-comment-figure" href="#"><img src="images/sign_arrow_down.svg" alt="" style=(fill:red} width="30" height="30"/></p>
      </div>

      <div class="unit-body">
        <div class="group-sm group-justify">
          <div>
            <div class="group-sm group-middle">
              <p class="box-comment-author danger
            ">
              Add your first comment below!
              </p>
              <div class="box-rating">
              <!-- Stars -->
              </div>
            </div>
          </div>
          <div class="box-comment-time">
          </div>
        </div>
      </div>
      
    </div>
  </div>
`;
}

// Number of comments
number_of_comments.innerText = filtered_comments.length;

// User initial rating
let initial_stars = ``;
for (let i = 0; i < 5; i++) {
  initial_stars += `<span class="icon fa fa-star"></span>`;
}
rate_star_user.innerHTML = initial_stars;

/*
 **  End of code to run when access this page.
 */
