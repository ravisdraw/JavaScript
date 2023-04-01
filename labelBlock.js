//Label Block

//print only the first even number in each array;

let getEvenNumbers = [
    [22, 19, 17, 20],
    [28, 18, 17, 13],
    [15, 19, 12, 21],
    [23, 14, 10, 24],
]

for (let numberArr of getEvenNumbers) {
    inner:
    for (let numbers of numberArr) {
        if (numbers % 2 == 0) {
            console.log(numbers);
            break inner;
        }
    }
}