function one() {
    return 2;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one ();
    console.log(ans);
}

three();