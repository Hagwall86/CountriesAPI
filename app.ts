console.log("Test")


async function foo() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const indata = await response.json();

    indata.sort(function(a:any,b:any) {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })


    // console.log(indata);
    indata.forEach((country: any) => {
        const container = document.querySelector(".container")!
        const countryCard = document.createElement("div")

        // type countryArr = {
        //     name: string
        // }
        // const countryArr: countryArr[] = []
        // countryArr.push(country.name.common)
        // //Funktion som ska skriva ut namnen i bokstavsordning (Funkar inte)
        // countryArr.sort(function(a:any,b:any) {
        //         if (a.name < b.name) return -1
        //         if (a.name > b.name) return 1
        //         return 0
        //     })
        // countryArr.sort()
        // console.log(typeof country.name)



        // console.log(countryArr)
        countryCard.innerHTML = `${country.name.common} <br/> ${country.capital}`

        container.append(countryCard)

    });

}

// const items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 37 },
//   ];
// console.log(items)
//   // sort by value
//   items.sort((a, b) => a.value - b.value);

//   // sort by name
//   items.sort((a, b) => {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }

//     // names must be equal
//     return 0;
//   });


foo();
// console.log(items)
