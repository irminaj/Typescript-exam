/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ["Koridas", "Atmazas"];
const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => (currentAge += 1)];
const height: UseNumericStateTuple = [
  currentAge,
  (h) => {
    if (h) currentHeight = h;
  },
];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group("Tuples - užduotys");
{
  type PersonTuple = [string, number];

  type Dog = {
    name: string;
    breed: string;
  };

  type DogOwner = {
    name: string;
    age: number;
  };

  type DogAndOwnerTuple = [Dog, DogOwner];
  type TrianglePointTuple = [number, number];
  type TriangleTuple = [TrianglePointTuple, TrianglePointTuple, TrianglePointTuple];

  console.group("1. Sukurkite žmogaus vardo ir amžiaus rinkinį");
  {
    const person1: PersonTuple = ["Ona", 30];
    const person2: PersonTuple = ["Petras", 10];

    console.log(person1);
    console.log(person2);
  }
  console.groupEnd();

  console.group("2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)");
  {
    const dogAndOwner1: DogAndOwnerTuple = [
      {
        name: "Clark",
        breed: "Pug",
      },
      {
        name: "Tom",
        age: 20,
      },
    ];

    const dogAndOwner2: DogAndOwnerTuple = [
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
   const triangle1: TriangleTuple = [[1,2], [2,3], [3,5]];
   const triangle2: TriangleTuple = [[5,6], [7,8], [9,10]];

   console.log(triangle1);
   console.log(triangle2);
  }
  console.groupEnd();
}
console.groupEnd();
