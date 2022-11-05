import { randomNumber } from "./randomNumbers"
import { hexChar } from "./generateHex"
import { listOfColors } from "./listOfColors"
export const generateColors = {
    simpleColor: () => {
        return listOfColors[randomNumber(listOfColors.length - 1)]
    },
    hexColor: () => {
        return `#${hexChar()}${hexChar()}${hexChar()}${hexChar()}${hexChar()}${hexChar()}`
    },
    rgbColor: () => {
        return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
    }
}