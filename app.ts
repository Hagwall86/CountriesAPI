console.log("Test")


async function foo() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const indata = await response.json();

    console.log(indata);
    indata.forEach((country: any) => {
        const container = document.querySelector(".container")!
        const countryCard = document.createElement("div")

    country.sort(function(a:any,b:any) {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
        })


        console.log(country)
        countryCard.innerHTML = `${country.name.official}`
        container.append(countryCard)

    });
}

foo();
