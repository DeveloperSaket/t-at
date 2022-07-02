import wildlife from "../images/wildlife.jpg";

export function getImage(imgName) {
    switch (imgName) {
        case 'labour':
            return wildlife;
        case 'plumber':
            return wildlife;

        default:
            return null;
    }
};
