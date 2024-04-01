const SIEVE_OF_ERASTOTHENES = require('./primes.js').default;
const LUCAS_LEHMER = require('./primes.js').default;
const STRONG_PROBABLE_PRIME = require('./primes.js').default;
const SOPHIE_GERMAIN = require('./primes.js').default;
const TRIAL_FACTOR = require('./primes.js').default;
const WRITE_N_AS_PRODUCT = require('./primes.js').default;
const LUCAS_TEST_CHECK = require('./primes.js').default;
const SECOND_CASE_PRP = require('./primes.js').default;
const readline = require('readline');

function askLucas() {
    r1.question("Enter an exponent to test", (input) => {
        let p = parseInt(input);
        LUCAS_LEHMER(p);
        
    });
    r1.close();
}

function askSPRP() {
    r1.question("Enter an odd number to test", (input) => {
        let p = parseInt(input);
        STRONG_PROBABLE_PRIME(p);
        
    });
    r1.close();

}

function askSieve() {
    r1.question("Enter a limit to sieve primes to", (input) => {
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
    console.log("[5] ")

    var choice = parseInt(prompt("Make your selection:"));

    if (choice == null || choice == undefined || choice instanceof String || choice < 1 || choice > 9) {
        prompt("There was a problem with your choice. Please try again.");
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
