let cursorImage = 'img/cursor1-removebg-preview.png'; // Ruta de la imagen inicial del cursor
const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
    customCursor.style.left = e.pageX + "px";
    customCursor.style.top = e.pageY + "px";
});

document.addEventListener("click", () => {
    if (cursorImage === 'img/cursor1-removebg-preview.png') {
        cursorImage = 'img/cursor3-removebg-preview.png'; // Cambia a la nueva imagen al hacer clic
    } else {
        cursorImage = 'img/cursor1-removebg-preview.png'; // Vuelve a la imagen original al hacer clic nuevamente
    }
    customCursor.style.backgroundImage = `url('${img/cursor3-removebg-preview.png}')`;
});
