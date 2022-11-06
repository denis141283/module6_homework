function sum(x) {
    return function(y) {
        return x + y;
    };
}

console.log( sum(1)(2), sum(3)(4), sum(5)(6) );