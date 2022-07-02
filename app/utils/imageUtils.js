import wildlife from "../images/wildlife.jpg";

export function getImage(imgName) {
    switch (imgName) {
        case 'wildlife':
            return wildlife;
        case 'plumber':
            return wildlife;

        default:
            return null;
    }
};
