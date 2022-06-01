/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams. 
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
}

// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
enum Answer {
  No, // 0
  Yes, // 1
}

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = "pirmadienis",
  Tuesday = "antradienis",
  Wednesday = "trečiadienis",
  Thursday = "ketvirtadienis",
  Friday = "penktadienis",
  Saturday = "šeštadienis",
  Sunday = "sekmadienis",
}

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group("Literal types - užduotys");
{
  enum LithuanianCities {
    Vilnius = "Vilnius",
    Kaunas = "Kaunas",
    Klaipėda = "Klaipėda",
    Šiauliai = "Šiauliai",
    Panevėžys = "Panevėžys",
  }

  enum Population {
    China = "China",
    India = "India",
    USA = "USA",
    Indonesia = "Indonesia",
    Pakistan = "Pakistan",
  }

  enum Countries {
    USA = "USA",
    China = "China",
    Japan = "Japan",
    Germany = "Germany",
    India = "India",
  }

  console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
  {
    console.log(LithuanianCities.Kaunas);
  }
  console.groupEnd();

  console.group("2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.");
  {
    console.log(Population.Pakistan);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    console.log(Countries.China, "and", Countries.Japan);
  }
  console.groupEnd();
}
console.groupEnd();
