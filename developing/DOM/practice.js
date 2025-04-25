let para1 = document.createElement("p");
para1.innerText = "Hey i a'm red";
document.querySelector('body').append(para1);

para1.classList.add("red");


let head1 = document.createElement("h3");
head1.innerText = "Hey i a'm blue h3";
document.querySelector('body').append(head1);

head1.classList.add("blue");

let divi = document.createElement("div");
let head = document.createElement("h1");
let para = document.createElement("p");

head.innerText = "Hey i a'm in div";
para.innerText = "Hey i a'm also in div";

divi.append(head);
divi.append(para);

divi.classList.add("box")
document.querySelector('body').append(divi);
