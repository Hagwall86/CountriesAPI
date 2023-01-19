console.log("Test")




async function foo() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const indata = await response.json();

    indata.sort(function(a:any,b:any) {
        if (a.name.common < b.name.common) return -1
        if (a.name.common > b.name.common) return 1
        return 0
    })




    // console.log(indata);
    indata.forEach((country: any) => {
        const container = document.querySelector(".container")!
        const countryCard = document.createElement("div")
        const infoSection = document.createElement("article")
        const flags = document.createElement("img")

        countryCard.className = "card"
        infoSection.className = "info"
        infoSection.innerHTML = `${country.name.common} <br/> Capital: ${country.capital}`
        flags.src = country.flags.svg
        container.append(countryCard)
        countryCard.append(infoSection)
        countryCard.append(flags)
    });

}


foo();

