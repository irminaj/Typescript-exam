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

console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai i?? j?? sukurkite setterius, ir bendr?? getter?? fullname');
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

console.group('2. Sukurkite Person klasei savyb?? "age". Inkapsuliuokite ??i?? savyb?? taip, jog reik??m?? gal??t?? b??ti tik sveiki skai??iai nuo 1 iki 150');
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

console.group('3. Sukurkite Person klasei savyb?? "height" kurios vert?? b??t?? saugoma centimetrais. Sukurkite ??iai savybei setter??, kuris pirmu parametru priimt?? reik??m??, o antru parametru priimt?? matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras n??ra perduotas, numatytas(default) matavimo vienetas turi b??ti cm. Getteris turi gr????inti reik??m?? centimetrais.');
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
 

  

console.group('4. Sukurkite Person klasei statin?? savyb?? "heightUnits". Jos tipas turi b??ti i??vardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reik??m?? turi b??ti centimetrai');
{
  console.log('Person klas??s statin??s savyb??s:');
  console.dir({ ...Person });

  console.log('Kei??iami matavimo vienetai ??:', HeightUnits.INCHES);
  Person.heightUnits = HeightUnits.INCHES;
  console.log('Person klas??s statin??s savyb??s:');
  console.dir({ ...Person });

  console.log('Kei??iami matavimo vienetai ??:', HeightUnits.METRES);
  Person.heightUnits = HeightUnits.METRES;
  console.log('Person klas??s statin??s savyb??s:');
  console.dir({ ...Person });
}
console.groupEnd();
console.log('');

console.group('5. "height" setterio antram parametrui pakeiskite s??jungos tip?? ?? [4.] u??duotyje sukurt?? i??vardinim??(enum). Priderinkite pavyzd??ius ir metod??.');

console.group('6. "height" geteriui sukurkite logik??, jog jis gr????int?? matavimo vienetus, pagal statin??s savyb??s "heightUnits" reik??m??.');
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

console.group('7. Analogi??kai pagal [4.]-[6.] punktus sukurkite savyb?? weight su statiniu i??vardinimu "weightUnits", kurio pasirinkimai turi b??ti: "KG", "LBS"');
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

console.group('8. Sukurkite klasei Person metod?? "toString". Kuris paverst?? ??mogaus savybes gra??iu formatu: vardas ir pavard?? pirmoje eilut??je, o "height" ir "weight" savyb??s atskirose eilut??se, atitrauktos nuo kairio kra??to per "tab" simbol??, ir su matavimo vienetais(kurie i??saugoti) statin??se Person klas??s savyb??se');
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