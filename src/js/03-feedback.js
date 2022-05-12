    var throttle = require('lodash.throttle');

   const form= document.querySelector(".feedback-form")



const formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
form.addEventListener("input", throttle(
    (e) =>{
        formData[e.target.name] = e.target.value;
        localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    }
    , 500));
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
});
populateTextArea()


function populateTextArea() {
    const savedMasseg = localStorage.getItem("feedback-form-state");
    const parsedsavedMasseg = JSON.parse(savedMasseg)
    if (savedMasseg) {
        form.elements.message.value = parsedsavedMasseg.message ;
        form.elements.email.value = parsedsavedMasseg.email ;
    }
}
