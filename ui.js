const SIEVE_OF_ERASTOTHENES = require('./primes.js').default;
const LUCAS_LEHMER = require('./primes.js').default;
const STRONG_PROBABLE_PRIME = require('./primes.js').default;
const SOPHIE_GERMAIN = require('./primes.js').default;
const TRIAL_FACTOR = require('./primes.js').default;
const WRITE_N_AS_PRODUCT = require('./primes.js').default;
const readline = require('readline');


const index1 = readline.createInterface({ // Create prompt interface
    input: process.stdin,
    output: process.stdout
});

const index2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const index3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




function askLucas() {
    index1.question("Enter an exponent to test", (input) => {
        let p = parseInt(input);
        LUCAS_LEHMER(p);
        
    });
    r1.close();
}

function askSPRP() {
    index2.question("Enter an odd number to test", (input) => {
        let p = parseInt(input);
        STRONG_PROBABLE_PRIME(p);
        
    });
    r1.close();

}

function askSieve() {
    index3.question("Enter a limit to sieve primes to", (input) => {
        let p = parseInt(input);
        SIEVE_OF_ERASTOTHENES(p);
    });
    r1.close();
}

function askTF() {
    r1.question("Enter a number to trial factor", (input) => {
        let p = parseInt(input);
        TRIAL_FACTOR(p);
    });
    r1.close();
}

function UI_BUILDER() {
    console.log("// The Ultimate Prime Helper Tool \\");
    console.log("\n");
    console.log("[1] Sieve primes up to N");
    console.log("[2] Do a full SPRP (Strong Probable Primality) Test");
    console.log("[3] Do a Lucas-Lehmer (LL) Test");
    console.log("[4] Trial factor a number N for primality");
    console.log("[5] Run the Miller test");
    
    var choice = parseInt(); // Add readline interface here

    if (choice == null || choice == undefined || choice instanceof String || choice < 1 || choice > 9) {
        // Add second readline interface here
    }
    else {
       if (choice == 1) {
        askSieve(choice);
       }
       if (choice == 2) {
        askSPRP(choice);
       }
       if (choice == 3) {
        askLucas(choice);
       }
       if (choice == 4) {

       }
    }

}
