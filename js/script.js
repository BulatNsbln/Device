// Slider
const buttonsNodeList = document.querySelectorAll(".slider_navigation button");
const buttonsArr = [...buttonsNodeList];
const slideList = document.querySelectorAll(".slide_item");

for(let button of buttonsArr) {
    addEventList(button);
}

function addEventList(button) {
    button.addEventListener("click", () => showSlide(button));
}

function showSlide(button) {   
    for(let i = 0; i < slideList.length; i++) {
        slideList[i].classList.add("displayHidden");
        if(buttonsArr[i] == button) {
            slideList[i].classList.remove("displayHidden");
        } 
    }  
}