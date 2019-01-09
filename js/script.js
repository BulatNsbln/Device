const buttons1arr = Array.prototype.slice.call(document.querySelectorAll(".slider_navigation ul li:nth-child(1) button"));
const buttons2arr = Array.prototype.slice.call(document.querySelectorAll(".slider_navigation ul li:nth-child(2) button"));
const buttons3arr = Array.prototype.slice.call(document.querySelectorAll(".slider_navigation ul li:nth-child(3) button"));

let buttonsList = [buttons1arr, buttons2arr, buttons3arr];

const slideList = document.querySelectorAll(".slide_item");
const slide1 = document.querySelector(".slide_item:nth-child(1)");
const slide2 = document.querySelector(".slide_item:nth-child(2)");
const slide3 = document.querySelector(".slide_item:nth-child(3)");

function addEventList(arr) {
    for(let button of arr) {
        button.addEventListener("click", () => showSlide(button));
    }
}

addEventList(buttons1arr);
addEventList(buttons2arr);
addEventList(buttons3arr);

function showSlide(button) {    
    for(let i = 0; i < slideList.length; i++) {
        slideList[i].classList.add("displayHidden");
        if(buttonsList[i].includes(button)) {
            slideList[i].classList.remove("displayHidden");
        } 
    }

    
}

