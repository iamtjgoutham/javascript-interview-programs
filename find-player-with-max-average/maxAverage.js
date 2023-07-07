const data = [
    {name: 'tom', score: 1},
    {name: 'sam', score: 1},
    {name: 'tom', score: 2},
    {name: 'sam', score: 3},
    {name: 'karthik', score: 5},
    {name: 'tom', score: 4},
    {name: 'sam', score: 3}
];

// calculating the total score of each player and their count
const list = data.reduce((acc, item) => {
    const { name, score } = item;
    if(acc[name]) {
        const { totalScore = 0, count = 0 } = acc[name];
        acc[name]['totalScore'] = score + totalScore;
        acc[name]['count'] = count + 1;
        acc[name]['name'] = name;
    } else {
            acc[name] = {
            totalScore: score,
            count: 1,
            name,
        }
    }
    return acc;
}, {});

// calculating each players average
const listWithAverage = {};
for(let key in list) {
    const { name, totalScore, count } = list[key];
    listWithAverage[name] = totalScore / count;
}

// finding min and max average
let arr = Object.values(listWithAverage);
const min = Math.min(...arr);
const max = Math.max(...arr);

// constructing the final output
let maxAverage = {};
for(let key in listWithAverage) {
    const value = listWithAverage[key];
    if(value === max) {
        maxAverage = {
            name: key,
            average: value
        }
    }
}

// Printing the players name with max average
console.log(maxAverage.name)