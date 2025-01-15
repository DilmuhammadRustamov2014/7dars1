function groupByParity(numbers) {
    const juft = [];
    const toq = [];

    numbers.forEach(number => {
        if (number % 2 === 0) {
            juft.push(number); 
        } else {
            toq.push(number); 
        }
    });

    return { juft, toq };
}
const numbers = [22,30,13 ,14 ,90 ,54 ,43 ,52 ,23 ,33 ];
const result = groupByParity(numbers);

console.log("juft sonlar:", result.juft);
console.log("to'q sonlar:", result.toq);