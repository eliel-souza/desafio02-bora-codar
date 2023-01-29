const btn_360 = document.getElementById('image__360');
const btn_close = document.getElementById('image__close');
const toggleElement = document.getElementById('animation');

btn_360.onclick = () => toggleElement.classList.toggle('image--active');
btn_close.onclick = () => toggleElement.classList.toggle('image--active');






