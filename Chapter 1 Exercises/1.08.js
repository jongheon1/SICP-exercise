
function cube_root(x) {
    return cube_root_iter(1, 0, x);
}

function cube_root_iter(guess, previous_guess, x) {
    return is_good_enough(guess, previous_guess)
        ? guess
        : cube_root_iter(improve(guess, x), guess, x);
}

function is_good_enough(guess, previous_guess) {
    return abs(guess - previous_guess) < 0.001;
}

function abs(x) {
    return x > 0
        ? x
        : x === 0
        ? 0
        : -x;
}

function improve(guess, x) {
    return (x / (guess * guess) + 2 * guess) / 3;
}

function cube(x) {
    return x * x * x;
}

console.log(cube_root(27));