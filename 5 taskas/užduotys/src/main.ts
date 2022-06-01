type Person = {
  readonly name: string;
  readonly surname: string;
  readonly sex: "male" | "female";
  age: number;
  income?: number;
  married?: boolean;
  hasCar?: boolean;
};

const people: Person[] = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus
  
  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)
    
*/
console.groupCollapsed("1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą");
{
  // Tipai:
  type Identity = {
    name: Person["name"];
    surname: Person["surname"];
  };

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => {
    return { name, surname };
  };

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed(
  "2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą."
);
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, "hasCar" | "married">;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed("3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais");
{
  type Married = {
    name: Person["name"];
    surname: Person["surname"];
    married: Person["married"];
  };

  const filterPeople = ({ name, surname, married }: Person): Married => ({
    name,
    surname,
    married,
  });
  const result: Married[] = people.map(filterPeople);
  console.log(result);
  console.log(people);
}
console.groupEnd();

console.groupCollapsed("4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą");
{
  type Rich = {
    name: Person["name"];
    surname: Person["surname"];
    income: Person["income"];
  };

  const mapPeopleMoney = ({ name, surname, income }: Person): Rich => ({
    name,
    surname,
    income,
  });

  const result2: Rich[] = people.map(mapPeopleMoney);
  console.log(result2);
}
console.groupEnd();

console.groupCollapsed("5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą");
{
  type Gender = {
    name: Person["name"];
    surname: Person["surname"];
    sex: Person["sex"];
  };

  const mapPeopleGender = ({ name, surname, sex }: Person): Gender => ({
    name,
    surname,
    sex,
  });

  const result3: Gender[] = people.map(mapPeopleGender);
  console.log(result3);
}
console.groupEnd();

console.groupCollapsed("6. Atspausdinkite visus vyrus");
{
  type Male = Omit<Person, "sex"> & {
    sex: "male";
  };

  const isMale = ({ sex }: Person): boolean => sex === "male";

  const males: Male[] = people.filter(isMale) as Male[];

  console.log(males);
}
console.groupEnd();

console.groupCollapsed("7. Atspausdinkite visas moteris");
{
  type Female = Omit<Person, "sex"> & {
    sex: "female";
  };

  const isFemale = ({ sex }: Person): boolean => sex === "female";

  const females: Female[] = people.filter(isFemale) as Female[];

  console.log(females);
}
console.groupEnd();

console.groupCollapsed("8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas");
{
  type Identity = {
    name: Person["name"];
    surname: Person["surname"];
  };
  const hasCar = ({ hasCar }: Person): boolean => Boolean(hasCar);

  const createIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  const peopleHasCars: Person[] = people.filter(hasCar);
  const identities: Identity[] = peopleHasCars.map(createIdentity);

  console.log(identities);
}
console.groupEnd();

console.groupCollapsed("9. Atspausdinkite žmones kurie yra susituokę");
{
  type Identity = {
    name: Person["name"];
    surname: Person["surname"];
  };

  const isMarried = ({ married }: Person): boolean => Boolean(married);

  const createIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  const peopleIsMarried: Person[] = people.filter(isMarried);
  const identities: Identity[] = peopleIsMarried.map(createIdentity);

  console.log(identities);
}
console.groupEnd();

console.groupCollapsed("10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį");
{
  type CarOwnerCountBySex = {
    [Key in Person["sex"]]?: number;
  };

  const groupCarOwnersBySexReducer = (result: CarOwnerCountBySex, person: Person): CarOwnerCountBySex => {
    if (!person.hasCar) return result;

    if (!result[person.sex]) result[person.sex] = 0;

    result[person.sex] = (result[person.sex] as number) + 1;

    return result;
  };

  const groupedPeopleBySex: CarOwnerCountBySex = people.reduce(groupCarOwnersBySexReducer, {});

  console.log(groupedPeopleBySex);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  type PersonIncome = Omit<Person, "income"> & {
    salary?: Person["income"];
  };

  const convertToSalary = ({ income, ...person }: Person): PersonIncome => {
    const result: PersonIncome = { ...person };

    if (income) result.salary = income;

    return result;
  };

  const peopleSalary: PersonIncome[] = people.map(convertToSalary);

  console.log(peopleSalary);
}
console.groupEnd();

console.groupCollapsed("12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės");
{
  type Anonymous = Omit<Person, "name" | "surname" | "sex">;

  const createAnonymous = ({ name, surname, sex, ...anonPerson }: Person): Anonymous => anonPerson;

  const anonymous: Anonymous[] = people.map(createAnonymous);

  console.log(anonymous);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  type Fullname = Omit<Person, "name" | "surname"> & {
    readonly fullname: string;
  };

  const createFullname = ({ name, surname, ...rest }: Person): Fullname => ({
    ...rest,
    fullname: name + " " + surname,
  });

  const fullname: Fullname[] = people.map(createFullname);

  console.log(fullname);
}
console.groupEnd();
