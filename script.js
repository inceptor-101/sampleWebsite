var button = document.getElementById('button');
var container = document.getElementById('container');
button.addEventListener('change', () => {
    if (button.checked) {
        container.style.background = 'none';
    }
    else {
        container.style.background = 'yellow';
    }
})