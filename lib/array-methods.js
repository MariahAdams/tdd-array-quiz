
function arrayMethod() {
    let numbers = [2, 3, 9, 12, 8, 5, 7];
    //filter odd numbers
    //map squared numbers of all odd numbers
    //filter out squares less than 24

    let newNum = numbers
        // .filter((n) => num == num % 2)
        .map((n) => n);

    return newNum;
}


module.exports = {
    arrayMethod
};

/* Should have simply been: */
const bigOddSquares = numbers => numbers    
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .filter(n => n > 24);

//mocha does not need 'describe' when there's only one test
it('squares odd numbers and returns those greater than 24', () => {
    assert.deepEqual(bigOddSquares([input], [output]));
});

//think it through
//what is the input, what is the return value from the thing
//think about boundaries