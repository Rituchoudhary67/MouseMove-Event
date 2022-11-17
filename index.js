

const example = document.getElementById("thought");

document.addEventListener("mousemove", (event) => {
    const { screenX } = event;
    example.style.width = `${screenX}px`;
})