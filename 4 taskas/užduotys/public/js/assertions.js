"use strict";
const someNumber = 17;
const title = "Grace";
console.group("Assertions - užduotys");
{
    const btn = document.querySelector("#button");
    const squareContainer = document.querySelector("#sq-container");
    const paragraphElement = document.querySelector("#count-container");
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("paspausta");
        });
    }
    console.groupEnd();
    console.group("2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas");
    {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const sq = document.createElement("span");
            squareContainer.append(sq);
            sq.classList.add("sq");
        });
    }
    console.groupEnd();
    console.group("3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje");
    {
        let sqCount = 0;
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            sqCount++;
            paragraphElement.innerHTML = `Kvadratu skaicius ${sqCount}`;
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map