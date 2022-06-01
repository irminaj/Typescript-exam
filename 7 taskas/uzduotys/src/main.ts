/*
  1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui

  

  2. Sukurkite sąrašo klasę List.
    * Klasė turi privačias turėti savybes
      * head -> nuoroda į sąrašo pirmajį mazgą
      * taip -> nuoroda į sąrašo paskutinijė mazgą
    * Sukurkite konstruktorių, jog jis galėtų priimti pirmu parametru perduotą ListNode elementą ir priskirti
    jį savybėms List.head ir List.tail
    Konstruktoriaus ListNode tipo parametras neprivalomas. Neperdavus parametro, List klasės objekto savybės tail ir head turi būti null

  3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             d -> a -> b -> c

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  4. Sukurkite metodą pridėti sąrašo elementui į sąrašo galą.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             a -> b -> c -> d

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją - callback
  su kiekvieno mazgo reikšme pradedant List.head ir baigiant List.tail
    * ForEachCallback tipas: (value: T) => void
    * List.forEach tipas: ( callback: ForEachCallback) => void)
*/

// ↓↓↓ Tipai ↓↓↓
type ListNode<Type> = {
  data: Type;
  next: ListNode<Type> | null;
};

type ForEachCallback<Type> = (value: Type) => void;
// ↑↑↑ Tipai ↑↑↑

// ↓↓↓ Klasės ↓↓↓
class List<Type> {
  private head: ListNode<Type> | null;
  private tail: ListNode<Type> | null;

  constructor(myNode?: ListNode<Type>) {
    if (myNode !== undefined) {
      this.head = myNode;
      this.tail = myNode;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  private createFirstElement = (node: ListNode<Type>) => {
    this.head = node;
    this.tail = node;
  };

  public createNodeStart = (node: ListNode<Type>): void => {
    if(this.head === null) {
      this.createFirstElement(node);
    } else {
      node.next = this.head;
      this.head = node;
    }
  };

  public createNodeEnd = (node: ListNode<Type>): void => {
    if(this.tail === null) {
      this.createFirstElement(node);
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  public forEach = (callback: ForEachCallback<Type>): void => {
    if (this.head === null)
    return;

    let presentNode: ListNode<Type> = this.head;

    while(true) {
      callback(presentNode.data);
      if(presentNode.next === null) break;
      presentNode = presentNode.next;
    }
  }
}

// ↑↑↑ Klasės ↑↑↑

// ↓↓↓ Kintamuosius skirtus pavyzdžiams saugokite čia ↓↓↓
const node1: ListNode<number> = {data: 1, next: null};
const node2: ListNode<number> = {data: 15, next: node1};


const number: ListNode<number> = { data: 9, next: null}
const numberList: List<number> = new List();


const addedNumber1: ListNode<number> = {data: 10, next: null};
const addedNumber2: ListNode<number> = {data: 20, next: null};

const stringList: List<string> = new List();

const addedString1: ListNode<string> = {data: 'Hello', next: null}
const addedString2: ListNode<string> = {data: "Goodbye", next: null}


// ↑↑↑ Kintamuosius skirtus pavyzdžiam saugokite čia ↑↑↑

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
 console.log({...numberList}) 

 numberList.createNodeStart(addedNumber2);
 console.log({...numberList})


 stringList.createNodeStart(addedString1);
 console.log({...stringList}) 

 stringList.createNodeStart(addedString2);
 console.log({...stringList})
}
console.groupEnd();

console.group("4. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.");
{
numberList.createNodeEnd(addedNumber1);
 console.log({...numberList}) 

 numberList.createNodeEnd(addedNumber2);
 console.log({...numberList})

}
console.groupEnd();

console.group("5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją");
{

  stringList.forEach((string) => console.log(string));

}
console.groupEnd();
