let url = "https://catfact.ninja/fact"

fetch(url)
.then ((res) => {
    console.log(res);
})
.catch((err) => {
    console.log("Error", err)
})

