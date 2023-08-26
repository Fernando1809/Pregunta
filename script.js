function moveButton() {
    const noButton = document.getElementById("no");
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - 40) + "px";
}

function showMessage() {
    const message = "Sabía que dirías que sí. TE AMO MI NIÑA PRECIOSA ❤️💜";
    alert(message);
}
