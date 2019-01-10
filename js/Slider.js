export default class Slider {
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