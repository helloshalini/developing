let jsonRes = '{"fact":"A cat has two vocal chords, and can make over 100 sounds.","length":57}';

let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

let student = {
    name: "lisa",
    age: 67,
    hobey: "dancing"
}

let studJson = JSON.stringify(student);
console.log(studJson);