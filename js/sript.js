const setBackground = () => {
    let p1 = document.getElementById('first');
    let p2 = document.getElementById('second');

    p1.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'yellow';
}

let btn = document.getElementById('button');
btn.addEventListener('click', setBackground);

