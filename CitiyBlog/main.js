const nope_button = document.getElementById('nope');

const move_when_hover = function () {
    nope_button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    nope_button.style.top = `${Math.ceil(Math.random() * 90)}%`;
}

nope_button.addEventListener('mouseover', move_when_hover);

