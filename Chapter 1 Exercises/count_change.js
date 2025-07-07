function count_change(amount) {
    return cc(amount, 5);
}

function cc(amount, kinds_of_coins) {
    if (amount === 0) {
        return 1;
    } else if (amount < 0 || kinds_of_coins === 0) {
        return 0;
    } else {
        return cc(amount, kinds_of_coins - 1) + cc(amount - first_denomination(kinds_of_coins), kinds_of_coins);
    }
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 1 :
        kinds_of_coins === 2 ? 5 :
        kinds_of_coins === 3 ? 10 :
        kinds_of_coins === 4 ? 25 :
        kinds_of_coins === 5 ? 50 :
        0;
}

function count_change_dp(amount) {
    const coins = [1, 5, 10, 25, 50];
    const dp = Array(amount + 1).fill(0);

    dp[0] = 1;
    for (coin in coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
}