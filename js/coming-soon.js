const coming_soon_modal = document.getElementById("coming_soon_modal");
const coming_soon_form = document.getElementById("coming_soon_form");

// Modal
function coming_soon_popUpShow() {
  // TODO:
  //   const email = document.getElementById("subscribe-form-6-email");
  const mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,})$/;

  //   console.log(email);

  // if (!email.value.match(mailformat)) {
  //   if (email.value.match(mailformat)) {
  coming_soon_modal.classList.add("open");
  //   }
}

function coming_soon_popUpHide() {
  coming_soon_modal.classList.remove("open");
  coming_soon_form.classList.remove("active");
}
