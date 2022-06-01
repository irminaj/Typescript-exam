/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau 
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = "Grace" as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
// const formAddUser: HTMLFormElement = document.querySelector("#form-add-user") as HTMLFormElement;
// formAddUser.onsubmit = (e) => {
//   e.preventDefault();
//   console.log("Ateityje pridėsiu vartotoją");
// };

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group("Assertions - užduotys");
{
  const btn: HTMLButtonElement = document.querySelector("#button") as HTMLButtonElement;

  const squareContainer: HTMLDivElement = document.querySelector("#sq-container") as HTMLDivElement;

  const paragraphElement: HTMLParagraphElement = document.querySelector("#count-container") as HTMLParagraphElement;

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("paspausta");
    });
  }
  console.groupEnd();

  console.group("2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas");
  {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const sq: HTMLSpanElement = document.createElement("span");
      squareContainer.append(sq);
      sq.classList.add("sq");
    });
  }
  console.groupEnd();

  console.group("3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje");
  {
    let sqCount: number = 0;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      sqCount++;
      paragraphElement.innerHTML = `Kvadratu skaicius ${sqCount}`;
    });
  }
  console.groupEnd();
}
console.groupEnd();
