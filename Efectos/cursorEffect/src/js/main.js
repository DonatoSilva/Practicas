const cursorElement = document.querySelector('.cursor');
window.addEventListener('pointermove', (event) => {
    const { pageX: x, pageY: y } = event;

    cursorElement.style.left = `${x}px`;
    cursorElement.style.top = `${y}px`;
})