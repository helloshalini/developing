let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colleges = await getCollege(country);
    // console.log(colleges);

    show(colleges)

})

function show(colleges) {
    let list = document.querySelector("#list");
    for (clg of colleges) {
        console.log(clg.name);

        let li = document.createElement("li");
        li.innerText = clg.name;
        list.appendChild(li);
    }
}

async function getCollege(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(e) {
        console.log(e);
        return [];
    }
}
