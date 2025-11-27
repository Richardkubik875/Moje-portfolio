// Získáme referenci na výstupní element
const vystupElement = document.getElementById('vystup');
let vystupText = ''; // Zde budeme hromadit výstupy

// Funkce pro přidání řádku do výstupu
function pridejVystup(text) {
vystupText += text + '\n';
}

function spustitCviceni() {
    if (true) {
        let x = 100;
        console.log("Uvnitř bloku:", x); 
    }

    console.log("Mimo blok:", x);

vystupText = ''; // Vynulujeme výstup při každém spuštění

// --- A) Proměnné ---

let a = 10;
const b = "20";
// var c = true; // Záměrně nepoužíváme var

pridejVystup("--- A) Proměnné a Typy ---");
pridejVystup(`Proměnná a: ${a}, Typ: ${typeof a}`); // number
pridejVystup(`Proměnná b: ${b}, Typ: ${typeof b}`); // string

// Zkusíme změnit hodnotu 'let'
a = a + 5;
pridejVystup(`Nová hodnota a po změně: ${a}`); // 15

// Zkusíme změnit hodnotu 'const' - tohle by způsobilo chybu
// b = "30";

// --- B) Přetypování ---

pridejVystup("\n--- B) Přetypování ---");

// 1. String na Number
const cisloB = Number(b); // "20" se převede na 20
pridejVystup(`Přetypovaná b (Number): ${cisloB}, Typ: ${typeof cisloB}`);
pridejVystup(`Součet a + cisloB: ${a + cisloB}`); // 15 + 20 = 35

// 2. Implicitní přetypování
const soucetText = a + b; // 15 + "20" = "1520" (String)
pridejVystup(`a + b (implicitní): ${soucetText}, Typ: ${typeof soucetText}`);

// --- C) Funkce ---

pridejVystup("\n--- C) Funkce ---");

// Volání funkce, která vrací hodnotu
const soucin = vynasobit(5, 7);
pridejVystup(`Výsledek funkce vynasobit(5, 7): ${soucin}`); // 35

// Volání funkce, která nic nevrací (procedura)
vypisHeslo("Uspěšně spuštěno!");

// Zobrazení všech shromážděných výstupů na stránce
vystupElement.textContent = vystupText;
}

// Funkce (vlastní metoda), která vrací hodnotu

function vynasobit(x, y) {
return x * y; // Vrací výsledek
}

// Funkce (procedura), která nic nevrací (jen provádí akci)
function vypisHeslo(text) {
// Použijeme už existující pridejVystup, aby se to zobrazilo na webu
pridejVystup(`Heslo ze zkušební funkce: ${text}`);
// Tato funkce explicitně nevrací nic (vrátí undefined)
}

console.log(parseInt("42abc")); // 42
console.log(Number("42abc"));   // NaN

const PI = 3.14159;

function spocitejObvod(polomer) {
    return 2 * PI * polomer;
}

// Ukázka použití:
console.log(spocitejObvod(5)); // 31.4159
