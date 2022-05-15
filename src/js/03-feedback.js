    var throttle = require('lodash.throttle');

   const form= document.querySelector(".feedback-form");
   const textarea = document.querySelector(`textarea`);
   const input= document.querySelector('.feedback-form input')


const formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
form.addEventListener("input", throttle(
    (e) =>{
        formData[e.target.name] = e.target.value;
        localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    }
    , 500));
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if (!formData[input.name] || !formData[textarea.name]) {
        alert("вернись и заполни");
    }
    else {

    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData[input.name] = '';
    formData[textarea.name] = '';
}});
populateTextArea()


function populateTextArea() {
    const savedMasseg = localStorage.getItem("feedback-form-state");
    const parsedsavedMasseg = JSON.parse(savedMasseg)
    if (savedMasseg) {
        form.elements.message.value = parsedsavedMasseg.message || "" ;
        form.elements.email.value = parsedsavedMasseg.email || "" ;
    }
}
