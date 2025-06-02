/*
 **  Initialization
 */

// JQuery
const blog_posts_list = document.querySelector("#blog_posts_list");

// Retrieve data from localStorage
const blog_posts = JSON.parse(localStorage.getItem("blog_posts"));
const blog_search_value = localStorage.getItem("blog_search_value");
const blog_categories = JSON.parse(localStorage.getItem("blog_categories"));

// Variables initialation
let filtered_blog_posts = [];

/*
 **  End of Initialization
 */

/*
 **  Functions
 */

// Find the index number based on the post id and store to the localStorage.
const save_blog_number = (index) => {
  const blog_post_index = blog_posts.findIndex(
    (blog_post) => blog_post.id === filtered_blog_posts[index].id
  );
  localStorage.setItem("blog_number", blog_post_index);
};

/*
 **  End of functions
 */

/*
 **  Code to run when access this page.
 */

// Search for title, text_1, text_2, text3 and author fields when blog_search_value has value. Clear it at the end of process.
if (blog_search_value) {
  filtered_blog_posts = blog_posts.filter(
    (blog_post) =>
      blog_post.title.toLowerCase().includes(blog_search_value.toLowerCase()) ||
      blog_post.text_1
        .toLowerCase()
        .includes(blog_search_value.toLowerCase()) ||
      blog_post.text_2
        .toLowerCase()
        .includes(blog_search_value.toLowerCase()) ||
      blog_post.text_3
        .toLowerCase()
        .includes(blog_search_value.toLowerCase()) ||
      blog_post.author.toLowerCase().includes(blog_search_value.toLowerCase())
  );
  localStorage.removeItem("blog_search_value");
} else if (blog_categories) {
  console.log(blog_categories);
  filtered_blog_posts = blog_categories;
  localStorage.removeItem("blog_categories");
} else {
  filtered_blog_posts = [...blog_posts];
}

// inject blog posts into HTML.
let posts = ``;
if (filtered_blog_posts.length > 0) {
  filtered_blog_posts.forEach((blog_post, index) => {
    posts += `
        <div class="col-sm-9 col-md-6 col-lg-5 col-xl-4">
            <!-- Post Creative-->
            <article class="post post-creative">
            <div class="post-creative-header">
                <div class="group-md">
                <div>
                    <div class="unit flex-column flex-sm-row unit-spacing-sm align-items-center">
                    <div class="unit-left"><img class="img-circles" src="${blog_post.avator}" alt="" width="49" height="49"/>
                    </div>
                    <div class="unit-body">
                        <div class="post-creative-author"><span class="text">by</span><span> ${blog_post.author}</span></div>
                    </div>
                    </div>
                </div>
                <div class="post-creative-time">
                    <time datetime="2024-05-17">${blog_post.date}</time>
                </div>
                </div>
            </div><a class="post-creative-figure" href="blog-post.html"><img src="${blog_post.image_1}" alt="" width="370" height="267" onclick="save_blog_number(${index})"/></a>
            <div class="post-creative-footer">
                <div class="post-creative-title"><a href="blog-post.html" onclick="save_blog_number(${index})">${blog_post.title}</a></div>
            </div>
            </article>
        </div>

    `;
  });
} else {
  posts = `<div>NO BLOG FOUND.</div>`;
}
blog_posts_list.innerHTML = posts;

/*
 **  end of cart item update
 */
