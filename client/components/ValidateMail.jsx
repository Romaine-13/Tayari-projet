// email function
let span_error_message = document.querySelector(".div-email__error-message");
let input_email = document.querySelector(".div-email__input");
function validateEmail(email) {
    let emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
    return emailReg.test(email);
}
input_email.addEventListener("blur", () => {
    if (validateEmail(input_email.value)) {
        input_email.setAttribute("style", "border-color: #C4C4C4; border-width: 1px");
        span_error_message.innerHTML = "";
        contact.email = input_email.value;
    }
    else {
      message_error_email();
    }
})