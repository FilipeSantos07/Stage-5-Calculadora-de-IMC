import {inputWeight,inputHeight} from "./script.js"
export const Modal = {
    popUp:document.querySelector(".modal-wrapper"),
    message:document.querySelector(".modal-wrapper h2"),
    closeIcon: document.querySelector(".modal-wrapper i"),

    open: function() {
        Modal.popUp.classList.add("open")
    },
    close: function() {
        Modal.popUp.classList.remove("open")
    },
}

Modal.closeIcon.addEventListener(`click`, closePopUp)
document.addEventListener(`keydown`, closeWithEsc)

function closePopUp() {
    Modal.close()

    inputWeight.value = ""
    inputHeight.value = ""

    inputWeight.focus()
}

function closeWithEsc(event) {
    if(event.key == "Escape") {
        Modal.close()

        inputWeight.value = ""
        inputHeight.value = ""
        
        inputWeight.focus()
    }
}
