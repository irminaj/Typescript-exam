"use strict";
console.group("1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.");
{
    const getFirstElement = (arr) => {
        return arr[0];
    };
    console.log(getFirstElement([1, 5, 6, 9]));
}
console.groupEnd();
console.group("2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.");
{
    const getLastElement = (arr) => {
        const lastElement = arr[arr.length - 1];
        return lastElement;
    };
    console.log(getLastElement(["Hello", "2", "5"]));
    console.log(getLastElement([1, 4, 6, 10]));
}
console.groupEnd();
console.group("3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją");
{
    const getPrimitiveElement = (arr) => {
        const copy = arr.map((x) => x);
        return copy;
    };
    console.log(getPrimitiveElement([1, 3, 5, 6, 19]));
}
console.groupEnd();
console.group("4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru");
{
    const multiplyArr = (value, count) => {
        return Array.from(new Array(count)).map((_) => value);
    };
    const sample = [
        ["a", 2],
        [77, 4],
        [true, 1],
    ];
    sample.forEach((args) => console.log(`solution(${args.join(", ")})`, multiplyArr(...args)));
}
console.groupEnd();
console.group("5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą");
{
    const myFunc = (arr1, arr2) => {
        return [...arr1, ...arr2];
    };
    const argument1 = [
        ["my", "name"],
        ["your", "name"],
    ];
    const argument2 = [
        [3, 5],
        [17, 89],
    ];
    console.log(myFunc(...argument1));
    console.log(myFunc(...argument2));
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    const myFunc = (initialValue) => {
        let value = initialValue;
        return {
            setValue: (newValue) => (value = newValue),
            getValue: () => value,
        };
    };
    const value1 = 90;
    const value2 = ["Cat", "Dog", "Hamster"];
    const value3 = { name: "Don", surname: "Donson" };
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
{
    const isWorker = (person) => {
        return person.avgMonthlyPay !== undefined;
    };
    const isStudent = (person) => {
        const student = person;
        return student.university !== undefined && student.course !== undefined;
    };
    const solution = (people) => {
        const groupedPeople = people.reduce((prevGroupedPeople, person) => {
            const newGroupedPeople = { ...prevGroupedPeople };
            if (isWorker(person))
                newGroupedPeople.workers.push(person);
            if (isStudent(person))
                newGroupedPeople.students.push(person);
            else
                newGroupedPeople.people.push(person);
            return newGroupedPeople;
        }, {
            people: [],
            students: [],
            workers: [],
        });
        return groupedPeople;
    };
    const people = [
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
//# sourceMappingURL=main.js.map