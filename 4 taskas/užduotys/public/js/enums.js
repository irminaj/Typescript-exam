"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
console.group("Literal types - užduotys");
{
    let LithuanianCities;
    (function (LithuanianCities) {
        LithuanianCities["Vilnius"] = "Vilnius";
        LithuanianCities["Kaunas"] = "Kaunas";
        LithuanianCities["Klaip\u0117da"] = "Klaip\u0117da";
        LithuanianCities["\u0160iauliai"] = "\u0160iauliai";
        LithuanianCities["Panev\u0117\u017Eys"] = "Panev\u0117\u017Eys";
    })(LithuanianCities || (LithuanianCities = {}));
    let Population;
    (function (Population) {
        Population["China"] = "China";
        Population["India"] = "India";
        Population["USA"] = "USA";
        Population["Indonesia"] = "Indonesia";
        Population["Pakistan"] = "Pakistan";
    })(Population || (Population = {}));
    let Countries;
    (function (Countries) {
        Countries["USA"] = "USA";
        Countries["China"] = "China";
        Countries["Japan"] = "Japan";
        Countries["Germany"] = "Germany";
        Countries["India"] = "India";
    })(Countries || (Countries = {}));
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
//# sourceMappingURL=enums.js.map