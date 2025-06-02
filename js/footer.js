/*
 **  Footer elements initialization
 */

// Footer HTML
const footer = `
        <div class="footer-variant-2-content">
          <div class="container">
            <div class="row row-40 justify-content-between">
              <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="oh-desktop">
                  <div class="wow slideInRight" data-wow-delay="0s">
                    <div class="footer-brand"><a href="index.html"><img src="images/logo-inverse-154x42.png" alt="" width="154" height="42"/></a></div>
                    <p>Greater Bay Fruits (GBF) is a company specializing in importing high-quality fruits from around the world. We are located in Tsim Sha Tsui East. We offer premium quality fruits to our clients.</p>
                    <ul class="footer-contacts d-inline-block d-md-block">
                      <li>
                        <div class="unit unit-spacing-xs">
                          <div class="unit-left"><span class="icon fa fa-phone"></span></div>
                          <div class="unit-body"><p class="link-phone" href="tel:#">+852 3442-7423</p></div>
                        </div>
                      </li>
                      <li>
                        <div class="unit unit-spacing-xs">
                          <div class="unit-left"><span class="icon fa fa-clock-o"></span></div>
                          <div class="unit-body">
                            <p>Mon-Sat: 09:00AM - 08:00PM</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="unit unit-spacing-xs">
                          <div class="unit-left"><span class="icon fa fa-location-arrow"></span></div>
                          <div class="unit-body"><a class="link-location" href="/contact-us.html">UG301, UG3/F, ChinaChem Golden Plaza, 16 Science Museum Road, Tsim Sha Tsui East, Kowloon, Hong Kong</a></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="oh-desktop">
                  <div class="inset-top-18 wow slideInDown" data-wow-delay="0s">
                    <h5>Newsletter</h5>
                    <p>Join our email newsletter for news and tips.</p>
                    <form class="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="subscribe" id="footer_form";>
                      <div class="form-wrap">
                        <input class="form-input" id="subscribe-form-5-email" type="email" name="email" data-constraints="@Email @Required" placeholder="Enter Your E-mail">
                      </div>
                      <button class="button button-block button-white" type="submit" onclick=footer_popUpShow()>Subscribe</button>
                    </form>
                    <div class="group-lg group-middle">
                      <p class="text-white">Follow Us</p>
                      <div>
                        <ul class="list-inline list-inline-sm footer-social-list-2">
                          <li><a class="icon fa fa-facebook" href="https://www.facebook.com/login" target="_blank"></a></li>
                          <li><a class="icon fa fa-twitter" href="https://x.com/?mx=2" target="_blank"></a></li>
                          <li><a class="icon fa fa-google-plus" href="https://www.google.com.hk/" target="_blank"></a></li>
                          <li><a class="icon fa fa-instagram" href="https://www.instagram.com/" target="_blank"></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-xl-3">
                <div class="oh-desktop">
                  <div class="inset-top-18 wow slideInLeft" data-wow-delay="0s">
                    <h5>Gallery</h5>
                    <div class="row row-10 gutters-10">
                      <div class="col-6 col-sm-3 col-lg-6">
                        <!-- Thumbnail Classic-->
                        <article class="thumbnail thumbnail-mary">
                          <div class="thumbnail-mary-figure"><img src="images/gallery-image-1-129x120.jpg" alt="" width="129" height="120"/>
                          </div>
                          <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-7-800x1200.jpg" data-lightgallery="item"><img src="images/gallery-image-1-129x120.jpg" alt="" width="129" height="120"/></a>
                          </div>
                        </article>
                      </div>
                      <div class="col-6 col-sm-3 col-lg-6">
                        <!-- Thumbnail Classic-->
                        <article class="thumbnail thumbnail-mary">
                          <div class="thumbnail-mary-figure"><img src="images/gallery-image-2-129x120.jpg" alt="" width="129" height="120"/>
                          </div>
                          <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-8-1200x800.jpg" data-lightgallery="item"><img src="images/gallery-image-2-129x120.jpg" alt="" width="129" height="120"/></a>
                          </div>
                        </article>
                      </div>
                      <div class="col-6 col-sm-3 col-lg-6">
                        <!-- Thumbnail Classic-->
                        <article class="thumbnail thumbnail-mary">
                          <div class="thumbnail-mary-figure"><img src="images/gallery-image-3-129x120.jpg" alt="" width="129" height="120"/>
                          </div>
                          <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-9-800x1200.jpg" data-lightgallery="item"><img src="images/gallery-image-3-129x120.jpg" alt="" width="129" height="120"/></a>
                          </div>
                        </article>
                      </div>
                      <div class="col-6 col-sm-3 col-lg-6">
                        <!-- Thumbnail Classic-->
                        <article class="thumbnail thumbnail-mary">
                          <div class="thumbnail-mary-figure"><img src="images/gallery-image-4-129x120.jpg" alt="" width="129" height="120"/>
                          </div>
                          <div class="thumbnail-mary-caption"><a class="icon fl-bigmug-line-zoom60" href="images/gallery-original-10-1200x800.jpg" data-lightgallery="item"><img src="images/gallery-image-4-129x120.jpg" alt="" width="129" height="120"/></a>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-variant-2-bottom-panel">
          <div class="container">
            <!-- Rights-->
            <div class="group-sm group-sm-justify">
              <p class="rights"><span>&copy;&nbsp;</span><span class="copyright-year"></span> <span>Greater Bay Fruits(GBF)</span>. All rights reserved
              </p>
              <p class="rights"><a href="privacy-policy.html">Privacy Policy</a></p>
            </div>
          </div>
        </div>

      <!-- Modal -->
      <div class="modal2" id="footer_modal2">
        <div class="modal-inner2">
          <img src="./images/tick.png" alt="">
          <h2 style="color: #3c6a36">Thank you!</h2>
          <p style="color: black" >Your email subscription has been submitted.</p>
          <div class="OK-btn"><button type="submit" onclick="footer_popUpHide()"><a>OK</a></button></div>
        </div>
      </div>
`;

// JQuery
const page_footer = document.querySelector("#page_footer");

// Inject elements into footer
page_footer.innerHTML = footer;

// Search for element after footer is injected.
const footer_form = document.getElementById("footer_form");
footer_form.onsubmit = (event) => {
  event.preventDefault();
};
const footer_modal = document.getElementById("footer_modal2");

/*
 **  End of footer elements initialization
 */

/*
 **  Functions
 */

// Modal
function footer_popUpShow() {
  var email = document.getElementById("subscribe-form-5-email");
  var mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,})$/;

  // if (!email.value.match(mailformat)) {
  if (email.value.match(mailformat)) {
    footer_modal.classList.add("open");
  }
}

function footer_popUpHide() {
  footer_modal.classList.remove("open");
  footer_form.classList.remove("active");
}

/*
 **  end of cart item update
 */
