class Slider {
    constructor(buttons, slideList) {
        this._buttonsArr = buttons;
        this._slideList = slideList;
        this.addClick();
    }
    addClick() { 
        for(let button of this._buttonsArr) {
            this.addEventList(button);
        }
    }
    addEventList(button) {
        button.addEventListener("click", () => this.showSlide(button));
    }
    showSlide(button) {   
        for(let i = 0; i < this._slideList.length; i++) {
            this._slideList[i].classList.add("displayHidden");
            if(this._buttonsArr[i] == button) {
                this._slideList[i].classList.remove("displayHidden");
            } 
        }  
    }
}

// slider top

let buttonsNodeListTop = document.querySelectorAll(".slider_navigation button");
let buttonsArrTop = [...buttonsNodeListTop];
let slideListTop = document.querySelectorAll(".slide_item");

let sliderTop = new Slider(buttonsArrTop, slideListTop);


// menu catalog

let buttonCatalogs = document.querySelector(".main_navigation_menu .button_catalog");
let catalogMenu = document.querySelector(".hover_menu");

buttonCatalogs.addEventListener('mouseover', showAndHiddenMenu);
buttonCatalogs.addEventListener('mouseout', showAndHiddenMenu);

function showAndHiddenMenu() {
    catalogMenu.classList.toggle("hover_menu_show");
}

// slider options

let buttonsNodeListOp = document.querySelectorAll(".options_list button");
let buttonsArrOp = [...buttonsNodeListOp];
let slideListOp = document.querySelectorAll(".option_discreption_item");

let sliderOptions = new Slider(buttonsArrOp, slideListOp);