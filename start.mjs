import { createInterface } from 'readline';
let choice = 0;
let d = 0;
let s = 0;

const pseudoprimes = [

    /*
    List of all known composite strong
    probable primes less than 20,000.
    This can be found at:
    https://t5k.org/glossary/page.php?sort=StrongPRP
    */

    2047, 3277, 4033, 4681, 8321, 15841, 121, 703, 1891, 3281, 8401, 8911, 10585,
    12403, 16531, 18721, 19345, 781, 1541, 5461, 5611, 7813, 13021, 14981, 15751,
    25, 325, 703, 2101, 2353, 4525, 11041, 14089, 133, 793, 2047, 4577, 5041,
    12403, 13333, 14521, 17711, 85, 1099, 5149, 7107, 8911, 9637, 13019, 14491,
    17803, 19757, 9, 91, 145, 781, 1111, 2821, 4033, 4187, 5365, 5833, 6697, 7171,
    15805, 19729, 9, 49, 169, 343, 1849, 2353, 2701, 4033, 4681, 6541, 6697, 7957,
    9997, 12403, 13213, 13747, 15251, 16531, 18769, 19729, 169, 265, 553, 1271,
    2701, 4033, 4371, 4681, 6533, 6541, 7957, 8321, 8651, 8911, 9805, 14981,
    18721, 15, 91, 341, 469, 871, 2257, 4371, 4411, 5149, 6097, 8401, 11581,
    12431, 15577, 16471, 19093, 15, 49, 133, 481, 931, 6241, 8911, 9131, 10963,
    11041, 14191, 17767, 9, 451, 469, 589, 685, 817, 1333, 3781, 8905, 9271,
    18631, 19517, 21, 231, 671, 703, 841, 1281, 1387, 1417, 2701, 3829, 8321,
    8911, 10933, 13019, 14091, 21, 25, 185, 925, 1541, 1807, 3281, 3439, 3781,
    4417, 7081, 8857, 10609, 11989, 14089, 18721, 65, 85, 221, 341, 703, 721,
    1105, 1891, 2257, 2465, 5461, 9361, 9881, 15769, 19669, 9, 27, 91, 1405, 1441,
    1541, 2209, 2863, 3367, 3481, 5317, 6031, 9409, 11359, 14833, 17141, 17461,
    15, 451, 1141, 1247, 1541, 1661, 1991, 2413, 3097, 4681, 5611, 6191, 7421,
    8149, 9637, 10081, 10217, 12083, 13981, 15, 217, 341, 1261, 2701, 3661, 6541,
    6697, 7613, 13213, 16213, 33, 49, 217, 703, 1519, 2209, 2245, 6119, 8371,
    11521, 12403, 14981, 18721, 9, 35, 1387, 1921, 2071, 2209, 2321, 6541, 7957,
    8365, 8695, 9809, 10349, 11041, 13747, 16589, 9, 65, 205, 259, 533, 1441,
    1921, 2665, 3439, 5257, 15457, 39, 49, 91, 301, 559, 637, 1649, 2107, 2701,
    3913, 6533, 7051, 8321, 9881, 12001, 14491, 14981, 16721, 17753, 19951, 21,
    65, 231, 265, 689, 703, 1241, 3445, 4411, 6973, 8421, 12871, 15883, 18721, 9,
    15, 45, 169, 1035, 1441, 2611, 2977, 3961, 4187, 5461, 6697, 7107, 7601, 7711,
    11521, 12403, 49, 341, 469, 481, 949, 973, 2701, 3283, 4187, 4371, 4705, 6811,
    8023, 8119, 8911, 9313, 10585, 14981, 18487, 25, 51, 91, 259, 481, 561, 2431,
    3367, 6649, 6697, 7701, 9073, 12403, 13333, 15221, 16471, 19951
];
const getChoice = createInterface({

    /*
    Simple interface for asynchronously
    recieving user input.
    */

    input: process.stdin,
    output: process.stdout

});
function modExpo(x, y, choice) {

    /*
    Manually calculates x^y mod N
    because Math.pow() has floating
    point error for large N.
    */


    let product, residue = 0;
    for (let i = 0; i < y; i++) {
        x *= x;
    }
    product = x;
    residue = product % choice;
    return residue;

}
const color = {

    /* 
    Stores the ANSI escape codes in
    an object for readability.
    */

    black: '\u001b[30m',
    red: '\u001b[31m',
    green: '\u001b[32m',
    yellow: '\u001b[33m',
    blue: '\u001b[34m',
    magenta: '\u001b[35m',
    cyan: '\u001b[36m',
    white: '\u001b[37m',

};
function lucasLehmer(choice) {

    console.time(color.red, "Time spent");

    try {
    let seed = 4;
    let mersenneNumber = Math.pow(2, choice) - 1;
    let isComposite = true;

    for (let i = 2; i < choice; i++) {
        seed = (Math.pow(seed, 2) - 2) % mersenneNumber;
    }

    if (seed == 0) {
        isComposite = false;
        console.log("Residue: 0x0000000000000000.");
    }
    if (!isComposite) {
        console.log("M" + choice + " is prime!");
        console.log("Tested number in full: " + mersenneNumber);
        console.log("Confidence: 100.00%.");
    }
    else {
        console.log("M" + choice + " is composite.");
        console.log("Tested number in full: " + mersenneNumber);
        console.log("Confidence: 100.00%.");
    }
}

    catch {
        console.log("That value is not allowed.");
    }

    finally {
        console.timeEnd(color.red, "Time spent");
    }
}

