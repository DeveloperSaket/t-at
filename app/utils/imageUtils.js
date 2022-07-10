import wildlife from "../images/wildlife.jpg";
import honeymoon from "../images/honeymoon.jpg";

export function getImage(imgName) {
    switch (imgName) {
        case 'wildlife':
            return wildlife;
        case 'plumber':
            return wildlife;
        case 'honeymoon':
            return honeymoon;

        default:
            return null;
    }
};
