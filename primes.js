// Build functions //

export default {SIEVE_OF_ERASTOTHENES, LUCAS_LEHMER, TRIAL_FACTOR, STRONG_PROBABLE_PRIME, WRITE_N_AS_PRODUCT,};
import UI_BUILDER from './ui.js';
const readline = require('readline');

var s = 0;
var d;

// List of known pseudoprimes less than 20,000
var PSEUDO_PRIMES = [2047, 3277, 4033, 4681, 8321, 15841, 121, 703, 1891, 3281, 8401, 
    8911, 10585, 12403, 16531, 18721, 19345, 781, 1541, 5461, 5611, 7813, 13021, 14981, 15751, 25, 
    325, 703, 2101, 2353, 4525, 11041, 14089, 133, 793, 2047, 4577, 5041, 12403, 13333, 14521, 17711, 
    85, 1099, 5149, 7107, 8911, 9637, 13019, 14491, 17803, 19757, 9, 91, 145, 781, 1111, 2821, 4033, 4187, 
    5365, 5833, 6697, 7171, 15805, 19729, 9, 49, 169, 343, 1849, 2353, 2701, 4033, 4681, 6541, 6697, 7957, 
    9997, 12403, 13213, 13747, 15251, 16531, 18769, 19729, 169, 265, 553, 1271, 2701, 4033, 4371, 4681, 6533, 
    6541, 7957, 8321, 8651, 8911, 9805, 14981, 18721, 15, 91, 341, 469, 871, 2257, 4371, 4411, 5149, 6097, 8401, 
    11581, 12431, 15577, 16471, 19093, 15, 49, 133, 481, 931, 6241, 8911, 9131, 10963, 11041, 14191, 17767, 9, 
    451, 469, 589, 685, 817, 1333, 3781, 8905, 9271, 18631, 19517, 21, 231, 671, 703, 841, 1281, 1387, 1417, 2701, 
    3829, 8321, 8911, 10933, 13019, 14091, 21, 25, 185, 925, 1541, 1807, 3281, 3439, 3781, 4417, 7081, 8857, 10609, 
    11989, 14089, 18721, 65, 85, 221, 341, 703, 721, 1105, 1891, 2257, 2465, 5461, 9361, 9881, 15769, 19669, 9, 27, 
    91, 1405, 1441, 1541, 2209, 2863, 3367, 3481, 5317, 6031, 9409, 11359, 14833, 17141, 17461, 15, 451, 1141, 1247, 
    1541, 1661, 1991, 2413, 3097, 4681, 5611, 6191, 7421, 8149, 9637, 10081, 10217, 12083, 13981, 15, 217, 341, 1261, 
    2701, 3661, 6541, 6697, 7613, 13213, 16213, 33, 49, 217, 703, 1519, 2209, 2245, 6119, 8371, 11521, 12403, 14981, 
    18721, 9, 35, 1387, 1921, 2071, 2209, 2321, 6541, 7957, 8365, 8695, 9809, 10349, 11041, 13747, 16589, 9, 65, 205, 
    259, 533, 1441, 1921, 2665, 3439, 5257, 15457, 39, 49, 91, 301, 559, 637, 1649, 2107, 2701, 3913, 6533, 7051, 8321, 
    9881, 12001, 14491, 14981, 16721, 17753, 19951, 21, 65, 231, 265, 689, 703, 1241, 3445, 4411, 6973, 8421, 12871, 15883, 
    18721, 9, 15, 45, 169, 1035, 1441, 2611, 2977, 3961, 4187, 5461, 6697, 7107, 7601, 7711, 11521, 12403, 49, 341, 
    469, 481, 949, 973, 2701, 3283, 4187, 4371, 4705, 6811, 8023, 8119, 8911, 9313, 10585, 14981, 18487, 25, 51, 91, 
    259, 481, 561, 2431, 3367, 6649, 6697, 7701, 9073, 12403, 13333, 15221, 16471, 19951];


function SIEVE_OF_ERASTOTHENES(choice) {
    // Time complexity: O(n log (n) log (log (n)))

    let TEST_NUMS = Array(choice + 1).fill(true); // Create an array of n + 1 integers
    TEST_NUMS[0] = TEST_NUMS[1] = false; // The first integers, 0 and 1, are not prime

    for (let i = 2; i < Math.sqrt(choice); i++) { // The sieve only needs to be done up to the square root of the limit n
        if (TEST_NUMS[i] == true) { // Every time a prime number is encountered, mark all multiples of it as false
            for (let k = Math.pow(i,2); k <= choice; k = k + i) { 
                /* Start at the square of the prime found when marking multiples as false
                This is because the factor q of any number n must be less than Math.pow(n,0.5);
                */
                TEST_NUMS[k] = false; // Mark multiples as false
            }
        }
    }

    var primes = []; // Create an empty array to store the sieved primes in
    for (let j = 0; j <= choice; j++) { // Iterate through all items in the Boolean-sorted array
        if (TEST_NUMS[j] == true) { // Pick only those confirmed to be prime
            primes.push(j); // Add it to the list
        }
    }

    return primes; // Keep list for use in TF
}

