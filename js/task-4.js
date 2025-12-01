const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (event.target.elements.email.value === "" || event.target.elements.password.value === "" ) {
    return window.alert("All form fields must be filled in");
  }
  let loginData = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value
  }
  console.log(loginData)
  return event.target.reset();
});