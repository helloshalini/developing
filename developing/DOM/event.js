let btns = document.querySelectorAll("button");
console.dir(btns);

for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        alert('button was clicked');
    }
}

function sayHello() {
    alert('Hello!');
};
