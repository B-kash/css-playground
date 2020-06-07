const cursor = document.getElementById('cursor');

const onMouseMove = (event) => {
    cursor.style.display = 'block';
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
};
document.addEventListener("mousemove", onMouseMove);
