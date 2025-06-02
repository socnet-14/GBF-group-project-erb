/*
 **  Initialization
 */

// Retrieve data from localStorage
const fruits_list = JSON.parse(localStorage.getItem("fruits"));
// const blog_posts = JSON.parse(localStorage.getItem("blog_posts"));

// JQuery
const fruit_list = document.querySelector("#fruit_list");
const vegetable_list = document.querySelector("#vegetable_list");
const our_blog_list = document.querySelector("#our_blog_list");

// Variables initialation
const vegetables_cat = fruits_list.filter(
  (fruit) => fruit.type.toLowerCase() === "Berry".toLowerCase()
);
const fruits_cat = fruits_list.filter(
  (fruit) => fruit.type.toLowerCase() === "Pome".toLowerCase()
);
/*
 **   End of initilization
 */

/*
 **  Functions
 */

// store search string
const index_search_item = (search_string) => {
  localStorage.setItem("search_value", search_string);
};

// Store blog number
const save_blog_number = (index) => {
  localStorage.setItem("blog_number", index);
};

/*
 **  End of functions
 */

/*
 **  Code to run when access this page.
 */

// Inject vegetable list to the web page
vegetable_list.innerHTML = ``;
for (let i = 0; i < 4; i++) {
  if (vegetables_cat.length > i) {
    vegetable_list.innerHTML += `
    <div class="col-sm-6 col-md-12 col-lg-6">
        <div class="oh-desktop">
        <!-- Product-->
        <article class="product product-2 box-ordered-item wow slideInRight" data-wow-delay="0s">
            <div class="unit flex-row flex-lg-column">
            <div class="unit-left">
                <div class="product-figure"><img src=${vegetables_cat[i].image_1} alt="" width="270" height="280"/>
                <div class="product-button"><p class="button button-md button-white button-ujarak" href="single-product.html" id="vegetable_img_${vegetables_cat[i].id}">Add to Cart</p></div>
                </div>
            </div>
            <div class="unit-body">
                <h6 class="product-title"><a href="single-product.html" id="vegetable_txt_${vegetables_cat[i].id}">${vegetables_cat[i].name}</a></h6>
                <div class="product-price-wrap">
                <div class="product-price">$${vegetables_cat[i].price}</div>
                </div><p class="button button-sm button-secondary button-ujarak" href="singe-product.html" id="vegetable_btn_${vegetables_cat[i].id}">Add to Cart</p>
            </div>
            </div>
        </article>
        </div>
    </div>
    `;
  }
}

// Inject fruit list to the web page
fruit_list.innerHTML = ``;
for (let i = 0; i < 4; i++) {
  if (fruits_cat.length > i) {
    fruit_list.innerHTML += `
    <div class="col-sm-6 col-md-12 col-lg-6">
    <div class="oh-desktop">
      <!-- Product-->
      <article class="product product-2 box-ordered-item wow slideInRight" data-wow-delay="0s">
        <div class="unit flex-row flex-lg-column">
          <div class="unit-left">
            <div class="product-figure"><img src=${fruits_cat[i].image_1} alt="" width="270" height="280"/>
              <div class="product-button"><p class="button button-md button-white button-ujarak" href="single-product.html" id="fruit_img_${fruits_cat[i].id}">Add to Cart</p></div>
            </div>
          </div>
          <div class="unit-body">
            <h6 class="product-title"><a href="single-product.html" id="fruit_txt_${fruits_cat[i].id}">${fruits_cat[i].name}</a></h6>
            <div class="product-price-wrap">
              <div class="product-price">$${fruits_cat[i].price}</div>
            </div><p class="button button-sm button-secondary button-ujarak" href="singe-product.html" id="fruit_btn_${fruits_cat[i].id}">Add to Cart</p>
          </div>
        </div>
      </article>
    </div>
  </div>
  `;
  }
}

