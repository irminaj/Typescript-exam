console.groupCollapsed("1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7");
{
  type Drink = {
    name: string;
    price: number;
  };

  const sortDrinks = (drink1: Drink, drink2: Drink): number => {
    return drink1.price - drink2.price;
  };

  const sortedDrinks = (drinks: Array<Drink>): Array<Drink> => {
    return [...drinks].sort(sortDrinks);
  };

  const beverages: Drink[] = [
    { name: "pepsi", price: 3 },
    { name: "juice", price: 4 },
    { name: "cacao", price: 2 },
  ];

  console.log(sortedDrinks(beverages));
}
console.groupEnd();

console.groupCollapsed("2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau");
{
  type stolenItem = {
    [key: string]: number;
  };

  const createObject = (object: stolenItem, name: string, value: number): stolenItem => ({
    ...object,
    [name]: value,
  });

  type createObjectArg = [stolenItem, string, number];

  const arg1: createObjectArg = [{}, "Brutus", 300];
  const arg2: createObjectArg = [{ piano: 500 }, "Brutus", 400];
  const arg3: createObjectArg = [{ piano: 500, stereo: 300 }, "Caligula", 440];

  const pair1: stolenItem = createObject(...arg1);
  const pair2: stolenItem = createObject(...arg2);
  const pair3: stolenItem = createObject(...arg3);

  console.log(arg1, pair1);
  console.log(arg2, pair2);
  console.log(arg3, pair3);

}
console.groupEnd();
