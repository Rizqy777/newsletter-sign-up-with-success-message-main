const containerMain = document.querySelector(".container_main");
const containerHidden = document.querySelector(".container_hidden");
const inputEmail = document.querySelector(".input_email");
const submit = document.querySelector(".submit");
const dismiss = document.querySelector(".submit_dismiss");
const emailAdress = document.querySelector(".email_acount");
const validEmail = document.querySelector(".valid_email");

submit.addEventListener("click", () => {
  if (
    !inputEmail.value.includes("gmail.com") &&
    !inputEmail.value.includes("hotmail.com")
  ) {
    inputEmail.classList.toggle("active");
    validEmail.style.display = "block";
  } else {
    containerMain.style.display = "none";
    containerHidden.style.display = "block";
    emailAdress.textContent = inputEmail.value;
  }
});

dismiss.addEventListener("click", () => {
  containerHidden.style.display = "none";
  containerMain.style.display = "grid";
});
