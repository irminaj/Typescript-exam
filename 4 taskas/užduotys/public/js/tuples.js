"use strict";
const person1 = ["Koridas", "Atmazas"];
const person2 = ["Paklodijus", "Pagalvė"];
const person3 = ["Višta", "Maumedienė"];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => (currentAge += 1)];
const height = [
    currentAge,
    (h) => {
        if (h)
            currentHeight = h;
    },
];
console.group("Tuples - užduotys");
{
    console.group("1. Sukurkite žmogaus vardo ir amžiaus rinkinį");
    {
        const person1 = ["Ona", 30];
        const person2 = ["Petras", 10];
        console.log(person1);
        console.log(person2);
    }
    console.groupEnd();
    console.group("2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)");
    {
        const dogAndOwner1 = [
            {
                name: "Clark",
                breed: "Pug",
            },
            {
                name: "Tom",
                age: 20,
            },
        ];
        const dogAndOwner2 = [
            {
                name: "Daisy",
                breed: "Russell Terrier",
            },
            {
                name: "Christina",
                age: 39,
            },
        ];
        console.log(dogAndOwner1);
        console.log(dogAndOwner2);
    }
    console.groupEnd();
    console.group("3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)");
    {
        const triangle1 = [[1, 2], [2, 3], [3, 5]];
        const triangle2 = [[5, 6], [7, 8], [9, 10]];
        console.log(triangle1);
        console.log(triangle2);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map