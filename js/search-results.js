/*
 **  Initialization
 */

// Restore search string from local storage.
search_value = localStorage.getItem("search_value");

// JQuery
const rd_search_form_input = document.querySelector("#rd-search-form-input");
const search_result = document.querySelector("#search-result");
const search_item_form_trigger = document.querySelector("#search_item_form");

/*
 **   End of initilization when access Shop page.
 */

/*
 **  Functions
 */

// Store search value into local storage.
const search_item_form = () => {
  const search_text = rd_search_form_input.value;
  localStorage.setItem("search_value", search_text);
};

/*
 **  End of functions
 */

/*
 **  Code to run when access this page.
 */

// Filter the list based on the value in the local storage.
let fruit_list_result = ``;
if (search_value) {
  const fruit_list = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(search_value.toLowerCase())
  );

  //  Inject searched result on the web page.
  if (fruit_list != "") {
    fruit_list_result += `
        <h2>Search Result</h2>
        <div class="row row-l g row-40" id="e_list">
    `;
    fruit_list.forEach((fruit) => {
      fruit_list_result += `
    <div class="col-sm-6 col-md-4">
        <article class="product">
            <div class="product-figure">
                <img src="${fruit.image_1}" alt="" width="270" height="280"/>
                <div class="product-button">
                    <p class="button button-md button-white button-ujarak" href="single-product.html" id="addtocart-${fruit.id}">Add to Cart</p>
                </div>
            </div>
            <h5 class="product-title">
                <a href="single-product.html" id="${fruit.id}">${fruit.name}</a>
            </h5>
            <div class="product-price-wrap">
                <div class="product-price">$${fruit.price}</div>
            </div>
        </article>
    </div>`;
    });
    fruit_list_result += `</div>`;

    search_result.innerHTML = fruit_list_result;

    // Add event listener to the filted fruit list
    fruit_list.forEach((fruit) => {
      const link = document.querySelector(`#${fruit.id}`);
      const addtocart_link = document.querySelector(`#addtocart-${fruit.id}`);

      const index = fruits.findIndex((item) => fruit.id === item.id);

      link.addEventListener("click", () => {
        localStorage.setItem("fruitIndex", index);
      });
      addtocart_link.addEventListener("click", () => {
        const quantity = 1;
        // Update the variable name.
        const item = fruit;
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
    });
  } else {
    fruit_list_result = `No item found`;
    search_result.innerHTML = fruit_list_result;
  }
}

/*
 **  End of code to run when access this page.
 */
