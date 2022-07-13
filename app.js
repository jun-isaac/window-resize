const body = document.querySelector("body")

const sWidth = "s-width";
const mWidth = "m-width";
const lWidth = "l-width";


function handleWindowResize() {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 800) {
        body.classList.remove(mWidth);
        body.classList.remove(lWidth);
        body.classList.add(sWidth);
    } else if (800 < innerWidth && innerWidth <= 1200) {
        body.classList.remove(sWidth);
        body.classList.remove(lWidth);
        body.classList.add(mWidth);
    } else {
        body.classList.remove(sWidth);
        body.classList.remove(mWidth);
        body.classList.add(lWidth);
    }
};

window.addEventListener("resize", handleWindowResize);