function sieve(choice) {

    try {
        console.time("Time spent");
        let testNums = Array(choice + 1).fill(true);
        let primes = [];
        testNums[0] = testNums[1] = false;

        for (let i = 2; i < Math.ceil(Math.sqrt(choice)); i++) {
            if (testNums[i] == true) {
                for (let k = Math.pow(i, 2); k <= choice; k += i) {
                    testNums[k] = false;
                }
            }
        }
        for (let j = 0; j <= choice; j++) {
            if (testNums[j] == true) {
                primes.push(j);
            }
        }
        console.log(color.yellow, "Sieved primes: " + primes + ".");
        console.timeEnd("Time spent");
        return primes;
    }

    catch {
        console.log("Invalid array length!");
    }

    finally {
        console.log("The operation completed successfully.");
    }

}

function decomposeNumberAsProduct(choice) {
    /* 
    Factors an odd number N as N - 1 = d * 2^s,
    provided s > 0 and d is odd.
    */

    d = choice;
    while (d % 2 === 0) {
        
        d = d / 2;
        s++;
    }
    d = Math.floor(d); 
    console.log(color.green, "Found N - 1 = " + d + " * 2^" + s); 
    return d, s;

}
function weakProbablePrime(choice) {
    /*
    Determines if a number is a probable prime base two.
    This test is extremely effective because the percentage
    of composite 2-PRPs approaches zero as N tends to infinity.
    */

    try {

    let isComposite = false;
    let test = choice - 1;
    let isPseudoprime = false;

    decomposeNumberAsProduct(test);

    for (let a = 1; a < 3; a++) {
        if (modExpo(s, d, choice) !== 1) {
            isComposite = true;
            console.log("2^" + d + " mod " + choice + " is not 1.");
            console.log("This violates Fermat's Little Theorem.");
            break;
        }
    }
    if (isComposite) {
        console.log(choice + " is not a 2-PRP.\nConfidence: 100.00%");
    }
    else {
        console.log(choice + " is a 2-PRP!\nConfidence: 100.00%.");
        console.log("Overall primality confidence: ~99.99999818891%.");
        console.log("Checking against list of small known pseudoprimes to increase confidence: ");

        for (let i = 0; i < pseudoprimes.length; i++) {
            if (pseudoprimes[i] == choice) {
                isPseudoprime = true;
                console.log(color.yellow, "Found a match." + choice + " is not prime.");
                console.log(color.green, "Confidence: 100.00%.");
                break;
            }
        }
        if (!isPseudoprime) {
            console.log(color.green, "No known pseudoprimes matched.");
        }
    }
    }

    catch {
        console.log(color.red, "That value is not allowed.");
    }
}
function baseSpecificSPRP(choice) {

    /*

    Uses powerful mathematical theorems to accelerate the testing
    of large integera N. 

    */
    console.time('Time taken');

    try {

    let isComposite = false;
    let neededBases = [2, 3, 5, 7, 11, 13, 17];
    let test = choice - 1;

    if (choice < 1373653) {

        console.log(color.red, "Initiating strong probable prime test...");
        console.log(color.yellow, "You chose N = " + choice);
        console.log(color.magenta, "First case of the PSW80 theorem applies.");
        console.log(color.white, "Factoring N - 1...");

        decomposeNumberAsProduct(test);

        for (let i = 0; i < 2; i++) {
            if (modExpo(neededBases[i], d, choice) !== 1) {
                console.log(color.yellow, "Found Fermat witness for " + choice + ": " + neededBases[i] + ".");
                isComposite = true;
                console.log(color.red, choice + " is not prime. Confidence: 100.00%.");
                break;
            }
        }
        if (!isComposite) {
            console.log(color.green, choice + " is prime! Confidence: 100.00%.");
        }
    }

    if (choice < 25326001 && choice > 1373653) {

        console.log("Initiating strong probable prime test...");
        console.log("You chose N = " + choice);
        console.log("Second case of the PSW80 theorem applies.");
        console.log("Factoring N - 1...");

        decomposeNumberAsProduct(test);

        for (let i = 0; i < 3; i++) {
            if (modExpo(neededBases[i], d, choice) !== 1) {
                isComposite = true;
                break;
            }
        }
        if (!isComposite) {
            console.log(choice + " is prime! Confidence: 100.00%.");
        }
        else {
            console.log(choice + " is not prime. Confidence: 100.00%.");
        }
    }

    if (choice < 118670087467 && choice > 25326001) {
        console.log("Initiating strong probable prime test...");
        console.log("You chose N = " + choice);
        console.log("Third case of the PSW80 theorem applies.");
        console.log("Factoring N - 1...");

        decomposeNumberAsProduct(test);

        for (let i = 0; i < 4; i++) {
            if (modExpo(neededBases[i], d, choice) !== 1) {
                isComposite = true;
                break;
            }
        }
        if (!isComposite) {
            console.log(choice + " is prime! Confidence: 100.00%.");
        }
        else {
            console.log(choice + " is not prime. Confidence: 100.00%.");
        }
    }

    if (choice == 3215031751) {
        console.log("Jaescke93 case found. 3,215,031,751 is not prime.");
    }

    if (choice < 2152302898747 && choice > 118670087467) {
        console.log("Initiating strong probable prime test...");
        console.log("You chose N = " + choice);
        console.log("Fourth case of the Jaescke93 theorem applies.");

        decomposeNumberAsProduct(test);

        for (let i = 0; i < 5; i++) {
            if (modExpo(neededBases[i], d, choice) !== 1) {
                isComposite = true;
                break;
            }
        }
        if (!isComposite) {
            console.log(choice + " is prime! Confidence: 100.00%.");
        }
        else {
            console.log(choice + " is not prime. Confidence: 100.00%.");
        }
    }

    if (choice < 3474749660383 && choice > 2152302898747) {
        console.log("Initiating strong probable prime test...");
        console.log("You chose N = " + choice);
        console.log("Fifth case of the Jaescke93 theorem applies.");
        decomposeNumberAsProduct(test);

        for (let i = 0; i < 6; i++) {
            if (modExpo(neededBases[i], d, choice) !== 1) {
                isComposite = true;
                break;
            }
            else {
                console.log(choice + " is prime! Confidence: 100.00%");
            }
        }
    }

    if (choice < 341550071728321 && choice > 3474749660383) {
        console.log("Initiating strong probable prime test...");
        console.log("You chose N = " + choice);
        console.log("Sixth case of the Jaescke93 theorem applies.");
        decomposeNumberAsProduct(test);

        for (let i = 0; i < 7; i++) {
            if (modExpo(neededBases[i], d, choice) !== 1) {
                isComposite = true;
                break;
            }

        }
        if (!isComposite) {
            console.log(choice + " is prime! Confidence: 100.00%.");
        }
        else {
            console.log(choice + " is not prime. Confidence: 100.00%.");
        }
    }
}
    catch {
        console.log("That value is not allowed.");
    }

    finally {
        console.timeEnd('Time taken');
    }
}
function uiBuilder() {

    console.log("\n\n\n");
    console.log(color.green + " // Option Selection //");
    console.log(color.yellow + " [1] Sieve primes up to N");
    console.log(color.green + " [2] Use past primality proofs in a strong probable prime test");
    console.log(color.yellow + " [3] Do a Lucas-Lehmer (LL) Test");
    console.log(color.green + " [4] Show proven theorems for strong probable prime tests");
    console.log(color.yellow + " [5] Test for industrial-grade primes (2-PRP)");
    console.log(color.green + " [6] Exit to terminal");
    console.log(color.yellow, "Make your selection: ");
   

    getChoice.question(color.magenta, "Make your selection: ", (input) => {
        let choice = parseInt(input);

        switch (choice) {
            case 1:
                askSieve();
                break;
            case 2:
                askSPRP();
                break;
            case 3:
                askLucas();
                break;
            case 4:
                showTheorems();
                break;
            case 5:
                askWeakProbablePrime();
                break;
            case 6:
                console.log("Goodbye! :D");
                process.kill(0);
            default:
                console.log("Invalid choice. ");
                console.log("\n");
                uiBuilder();
        }
    });
}
function showTheorems() {

    /*
    Shows the theorems that fuel the strong probable prime tests.
    Can be found at:
    https://t5k.org/glossary/page.php?sort=StrongPRP
    */

    console.log(color.cyan, "                           | Strong Probable Prime Cases |");
    console.log(color.red, "PSW 1980 First Case:       If n < 1,373,653 is a both 2 and 3-SPRP, then n is prime.");
    console.log(color.yellow, "PSW 1980 Second Case:      If n < 25,326,001 is a 2, 3 and 5-SPRP, then n is prime.");
    console.log(color.magenta, "Jaeschke 1993 Third Case:  If n < 118,670,087,467 is a 2, 3, 5 and 7-SPRP,");
    console.log(color.magenta, "then either n = 3,215,031,751 or n is prime.");
    console.log(color.white, "Jaeschke 1993 Fourth Case: If n < 2,152,302,898,747"); 
    console.log(color.white, "is a 2, 3, 5, 7 and 11-SPRP, then n is prime.");
    console.log(color.green, "Jaeschke 1993 Fifth Case:  If n < 3,474,749,660,383 is a 2, 3,");
    console.log(color.green, "5, 7, 11 and 13-SPRP, then n is prime.");
    console.log(color.blue, "Jaeschke 1993 Sixth Case:  If n < 341,550,071,728,321 is a 2, 3, 5,");
    console.log(color.blue, "7, 11, 13 and 17-SPRP, then n is prime.");
    uiBuilder();
}

