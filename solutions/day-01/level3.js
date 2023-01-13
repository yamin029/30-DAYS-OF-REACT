const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAges = ages.sort()
const min = Math.min(...ages)
const max = Math.max(...ages)
const midPoint = Math.floor(ages.length/2)
const median = midPoint%2===0? ages[midPoint] : (ages[midPoint] + ages[midPoint+1])/2;
// const totalAge= 0;
const averageAge = ages.reduce((acc, age)=> acc + age )/2
console.log(averageAge)