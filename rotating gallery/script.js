const images = document.querySelector(".images");

const prev = document.getElementById("previous");
const next = document.getElementById("next");

let x = 0;
let timer;

prev.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});

next.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    images.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
}, 3000);
}

updateGallery();