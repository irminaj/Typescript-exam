"use strict";
class List {
    constructor(myNode) {
        this.createFirstElement = (node) => {
            this.head = node;
            this.tail = node;
        };
        this.createNodeStart = (node) => {
            if (this.head === null) {
                this.createFirstElement(node);
            }
            else {
                node.next = this.head;
                this.head = node;
            }
        };
        this.createNodeEnd = (node) => {
            if (this.tail === null) {
                this.createFirstElement(node);
            }
            else {
                this.tail.next = node;
                this.tail = node;
            }
        };
        this.forEach = (callback) => {
            if (this.head === null)
                return;
            let presentNode = this.head;
            while (true) {
                callback(presentNode.data);
                if (presentNode.next === null)
                    break;
                presentNode = presentNode.next;
            }
        };
        if (myNode !== undefined) {
            this.head = myNode;
            this.tail = myNode;
        }
        else {
            this.head = null;
            this.tail = null;
        }
    }
}
const node1 = { data: 1, next: null };
const node2 = { data: 15, next: node1 };
const number = { data: 9, next: null };
const numberList = new List();
const addedNumber1 = { data: 10, next: null };
const addedNumber2 = { data: 20, next: null };
const stringList = new List();
const addedString1 = { data: 'Hello', next: null };
const addedString2 = { data: "Goodbye", next: null };
console.group("1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui");
{
    console.log(node1);
    console.log(node2);
}
console.groupEnd();
console.group("2. Sukurkite sąrašo klasę List");
{
    console.log(numberList);
}
console.groupEnd();
console.group("3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.");
{
    numberList.createNodeStart(addedNumber1);
    console.log({ ...numberList });
    numberList.createNodeStart(addedNumber2);
    console.log({ ...numberList });
    stringList.createNodeStart(addedString1);
    console.log({ ...stringList });
    stringList.createNodeStart(addedString2);
    console.log({ ...stringList });
}
console.groupEnd();
console.group("4. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.");
{
    numberList.createNodeEnd(addedNumber1);
    console.log({ ...numberList });
    numberList.createNodeEnd(addedNumber2);
    console.log({ ...numberList });
}
console.groupEnd();
console.group("5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją");
{
    stringList.forEach((string) => console.log(string));
}
console.groupEnd();
//# sourceMappingURL=main.js.map