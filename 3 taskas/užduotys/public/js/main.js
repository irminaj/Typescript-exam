"use strict";
console.group("1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą");
{
    const printIndex = (arr) => {
        return arr.length - 1;
    };
    const array = ["hello", "three", "two", "bye"];
    console.log(printIndex(array));
}
console.groupEnd();
console.group("2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis");
{
    const printIndexes = (arr) => {
        for (let i = 0; i < arr.length; i++)
            console.log(i);
    };
    const array = ["hello", "three", "two", "bye"];
    printIndexes(array);
}
console.groupEnd();
console.group("3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis");
{
    const printValues = (arr) => {
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i]);
    };
    const array = ["hello", "three", "two", "bye"];
    printValues(array);
}
console.groupEnd();
console.group("4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ");
{
    const printIndexAndValue = (arr) => {
        for (let i = 0; i < arr.length; i++)
            console.log(`[${i}] => ${arr[i]}`);
    };
    const array = ["hello", "three", "two", "bye"];
    printIndexAndValue(array);
}
console.groupEnd();
console.group("5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.");
{
    const printElementsViceVersa = (arr) => {
        for (let i = arr.length - 1; i >= 0; i--)
            console.log(arr[i]);
    };
    const array = ["hello", "three", "two", "bye"];
    printElementsViceVersa(array);
}
console.groupEnd();
console.group("6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...");
{
    const printIndexes = (arr) => {
        const result = arr.map((_, i) => i).join(" ");
        return result;
    };
    const array = ["hello", "three", "two", "bye"];
    console.log(printIndexes(array));
}
console.groupEnd();
console.group("7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...");
{
    const printValues = (arr) => {
        console.log(...arr);
    };
    const array = ["hello", "three", "two", "bye"];
    printValues(array);
}
console.groupEnd();
console.group("8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:");
{
    const printIndexAndValue = (arr) => {
        const result = arr.map((x, i) => `[${i}] => ${x}`).join(", ");
        console.log(result);
    };
    const array = ["hello", "three", "two", "bye"];
    printIndexAndValue(array);
}
console.groupEnd();
console.group("9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2");
{
    const multiplyElements = (arr) => {
        return arr.map(x => x * 2);
    };
    const array = [7, 10, 25, 6];
    console.log(multiplyElements(array));
}
console.groupEnd();
console.group("10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu");
{
    const squareElements = (arr) => {
        return arr.map(x => x ** 2);
    };
    const array = [7, 10, 25, 6];
    console.log(squareElements(array));
}
console.groupEnd();
console.group("11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos");
{
    const multiplyElementsValueAndIndex = (arr) => {
        return arr.map((x, i) => x * i);
    };
    const array = [7, 10, 25, 6];
    console.log(multiplyElementsValueAndIndex(array));
}
console.groupEnd();
console.group("12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų");
{
    const filterPositiveNumber = (arr) => {
        return arr.filter((x) => x > 0);
    };
    const array = [7, 10, -25, 6, -9];
    console.log(filterPositiveNumber(array));
}
console.groupEnd();
console.group("13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų");
{
    const filterNegativeNumbers = (arr) => {
        return arr.filter((x) => x <= 0);
    };
    const array = [7, 10, -25, 6, -9, 0];
    console.log(filterNegativeNumbers(array));
}
console.groupEnd();
console.group("14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų");
{
    const filterEvenNumbers = (arr) => {
        return arr.filter((x) => x % 2 === 0);
    };
    const array = [7, 10, -25, 6, -9];
    console.log(filterEvenNumbers(array));
}
console.groupEnd();
console.group("15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų");
{
    const filterUnevenNumbers = (arr) => {
        return arr.filter((x) => x % 2 !== 0);
    };
    const array = [7, 10, -25, 6, -9, 0];
    console.log(filterUnevenNumbers(array));
}
console.groupEnd();
console.group("16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų");
{
    const changeToPositiveNumbers = (arr) => {
        return arr.map((x) => x < 0 ? x * -1 : x);
    };
    const array = [7, 10, -25, 6, -9, 0];
    console.log(changeToPositiveNumbers(array));
}
console.groupEnd();
//# sourceMappingURL=main.js.map