// inject Our Blog
our_blog_list.innerHTML = ``;
for (let i = 0; i < 3; i++) {
  our_blog_list.innerHTML += `
    <div class="col-sm-9 col-md-6 col-lg-5 col-xl-4 wow fadeInLeft" data-wow-delay="0s">
    <!-- Post Creative-->
    <article class="post post-creative post-creative-2">
      <div class="post-creative-header">
        <div class="group-md">
          <div>
            <div class="unit flex-column flex-sm-row unit-spacing-sm align-items-center">
              <div class="unit-left"><img class="img-circles" src="${blog_posts[i].avator}" alt="" width="49" height="49"/>
              </div>
              <div class="unit-body">
                <div class="post-creative-author"><span class="text">by</span><span href="#"> ${blog_posts[i].author}</span></div>
              </div>
            </div>
          </div>
          <div class="post-creative-time">
            <time datetime="2024-05-17">${blog_posts[i].date}</time>
          </div>
        </div>
      </div><a class="post-creative-figure" href="blog-post.html"><img src="${blog_posts[i].image_1}" alt="" width="370" height="267" onclick="save_blog_number(${i})"/></a>
      <div class="post-creative-footer">
        <div class="post-creative-title"><a href="blog-post.html" onclick="save_blog_number(${i})">${blog_posts[i].title}</a></div>
      </div>
    </article>
  </div>
  `;
}

// Add click event listener to fruit and vegitable lists.
for (let i = 0; i < 4; i++) {
  if (vegetables_cat.length > i) {
    document
      .querySelector(`#vegetable_txt_${vegetables_cat[i].id}`)
      .addEventListener("click", () => {
        localStorage.setItem(
          "fruitIndex",
          fruits_list.findIndex((fruit) => fruit.id === vegetables_cat[i].id)
        );
      });

    document
      .querySelector(`#vegetable_img_${vegetables_cat[i].id}`)
      .addEventListener("click", () => {
        const quantity = 1;
        // Update the variable name.
        const item = vegetables_cat[i];
        if (cart_items.length > 0) {
          let found = false;
          cart_items.map((cart_item) => {
            if (cart_item.id === item.id) {
              cart_item.quantity =
                parseInt(cart_item.quantity) + parseInt(quantity);
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

    document
      .querySelector(`#vegetable_btn_${vegetables_cat[i].id}`)
      .addEventListener("click", () => {
        const quantity = 1;
        // Update the variable name.
        const item = vegetables_cat[i];
        if (cart_items.length > 0) {
          let found = false;
          cart_items.map((cart_item) => {
            if (cart_item.id === item.id) {
              cart_item.quantity =
                parseInt(cart_item.quantity) + parseInt(quantity);
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

  if (fruits_cat.length > i) {
    document
      .querySelector(`#fruit_txt_${fruits_cat[i].id}`)
      .addEventListener("click", () => {
        localStorage.setItem(
          "fruitIndex",
          fruits_list.findIndex((fruit) => fruit.id === fruits_cat[i].id)
        );
      });

    document
      .querySelector(`#fruit_img_${fruits_cat[i].id}`)
      .addEventListener("click", () => {
        const quantity = 1;
        // Update the variable name.
        const item = fruits_cat[i];
        if (cart_items.length > 0) {
          let found = false;
          cart_items.map((cart_item) => {
            if (cart_item.id === item.id) {
              cart_item.quantity =
                parseInt(cart_item.quantity) + parseInt(quantity);
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

    document
      .querySelector(`#fruit_btn_${fruits_cat[i].id}`)
      .addEventListener("click", () => {
        const quantity = 1;
        // Update the variable name.
        const item = fruits_cat[i];
        if (cart_items.length > 0) {
          let found = false;
          cart_items.map((cart_item) => {
            if (cart_item.id === item.id) {
              cart_item.quantity =
                parseInt(cart_item.quantity) + parseInt(quantity);
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
}

/*
 **  End of code to run when access this page.
 */
