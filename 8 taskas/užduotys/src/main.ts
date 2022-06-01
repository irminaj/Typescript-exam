enum HeightUnits {
  CENTIMETRES = 'cm',
  METRES = 'm',
  INCHES = 'in',
}

enum WeightUnits {
  KG = 'kg',
  LBS = 'lbs',
}

type PersonDescription = {
  name: string,
  surname: string,
  age: number,
  height: number,
  weight: number,
  heightUnits?: HeightUnits,
  weightUnits?: WeightUnits,
};

class Person {
  static heightUnits: HeightUnits = HeightUnits.CENTIMETRES;

  static weightUnits: WeightUnits = WeightUnits.KG;

  private name: string;

  private surname: string;

  private age?: number;

  private height?: number;

  private weight?: number;

  constructor({
    name, surname, age, height, heightUnits, weight, weightUnits,
  }: PersonDescription) {
    this.name = name;
    this.surname = surname;
    this.setAge(age);
    this.setHeight(height, heightUnits);
    this.setWeight(weight, weightUnits);
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setSurname(surname: string): void {
    this.surname = surname;
  }

  public setAge(age: number): void {
    if (age < 1 || age > 150) {
      console.error(`Amzius ivestas neteisingai, '${age}' reiksme turi buti intervale: [1; 150].`);
      return;
    }
    if (age % 1 !== 0) {
      console.error(`Amzius ivestas neteisingai, '${age}' reiksme turi buti sveikasis skaicius.`);
      return;
    }
    this.age = age;
  }

  public setHeight(height: number, units?: HeightUnits): void {
    switch (units) {
      case HeightUnits.CENTIMETRES: this.height = height; break;
      case HeightUnits.METRES: this.height = height * 100; break;
      case HeightUnits.INCHES: this.height = height * 2.54; break;
      default: this.height = height;
    }
  }

  public setWeight(weight: number, units?: WeightUnits): void {
    switch (units) {
      case WeightUnits.KG: this.weight = weight; break;
      case WeightUnits.LBS: this.weight = weight / 2.20462262; break;
      default: this.weight = weight;
    }
  }

  public getAge(): Person['age'] {
    return this.age;
  }

  public getHeight(): number {
    if (this.height === undefined) return 0;

    let value;
    switch (Person.heightUnits) {
      case HeightUnits.CENTIMETRES: value = this.height; break;
      case HeightUnits.METRES: value = this.height / 100; break;
      case HeightUnits.INCHES: value = this.height / 2.54; break;
      default: value = this.height;
    }

    return Math.round(value * 100) / 100;
  }

  public getWeight(): number {
    if (this.weight === undefined) return 0;

    let value;
    switch (Person.weightUnits) {
      case WeightUnits.KG: value = this.weight; break;
      case WeightUnits.LBS: value = this.weight * 2.20462262; break;
      default: value = this.weight;
    }

    return Math.round(value * 10) / 10;
  }

  public getFullname(): string {
    return `${this.name} ${this.surname}`;
  }

  public toString(): string {
    let formattedPerson = `${this.name} ${this.surname}\n`;
    formattedPerson += `\theight: ${this.getHeight()} ${Person.heightUnits}\n`;
    formattedPerson += `\tweight: ${this.getWeight()}   ${Person.weightUnits}\n`;

    return formattedPerson;
  }
}

console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
  const person: Person = new Person({
    name: 'Ona',
    surname: 'Pukiene',
    age: 60,
    height: 160,
    weight: 60,
  });

  console.log(person.getFullname());
}
console.groupEnd();
console.log('');

console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
  const person1: Person = new Person({
    name: 'Lina',
    surname: 'Vaitkiene',
    age: 4000,
    height: 176,
    weight: 70,
  });
  
  console.log(person1)
}
console.groupEnd();
console.log('');

console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
  const person1description: PersonDescription = {
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 60,
    height: 180,
    weight: 90,
  };

  const person2description: PersonDescription = {
    name: 'Petras',
    surname: 'Petraitis',
    age: 40,
    height: 70,
    weight: 80,
    heightUnits: HeightUnits.INCHES,
  };


  const person1: Person = new Person(person1description);
  const person2: Person = new Person(person2description);

  console.log(person1);
  console.log(person2)
 

  

console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
  console.log('Person klasės statinės savybės:');
  console.dir({ ...Person });

  console.log('Keičiami matavimo vienetai į:', HeightUnits.INCHES);
  Person.heightUnits = HeightUnits.INCHES;
  console.log('Person klasės statinės savybės:');
  console.dir({ ...Person });

  console.log('Keičiami matavimo vienetai į:', HeightUnits.METRES);
  Person.heightUnits = HeightUnits.METRES;
  console.log('Person klasės statinės savybės:');
  console.dir({ ...Person });
}
console.groupEnd();
console.log('');

console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');

console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
  const person: Person = new Person({
    name: 'Algis',
    surname: 'Algirdaitis',
    age: 20,
    height: 190,
    weight: 80,
  });

console.log(person)

  Person.heightUnits = HeightUnits.CENTIMETRES;
  console.log('Ugis', person.getHeight(), HeightUnits.CENTIMETRES);
}
console.groupEnd();
console.log('');

console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
  const person: Person = new Person({
    name: 'Algis',
    surname: 'Algirdaitis',
    age: 20,
    height: 190,
    weight: 80,
  });

  console.log(person)

  Person.weightUnits = WeightUnits.KG;
  console.log('Svoris', person.getWeight(), WeightUnits.KG);

}
console.groupEnd();
console.log('');

console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
{}

  Person.heightUnits = HeightUnits.METRES;
  Person.weightUnits = WeightUnits.KG;
  console.log('European Standard');
  console.log(person1.toString());
  console.log(person2.toString());

  Person.heightUnits = HeightUnits.INCHES;
  Person.weightUnits = WeightUnits.LBS;
  console.log('American Standard');
  console.log(person1.toString());
  console.log(person2.toString());
}