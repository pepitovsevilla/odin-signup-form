const myform = document.getElementById('myform');
myform.noValidate = true;

myform.addEventListener('submit', validateForm);
myform.addEventListener('submit', checkPassword);

function validateForm(e) {
  const form = e.target;
  if (form.checkValidity()) {
    // form is valid - make further checks
  }
  else {
    // form is invalid - cancel submit
    e.preventDefault();
    // apply invalid class
    Array.from(form.elements).forEach(i => {
      if (i.checkValidity()) {
        // field is valid - remove class
        i.parentElement.classList.remove('invalid');
      }
      else {
        // field is invalid - add class
        i.parentElement.classList.add('invalid');
      }
    });
  }
};

function checkPassword(e) {
    const form = e.target;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password!==confirmPassword) {
      document.getElementById("pw-error-message").innerHTML = "Passwords do not match";
    }
    else {
        document.getElementById("pw-error-message").innerHTML = "";
    }
}