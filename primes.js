// Build functions //

export default {SIEVE_OF_ERASTOTHENES, LUCAS_LEHMER, TRIAL_FACTOR, STRONG_PROBABLE_PRIME, WRITE_N_AS_PRODUCT, SOPHIE_GERMAIN, SECOND_CASE_PRP};
import UI_BUILDER from './ui.js';
const readline = require('readline');


function SIEVE_OF_ERASTOTHENES(choice) {

    var TEST_NUMS = Array(n+1).fill(true);
    TEST_NUMS[0] = TEST_NUMS[1] = false;

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (primes[i] == true) {
            for (let k = Math.pow(i,2); k <= n; k++) {
                primes[k] = false;
            }
        }
    }
    return testNums.reduce((acc, findPrime, index)); {
        if (findPrime == true) acc.push(index);
        return acc;

    };
}

// Basic LL test
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

r1.question("Enter an exponent to test:", (input) => {
    var p = parseInt(input);
    LUCAS_LEHMER(p);
});

function LUCAS_LEHMER(p) {

    let seed = 4;
    let mersenne_number = Math.pow(2, p) - 1;

    for (let i = 3; i <= p; i++) {
        seed = (Math.pow(seed, 2) - 2) % mersenne_number;
        console.log("Residue: 0x " + seed);
        seed = seed.toString(16);
    }
    if (seed == 0) {
        console.log(seed);
    }
    else {
        console.log(seed);
    }
    r1.close();
}

function TRIAL_FACTOR(choice) {
    
    let num_array = Array(Math.ceil(Math.sqrt(n)));
    for (let i = 1; i < num_array.length; i+=2) {
        if(n % num_array[i] == 0) {
            return "Prime";
        }
        else {
            return "Composite";
        }
    }
}

function STRONG_PROBABLE_PRIME(choice) {

    
    let sub = choice - 1; // Proving N prime is easy if the factorization of N-1 is known
    WRITE_N_AS_PRODUCT(sub); // Write N-1 as d * 2^s
    if (d*(2^s) ==! sub) { // Check to ensure that N is properly factored
        return "Fatal error";
    }
    else {
    for (let a = 2; a < num; a++) { // The basis of the SPRP test increments 
        if (a ** d % n == 1) {
            console.log("Possibly Prime!");
            break;
        }
        else if (a ** d % n ==! 1) { 
            console.log(choice + " failed the first stage.");
        }
    }
    }
}

function SECOND_CASE_PRP(choice) {




}



function WRITE_N_AS_PRODUCT(choice) {
    let N = choice - 1; // Factoring N is easy if the factorization of N-1 is known
    let s = 0;
    let d = N; // Assume d = N

    while (d % 2 === 0) {
        d /= 2;
        s++;
    }
    d = Math.floor(d);
    console.log("First stage complete. N - 1 = " + d + " * 2^" + s);
}


function SOPHIE_GERMAIN(choice) {
    let test = prompt("Enter a number to test");
    let accuracy = prompt("[0] - Use an SPRP test (~99.5% accuracy)\n[1] - Use a trial factor test (100% accuracy)");
    STRONG_PROBABLE_PRIME(k);
    if (prime) {
        test = 2(test)+1
        STRONG_PROBABLE_PRIME(k);
        if (prime) {
            return choice + "is a Sophie-Germain prime";
        }
    }
    else {
        return choice + " is not a Sophie-Germain prime";
    }
}




function LUCAS_TEST_CHECK(choice) {

    let n = choice-1

}