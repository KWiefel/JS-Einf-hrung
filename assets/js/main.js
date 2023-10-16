// ==============  Intro-Level-1_3

const lastName = "Johnson";
const j = 2;
const status = true;
const hello = "hello";
const helloWorld = "hello";

console.log(typeof lastName);
console.log(typeof j);
console.log(typeof status);
console.log(typeof hello);
console.log(typeof helloWorld);

// =============  Intro-Level-1_4

const name = "John";
const number = 3.14;
const error = NaN;
const boolean = false;
const numberAgain = [1, 2, 3, 4];
const different = { name: "John", age: 34 };
const date = new Date();
// const error = function () {};
const zero = null;
const idn = 3 + 2 == 5;
const iwn = 3 + "3";

console.log(typeof name);
console.log(typeof number);
console.log(typeof error);
console.log(typeof boolean);
console.log(typeof numberAgain);
console.log(typeof different);
console.log(typeof date);
console.log(typeof zero);
console.log(typeof idn);
console.log(typeof iwn);

// =================== Intro-Level-1_7

const helloWorldAgain = "Hello World";
let pi = 3.14;
const burjDubai = 828;
const fullName = "Jan Schmidt";
const eifeltower = 324;
const camelCase = "camelCase";
let kursstatus = true;

// =================== Variablen-Level-1_5

const carName = "BMW";
console.log(carName);

// const x = 150;
// console.log(x);

// const y = 50;
// console.log(y);

// const z = x + y;
// console.log(z);

const firstName = "John";
const lastNameAgain = "Doe";
const age = 35;

console.log(firstName + lastNameAgain + age);

// =================== Variablen-Level-1_6

// let x1 = 34;
// x1 = 67;
// console.log(x1);

// const y1 = 34;
// y1 = 67;
// console.log(y1);

// ================= Intro-Level-1_8

// Deklariere die Variablen x = 20 und y = 30. Für diese Variablen sollst du nun arithmetische Operatoren verwenden.
const x = 20;
const y = 30;
// Addiere x und y und gib das Ergebnis in der Konsole aus.
console.log(x + y);
// Subtrahiere y von x und zeige das Ergebnis in der Konsole. Dann subtrahiere x von y und gib das Ergebnis in der Konsole aus.
console.log(x - y);
console.log(y - x);
// Multipliziere x und y und gib das Ergebnis in der Konsole aus.
console.log(x * y);
// Teile x durch y und gib das Ergebnis in der Konsole aus.
console.log(x / y);
// Deklariere eine weitere Variable z mit dem Wert 10. Multipliziere x und y. Teile dann das Ergebnis durch z. Speichere das Ergebnis in einer neuen Variablen namens resultOne.
const z = 10;

const resultOne = (x * y) / z;
console.log(resultOne);

// Weiter gehts mit zwei weiteren Variablen a und b. Die Variable a hat den Wert 15 und b den Wert 9. Nutze auch hier für die folgenden Beispiele arithmetische Operatoren.
let a = 15;
let b = 9;

// Zeige den Rest an, wenn a durch b geteilt wird. Nutze Remainder(%), auch Modulus Operator genannt.
console.log(a % b);
// Deklariere eine weitere Variable c mit dem Wert 20. Addiere a und b und multipliziere das Ergebnis mit c. Speichere das Ergebnis in der Variable resultTwo. Gib resultTwo in der Konsole aus.
const c = 20;

const resultTwo = (a + b) * c;
console.log(resultTwo);

// Inkrementiere a. Gib das Ergebnis in der Konsole aus.
a++;
console.log(a);

// Dekrementiere b. Gib das Ergebnis in der Konsole aus.
b--;
console.log(b);
// Subtrahiere b von a und speichere das Ergebnis in einer neuen Variablen resultThree.
const resultThree = a - b;
console.log(resultThree);
// Gib den Rest aus wenn resultOne durch resultTwo geteilt wird in der Konsole aus. Nutze den Remainder(%) bzw. Modulu-Operator.
console.log(resultOne % resultTwo);

// ====================== Intro-Level-1_12

// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);
// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);
// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);
// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);
// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);

// ===================== String-Methods-Level-1_11

let x2 = "Hello";
let y2 = "World";

const z2 = x2 + y2;
document.write(z2 + "<br>");

const n = x2 + " " + y2;
document.write(n + "<br>");

document.write(x2 + " World" + "<br>");

const meinString = "Ich bin Erste:r";
const meinStringAdd = " Ich komme auf Platz zwei";

document.write(meinString + meinStringAdd);
console.log(meinString + meinStringAdd);

// ================ Output-Level-1_4

// window.alert("Hallo Welt");
// window.prompt("Bitte geben Sie Ihren Namen ein.");
// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
// window.confirm("Stimmen Sie meiner Meinung zu?");

// let alter = window.prompt("Gib mir bitte dein Alter:");
// console.log(alter);

// let b2 = 5;
// let a2 = b * 5 - 3;
// window.alert(a2);

// let mann = "Robert Wadlow ist der größte Mann der Welt : ";
// let grosse = "2,72m";
// window.confirm(mann + grosse);
