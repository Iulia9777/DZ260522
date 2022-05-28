
const ul = document.querySelector('input[name="test"]');

const show = document.getElementById(show);

ul.addEventListener('change', updateValue);

function updateValue(ev) {
    show.textContent = ev.target.value;
}
