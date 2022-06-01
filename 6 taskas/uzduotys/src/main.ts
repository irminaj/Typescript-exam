type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/

console.group("1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.");
{
  const getFirstElement = <Type>(arr: Type[]): Type => {
    return arr[0];
  };

  console.log(getFirstElement<number>([1, 5, 6, 9]));
}
console.groupEnd();

console.group("2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.");
{
  const getLastElement = <Type>(arr: Type[]): Type => {
    const lastElement = arr[arr.length - 1];
    return lastElement;
  };

  console.log(getLastElement<string>(["Hello", "2", "5"]));
  console.log(getLastElement<number>([1, 4, 6, 10]));
}
console.groupEnd();

console.group("3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją");
{
  const getPrimitiveElement = <Type extends PrimitiveType>(arr: Type[]): Type[] => {
    const copy: Type[] = arr.map((x) => x);
    return copy;
  };

  console.log(getPrimitiveElement<number>([1, 3, 5, 6, 19]));
}
console.groupEnd();

console.group(
  "4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru"
);
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]
  // Sprendimas ir rezultatų spausdinimas

  type Argument = [PrimitiveType, number];

  const multiplyArr = <T extends PrimitiveType>(value: T, count: number): Array<T> => {
    return Array.from(new Array(count)).map((_) => value);
  };

  const sample: Argument[] = [
    ["a", 2],
    [77, 4],
    [true, 1],
  ];

  sample.forEach((args) => console.log(`solution(${args.join(", ")})`, multiplyArr(...args)));
}
console.groupEnd();

console.group("5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą");
{
  type Argument<T> = [T[], T[]];

  const myFunc = <Type>(arr1: Type[], arr2: Type[]): Type[] => {
    return [...arr1, ...arr2];
  };

  const argument1: Argument<string> = [
    ["my", "name"],
    ["your", "name"],
  ];
  const argument2: Argument<number> = [
    [3, 5],
    [17, 89],
  ];

  console.log(myFunc(...argument1));
  console.log(myFunc(...argument2));
}
console.groupEnd();

console.group(
  '6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.'
);
{
  type IncapsulatedValueObject<Type> = {
    setValue: (newValue: Type) => void;
    getValue: () => Type;
  };

  const myFunc = <Type>(initialValue: Type): IncapsulatedValueObject<Type> => {
    let value: Type = initialValue;

    return {
      setValue: (newValue) => (value = newValue),
      getValue: () => value,
    };
  };

  const value1: number = 90;
  const value2: Array<string> = ["Cat", "Dog", "Hamster"];
  const value3: { name: string; surname: string } = { name: "Don", surname: "Donson" };

  const obj1 = myFunc(value1);
  const obj2 = myFunc(value2);
  const obj3 = myFunc(value3);

  console.log("initial values");
  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue(),
  });

  console.log("changing values...");
  obj1.setValue(10);
  obj2.setValue(["Changed"]);
  obj3.setValue({ name: "Hello", surname: "Bye" });
}
console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string;
    surname: string;
  };

  type Student = Person & {
    university: string;
    course: number;
  };

  type GroupedPeople = {
    people: Person[];
    students: Student[];
    workers: Worker[];
  };

  type Worker = Person & {
    avgMonthlyPay: number;
  };

  const isWorker = (person: Person): person is Worker => {
    return (person as Worker).avgMonthlyPay !== undefined;
  };

  const isStudent = (person: Person): person is Student => {
    const student = person as Student;

    return student.university !== undefined && student.course !== undefined;
  };

  const solution = (people: Person[]): GroupedPeople => {
    const groupedPeople = people.reduce<GroupedPeople>(
      (prevGroupedPeople, person) => {
        const newGroupedPeople = { ...prevGroupedPeople };

        if (isWorker(person)) newGroupedPeople.workers.push(person);
        if (isStudent(person)) newGroupedPeople.students.push(person);
        else newGroupedPeople.people.push(person);

        return newGroupedPeople;
      },
      {
        people: [],
        students: [],
        workers: [],
      }
    );

    return groupedPeople;
  };

  const people: (Person | Student | Worker)[] = [
    { name: "Ona", surname: "Onaityte", university: "VU MF", course: 5 },
    { name: "Rima", surname: "Rimiene" },
    { name: "Stase", surname: "Stasiene", avgMonthlyPay: 3000 },
    { name: "Jonas", surname: "Jonaitis" },
    { name: "Petras", surname: "Petraitis", avgMonthlyPay: 5000 },
    { name: "Irena", surname: "Ireniene", university: "VDU", course: 3 },
    { name: "Stase", surname: "Stasiene", avgMonthlyPay: 2000 },
  ];

  console.log(solution(people));
}
