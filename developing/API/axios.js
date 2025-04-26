let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    console.log("button was clicked")
    let fact = await getFacts();
    console.log(fact);

    let p = document.querySelector("#result");
    p.innerText = fact;
});



let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.dats.fact;
    }
    catch (e) {
        console.log("error - ",e);
        return "No Fact Found";
    }
    
}