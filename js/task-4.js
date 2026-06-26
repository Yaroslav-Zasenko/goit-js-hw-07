const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const emailValue = elements.email.value.trim();
  const passwordValue = elements.password.value.trim();
  
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return; 
  }
    
  const formData = {
    email: emailValue,
    password: passwordValue
  };

  console.log(formData); 
  event.currentTarget.reset(); 
}
