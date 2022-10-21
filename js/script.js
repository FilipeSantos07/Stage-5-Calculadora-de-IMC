import {Modal} from "./modal.js"
import {alertError} from "./alert-error.js"
import {IMC,notANumber} from "./utils.js"
export {inputWeight,inputHeight}

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeight.focus()

form.addEventListener(`submit`, calculateIMC)
inputWeight.addEventListener(`input`, () => alertError.close())
inputHeight.addEventListener(`input`, () => alertError.close())

function calculateIMC(event) {
    event.preventDefault()

    let weight = Number(inputWeight.value)
    let height = Number(inputHeight.value)

    if(notANumber(weight) == true || notANumber(height) == true) {
       return alertError.open()
    }

    let result = IMC(weight,height)

    Modal.open()
    Modal.message.innerHTML = `Seu IMC é de ${result}`
}

