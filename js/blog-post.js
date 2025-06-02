/*
 **  Initialization
 */

// JQuery
const blog_comments = document.querySelector("#blog_comments");
const number_of_comments = document.querySelector("#number_of_comments");
const blog_post_content = document.querySelector("#blog_post");
const popular_posts = document.querySelector("#popular_posts");

// Retrieve data from localStorage
let comments = JSON.parse(localStorage.getItem("article_comments"));
const pikachus = JSON.parse(localStorage.getItem("pikachus"));
const blog_posts = JSON.parse(localStorage.getItem("blog_posts"));

// Variables initialation
let popular_posts_selection = [0, 1, 2, 3, 4, 5];

// Blog_number set to 0 if no data found in the localStorage.
let blog_number = localStorage.getItem("blog_number");
if (blog_number === null) {
  blog_number = 0;
} else {
  blog_number = parseInt(blog_number);
  // blog_posts.splice(blog_number, 1);
  popular_posts_selection.splice(blog_number, 1);
}

const post_content = blog_posts[blog_number];

/*
 **   End of initilization
 */

/*
 **  Functions
 */

// Filtered by search criteria
const set_category = (category) => {
  const filtered_blog_posts = blog_posts.filter((blog_post) =>
    blog_post.category.toLowerCase().includes(category)
  );
  localStorage.setItem("blog_categories", JSON.stringify(filtered_blog_posts));
};

// store search value into localStorage.
const blog_search_request = (event) => {
  const blog_search_value = event.target.s.value;
  localStorage.setItem("blog_search_value", blog_search_value);
};

// Date format
const formatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

// Handle subitted form
const submit_user_comment = (event) => {
  const submit_name = event.target.name.value;
  const submit_email = event.target.email.value;
  const submit_message = event.target.message.value;
  // console.log(submit_name, submit_email, submit_message);

  const next_id = parseInt(comments.slice(-1).id) + 1;
  const today = new Date();
  const random = Math.floor(Math.random() * pikachus.length);

  // Create comment
  const comment = {
    id: next_id,
    date: formatter.format(today),
    name: submit_name,
    image: pikachus[random],
    content: submit_message,
  };

  // Push comment into comments array
  comments.push(comment);
  localStorage.setItem("article_comments", JSON.stringify(comments));
  // Reload page.
  location.reload();
};

const selected_popular_post = (index) => {
  // console.log(blog_comments_content(index));
  // alert(index);
  localStorage.setItem("blog_number", index);
};

/*
 **  End of functions
 */

/*
 **  Code to run when access this page.
 */

// Display popular posts
let popular_posts_indexes = [];
while (popular_posts_selection.length > 3) {
  const draw_number = Math.floor(
    Math.random() * popular_posts_selection.length
  );
  popular_posts_indexes.push(popular_posts_selection[draw_number]);
  popular_posts_selection.splice(draw_number, 1);
}

// Inject popular posts into HTML.
popular_posts.innerHTML = ``;
popular_posts_indexes.forEach((index) => {
  popular_posts.innerHTML += `
    <!-- Post Minimal-->
    <article class="post post-minimal"><a class="post-minimal-figure" href="blog-post.html" onclick="selected_popular_post(${index})"><img src="${blog_posts[index].image_3}" alt="" width="232" height="138"/></a>
      <p class="post-minimal-title"><a href="blog-post.html" onclick="selected_popular_post(${index})">${blog_posts[index].title}</a></p>
    </article>
  `;
});

// Inject blog post(s) into HTML.
blog_post_content.innerHTML = `
  <!-- Post Classic-->
    <article class="post post-classic">
      <h4 class="post-classic-title">${post_content.title}
      </h4>
      <div class="post-classic-panel group-middle justify-content-start"><span class="badge badge-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="27px" viewbox="0 0 16 27" enable-background="new 0 0 16 27" xml:space="preserve">
            <path d="M0,0v6c4.142,0,7.5,3.358,7.5,7.5S4.142,21,0,21v6h16V0H0z"></path>
          </svg>
          <div>${post_content.category}</div></span>
        <div class="post-classic-comments"><span class="icon fa fa-comments-o"></span><span>${post_content.number_of_comments}</span></div>
        <div class="post-classic-time"><span class="icon fa fa-clock-o"></span>
          <time datetime="2024-11-30">${post_content.date}</time>
        </div>
        <div class="post-classic-author">by ${post_content.author}</div>
      </div>
      <p class="post-classic-text">${post_content.text_1}</p>
      <div class="post-classic-figure"><img src="${post_content.image_2}" alt="" width="769" height="431"/>
      </div>
    </article>
    <!-- Quote Classic-->
    <article class="quote-classic quote-classic-big">
      <div class="quote-classic-text">
        <p class="q">${post_content.text_2}</p>
      </div>
    </article>
    <p>${post_content.text_3}</p>
    <div class="blog-post-bottom-panel group-md group-justify">
      <div class="blog-post-tags"><a href="/blog.html">${post_content.category}</a></div>
      <div>
      </div>
    </div>
`;

// Inject comments into HTML.
let blog_comments_content = ``;
comments.forEach((comment) => {
  blog_comments_content += `
        <div class="box-comment">
            <div class="unit unit-spacing-md flex-column flex-md-row align-items-lg-center">
                <div class="unit-left"><span class="box-comment-figure"><img src=${comment.image} alt="" width="119" height="119"/></span></div>
                <div class="unit-body">
                <div class="group-sm group-justify">
                    <div>
                    <div class="group-sm group-middle">
                        <p class="box-comment-author"><span>${comment.name}</span></p>
                    </div>
                    </div>
                    <div class="box-comment-time">
                    <time datetime="2024-11-30">${comment.date}</time>
                    </div>
                </div>
                <p class="box-comment-text">${comment.content}</p>
                </div>
            </div>
        </div>
    `;
});
blog_comments.innerHTML = blog_comments_content;
number_of_comments.innerText = comments.length;

/*
 **  End of code to run when access this page.
 */
