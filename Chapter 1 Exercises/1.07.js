function sqrt(x) {
    return sqrt_iter(1, 0, x);
}

function sqrt_iter(guess, previous_guess, x) {
    return is_good_enough2(guess, x)
        ? guess
        : sqrt_iter(improve(guess, x), guess, x);
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}

function is_good_enough(guess, previous_guess) {
    return abs(guess - previous_guess) < 0.001;
}

function is_good_enough2(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

function square(x) {
    return x * x;
}

function abs(x) {
    return x > 0
        ? x
        : x === 0
        ? 0
        : -x;
}

sqrt(16);

// sqrt(0.16);

// sqrt(0.000016);

