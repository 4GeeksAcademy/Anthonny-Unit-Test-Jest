const {sum}=require('./app.js');

test('adds 14+9 to equal 23',()=>{
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("Un euro deben ser 1.07 dolares", function() {
   
    const {fromEuroToDollar} = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Un dolar deben ser 160.73 Yen", function() {
   
    const {fromDollarToYen} = require('./app.js');

    const Yen = fromDollarToYen(3.5);

    const expected = 3.5 * 160.73;

    expect(fromDollarToYen(3.5)).toBe(562.555);
})

test("Un Yen deben ser 0,0049 libras esterlinas", function() {
   
    const {fromYenToPound} = require('./app.js');

    const pound = fromYenToPound(3.5);

    const expected = 3.5 * 0.0049;

    expect(fromYenToPound(3.5)).toBe(0.01715);
})