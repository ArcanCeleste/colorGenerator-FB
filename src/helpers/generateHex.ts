import { randomNumber } from "./randomNumbers"; 

export const hexChar = () => {
    let hexC: string|number = 0
    
    hexC = randomNumber(15);

    switch (hexC) {
        case 10:
            return "a";
        case 11:
            return "b";
        case 12: 
            return "c";
        case 13:
            return "d";
        case 14:
            return "e";
        case 15: 
            return "f";
        default:
            return hexC;
    };
};