// Basic LL test


function LUCAS_LEHMER(p) {
    // Time complexity: O(n log n)

    let seed = 4; // There are infinitely many starting values that function the same, but 4 is the smallest
    let mersenne_number = Math.pow(2, p) - 1; // Calculate the Mersenne number 2^p - 1

    for (let i = 3; i <= p; i++) { // Definition of the Lucas-Lehmer test. After p - 2 iterations, check if seed == 0
        seed = (Math.pow(seed, 2) - 2) % mersenne_number; // Modular exponentiation used to prevent the Lucas numbers from overloading memory
        console.log("Residue: 0x " + seed); // Show the residue, which is just the seed after it's been manipulated by the LL test
    }
    if (seed == 0) {
        console.log(seed);
    }
    else {
        console.log(seed);
    }
    r1.close();
}

function TRIAL_FACTOR(choice) { // Basic TF test without Sieve
    // Time complexity: O(n√n)
    
    let num_array = Array(Math.ceil(Math.sqrt(choice)));
    for (let i = 1; i < num_array.length; i+=2) {
        if (choice % num_array[i] == 0) {
            return "Prime";
        }
        else {
            return "Composite"; 
        }
    }
}


function STRONG_PROBABLE_PRIME(choice) {
    // Time complexity: Unknown

    console.log("Initiating strong probable prime test...");

    console.log("Factoring N - 1...");

    let test = choice - 1;
    /* Similar primality tests prove that it is MUCH easier
    to prove N prime if the factorization of N - 1 is known.
    */

    WRITE_N_AS_PRODUCT(test); // Write N-1 as d * 2^s, where d is odd and s > 0

    let isComposite = false; // Assume the chosen number is prime initially

    for (let a = 2; a < choice; a++) { // Definition of the SPRP test

        if (a ** d % choice !== 1) { // If at any point the residue does not equal 1, the SPRP test guarantees it's composite

            isComposite == true;

            break; // Stop the loop, no further testing is needed as long as one example is found
        }
    }
    if (isComposite) {

        console.log(choice + "is composite. Confidence: 100%");

    }
    else if (choice <= 20000) {

        console.log("Prime! Checking against list of known pseudoprimes to increase confidence...");

        for (let i = 0; i < PSEUDO_PRIMES.length; i++) { // Linear sort algorithm to find a match in the list

            if (PSEUDO_PRIMES[i] == choice) {

                console.log("Carmichael number found.");

                break;
            }
            else { // It's guaranteed if N < 20,000 after checking for known pseudoprimes that N is prime
                console.log("No known pseudoprimes matched. " + choice + " is prime!");

                break;
            }
        }
    }
    else {
        // The average error rate for the SPRP test is about 0.16% in the range 20,000< N < 10,000,000
        console.log("Prime! Confidence: ~99.84%");

    }
}


function WRITE_N_AS_PRODUCT(choice) {

    // Factors N - 1

    d = choice; // Inductively assume d is the number to be tested

    while (d % 2 === 0) { // If d is odd, then N is even, and thus not prime. No further testing would be required.

        d = d / 2; // Continually halve d until it's odd

        s++; // s is the power of d, incremented for each time d can be divided by 2
    }
    d = Math.floor(d); // No decimals allowed

    console.log("Found N - 1 = " + d + " * 2^" + s); // Success message for N-1's factorization

    return [d, s]; // Feed d and s back to be used by STRONG_PROBABLE_PRIME(choice);

}





function MILLER(choice) {
    /* Time complexity: O(log n log log n)
     Modified case of Fermat's Little Theorem: if N is an a-SPRP for all bases 1 < a < Math.ceil((2 log n)**2), then N is prime
     Assumes that the Extended Riemann Hypothesis is true, and is substantially faster than the traditional SPRP test
    */

console.log("Initiating strong probable prime test...");

console.log("Factoring N - 1...");

let test = choice - 1; // Proving N prime is easy if the factorization of N-1 is known

WRITE_N_AS_PRODUCT(test); // Write N-1 as d * 2^s, where d is odd and s > 0

let isComposite = false;

for (let a = 2; a < Math.ceil(2 * Math.pow(Math.log(parseInt(choice)),2)); a++) { // Per the E-RH, the bound is reduced to 2(log n)^2

    if (a ** d % choice !== 1) {

        isComposite == true;

        break; // Stop the loop, the test is over
    }
}
if (isComposite) {

    console.log(choice + "is composite. Confidence: 100%");

}
else if (choice <= 20000) {

    console.log("Suspected Prime! Checking against list of known pseudoprimes to increase confidence...");

    for (let i = 0; i < PSEUDO_PRIMES.length; i++) { // Linear sort algorithm to find a match in the list

        if (PSEUDO_PRIMES[i] == choice) {

            console.log("Carmichael number found.");

            break;
        }
        else {
            console.log("No known pseudoprimes matched. " + choice + " is prime!");

            break;
        }
    }
}
else {

    console.log("Prime! Confidence: ~99.84%");

}
}