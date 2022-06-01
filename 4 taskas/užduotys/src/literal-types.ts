/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

const req1 = {
  url: 'https://tavo-veidas.lt',
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

const req2 = {
  url: 'https://tavo-veidas.lt/api/',
  headers: {
    'Authorization': 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
    'Content-Type': 'application/json',
  },
  body: {
    image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
  },
  method: 'POST',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  type Berlin = 'Berlin';
  type Hamburg = 'Hamburg';
  type Munich = 'Munich';
  type Cologne = 'Cologne';
  type Frankfurt = 'Frankfurt';
  type GermanyCity = Berlin | Hamburg | Munich | Cologne | Frankfurt;

  type GermanSheperd = 'German Shper';
  type Pug = 'Pug';
  type GoldenRetriever = 'Golden Retvier';
  type BorderCollie = 'Border Collie';
  type AmericanAkita = 'American Akita';
  type DogBreeds = GermanSheperd | Pug | GoldenRetriever | BorderCollie | AmericanAkita;

  type Žibintai = "Žibintai";
  type Pakaba = "Pakaba";
  type Stabdžiai = "Stabdžiai";
  type Variklis = "Variklis";
  type Valytuvai = "Valytuvai"
  type AutomobilioDalys = Žibintai | Pakaba | Stabdžiai | Variklis | Valytuvai;

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    const type1: GermanyCity = 'Berlin';
    console.log(type1);
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    const dog: DogBreeds = 'Pug';
    console.log(dog);
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    const automobilioDalys: AutomobilioDalys[] = ['Valytuvai', 'Pakaba', 'Stabdžiai'];
    console.log(automobilioDalys);
  }
  console.groupEnd();

}
console.groupEnd();



