"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Test");
function foo() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://restcountries.com/v3.1/all");
        const indata = yield response.json();
        console.log(indata);
        indata.forEach((country) => {
            const container = document.querySelector(".container");
            const countryCard = document.createElement("div");
            country.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            console.log(country);
            countryCard.innerHTML = `${country.name.official}`;
            container.append(countryCard);
        });
    });
}
foo();