function askWeakProbablePrime() {

    getChoice.question("Enter an odd positive integer to test: ", (input) => {
        choice = parseInt(input);
        if (choice % 2 == 0) {
            console.log(color.red, "This number is even, there is no need to test it.");
        }
        else if (choice % 5 == 0) {
            console.log(color.red, "This number is a multiple of five, there is no need to test it.");
        }
        else {
            weakProbablePrime(choice);
        }
        uiBuilder();
    });
}
function askSieve() {

    getChoice.question("Enter a limit for sieved primes: ", (input) => {
        choice = parseInt(input);

        if (choice > 50000000) {
            console.log("Not enough memory!");
            askSieve();
        }
        else {
            sieve(choice);
            uiBuilder();
        }
    });

}
function askLucas() {

    getChoice.question("Enter an exponent on the number 2^p - 1 to test: ", (input) => {
        choice = parseInt(input);
        if (choice > 520) {
            console.log("Not enough memory to fully complete the LL test.");
            askLucas();
        }
        else {
            lucasLehmer(choice);
            uiBuilder();
        }
    });
}
function askSPRP() {

    getChoice.question("Enter an odd positive integer to test: ", (input) => {
        choice = parseInt(input);
        if (choice % 2 == 0) {
            console.log(color.red, "This number is even, there is no need to test it.");
            uiBuilder();
        }
        else if (choice % 5 == 0) {
            console.log(color.red, "This number is a multiple of five, there is no need to test it.");
            uiBuilder();
        }
        else {
            baseSpecificSPRP(choice);
            uiBuilder();
        }
    });

}
console.clear();
uiBuilder();