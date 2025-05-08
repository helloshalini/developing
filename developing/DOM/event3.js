let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(form);

    let user = this.element[0];
    let pass = this.element[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is ${pass.value}`);
});