const counter = document.getElementById('counter');
let count = 0;

document.getElementById('add').addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

document.getElementById('subtract').addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
});