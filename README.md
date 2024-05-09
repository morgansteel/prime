# prime
A lightweight JavaScript utility to make prime sieving, LL testing, and probable prime testing quick.

## System requirements

+ NodeJS `v16.15.1` or higher.
+ 2.5 GB of available RAM for sieving at high levels (near 50,000,000.)

> [!CAUTION]
> The program may hang for several minutes due to lack of memory or crash altogether if you try and sieve past the set limit of 50,000,000.
> There are measures in place to stop this from happening, but it can cause some paging to disk or system freezes on restricted amounts of memory.

## Supported commands

This is what the UI looks like:

```
 // Option Selection //
 [1] Sieve primes up to N
 [2] Use past primality proofs in a strong probable prime test
 [3] Do a Lucas-Lehmer (LL) Test
 [4] Show proven theorems for strong probable prime tests
 [5] Test for industrial-grade primes (2-PRP)
 [6] Exit to terminal
 Make your selection:
```

## Prime sieving

[The exact calculations can be found here.](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

Implements the Sieve of Eratosthenes, the fastest method of generating large lists of primes less than some integer N, with a time complexity of O(n log log n).
Any value less than 50,000,001 is allowed. Negatives are automatically handled to be invalid.

> [!NOTE]
> There is currently no system in place to cut down on large terminal outputs for prime lists that are thousands of items long.

## Lucas-Lehmer testing (LL) [Proof](https://t5k.org/notes/proofs/LucasLehmer.html)

The Lucas-Lehmer test is a computationally simple yet intensive test. Given the exponent P on a Mersenne number 2<sup>p</sup> - 1, for all `i` from `3 to P`, square 4, subtract 2, and then take it modulo 2<sup>p</sup> - 1. If after `P - 2` iterations the result is zero, implying that the Lucas sequence modulo 2<sup>p</sup> - 1 is zero, then M(P) is definitely prime. Otherwise, it is not prime. As expected, this test becomes extremely difficult to compute efficiently without significant amounts of CPU cache and memory available.

Currently, this implementation of the LL test takes no value P greater than 520. However, it correctly identifies all Mersenne primes less than M521 (2<sup>521</sup> - 1). 

> [!IMPORTANT]
> Don't take the test's results as fact all of the time. The Lucas-Lehmer test can sustain a very high error rate on even reliable computers, due to its extremely low tolerance for floating-point miscalculations.

## Industrial-grade primality testing

2-PRP (read as probable primes base two) are some of the most reliable primality tests due to the extremely, extremely low chance of a composite integer N satisfying the weak definiton of Fermat's Little Theorem.

> [!NOTE]
> For numbers in the range of `10^30`, the odds of a randomly selected integer N being composite but also a 2-PRP is less than 1 in 2^600.

This implementation of such a test determines primality as follows:

+ Let `N` equal some odd integer, since only odd integers and 2 are prime.
+ Compute `N - 1`.
+ Write `N - 1` as d * 2<sup>s</sup> - 1, where `d` is odd and `s` is greater than zero.
+ Compute 2<sup>d</sup> mod N. If this result is 1, then `N` is a 2-PRP. Otherwise,`N` is composite.

This test is not conclusive if a result is prime. However, in practice, the difference between probable prime and proven prime is so unimaginably small, there is no difference.

## Strong probable primality testing

> [!IMPORTANT]
> This test is 100% conclusive. If a result is prime, there are no "ifs", "buts", or "ands". [Proven theorems](https://t5k.org/prove/prove2_3.html) from other mathematicians guarantee this.

The structure of the strong probable primality test is quite similar to weak probable prime testing. We still compute N - 1 = d * 2<sup>s</sup>, but instead, bracketing of different ranges of values N can be used to strengthen the definition.

### Brackets for N < 1,373,653

If 2<sup>d</sup> = 1 (mod N) and 3<sup>d</sup> = 1 (mod N), then `N` is definitely prime. If any one of these are false, `N` is not prime.

> [!NOTE]
> For more information on the exact ranges, check the "Show Theorems" tab while the program is running.







