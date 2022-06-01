"use strict";
console.groupCollapsed("1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7");
{
    const sortDrinks = (drink1, drink2) => {
        return drink1.price - drink2.price;
    };
    const sortedDrinks = (drinks) => {
        return [...drinks].sort(sortDrinks);
    };
    const beverages = [
        { name: "pepsi", price: 3 },
        { name: "juice", price: 4 },
        { name: "cacao", price: 2 },
    ];
    console.log(sortedDrinks(beverages));
}
console.groupEnd();
console.groupCollapsed("2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau");
{
    const createObject = (object, name, value) => (Object.assign(Object.assign({}, object), { [name]: value }));
    const arg1 = [{}, "Brutus", 300];
    const arg2 = [{ piano: 500 }, "Brutus", 400];
    const arg3 = [{ piano: 500, stereo: 300 }, "Caligula", 440];
    const pair1 = createObject(...arg1);
    const pair2 = createObject(...arg2);
    const pair3 = createObject(...arg3);
    console.log(arg1, pair1);
    console.log(arg2, pair2);
    console.log(arg3, pair3);
}
console.groupEnd();
//# sourceMappingURL=main.js.map