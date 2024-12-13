// Här nedan kan ni klistra in den kod ni får av AI verktygen

// Stegen - Tärningsspelet i JavaScript AIZO

// Funktion för att slumpa ett tärningskast
/*Slumpa ett tal mellan 1 och 6
}

// Huvudfunktion för spelet
function spelaStegen() {
    let måltal = 1; // Börja med att försöka få siffran 1
    let antalKast = 0; // Räknar det totala antalet kast
    const MAX_TAL = 6; // Sista måltalet i stegen

    console.log("Spelet börjar! Försök att bygga stegen: 1, 2, 3, 4, 5, 6.");

    // Så länge vi inte har nått sista måltalet
    while (måltal <= MAX_TAL) {
        const kast = kastaTärning(); // Kasta tärningen
        antalKast++; // Öka antal kast
        console.log(`Kast ${antalKast}: Du fick ${kast}. Måltal är ${måltal}.`);

        // Kontrollera om kastet matchar måltalet
        if (kast === måltal) {
            console.log(
                `Du slog rätt! Gå vidare till nästa steg (${måltal + 1}).`
            );
            måltal++; // Öka måltalet för nästa steg
        } else {
            console.log(`Du slog fel, försök igen.`);
        }
    }

    // När spelet är klart, logga resultatet
    console.log("Stegen avslutad!");
    console.log(`Totalt antal kast för att klara stegen: ${antalKast}`);
}

// Kör spelet
spelaStegen();
*/
/*
let currentNumber = 1;
let rollCount = 0;

while (currentNumber <= 6) {
    // Simulera ett tärningskast
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    rollCount++;

    // Logga resultatet av varje kast
    console.log(`Kast ${rollCount}: Du rullade en ${diceRoll}`);

    // Kontrollera om kastet matchar det nuvarande målet
    if (diceRoll === currentNumber) {
        console.log(`Du nådde målet: ${currentNumber}`);
        currentNumber++;
    }
}

console.log(`Totalt antal kast: ${rollCount}`);
*/
