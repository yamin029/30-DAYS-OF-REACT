// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month) => {
    const winterMonths = ['december', 'january', 'february'];
    const springMonths = ['march', 'april', 'may'];
    const summerMonths = ['june', 'july', 'august', 'september', 'october', 'november']
    if (winterMonths.includes(month)) {
        return "It is winter"
    }
    else if (springMonths.includes(month)) {
        return "It is Spring"
    }
    else if (summerMonths.includes(month)) {
        return "It is summer"
    }
}
// console.log(checkSeason('january'))

const solveQuadratic = (...arg) => {
    // console.log(arg[0])
}

solveQuadratic(1, 2, 3)


// const ln = prompt("Enter the length")
// const tms = prompt("Enter number")
const userIdGeneratedByUser = (length, times) => {
    const arrays = []
    for (let k = 0; k < times; k++) {
        let pasArray = []
        for (let i = 0; i < length; i++) {
            const charCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
            const char = String.fromCharCode(charCode);
            // console.log(char)
            pasArray.push(char)
        }
        // console.log(pasArray)
        arrays.push(pasArray.toString())
    }
    return arrays;
}

// console.log(userIdGeneratedByUser(5, 4))

const countries = ['Finland', 'Greenland','Estonia', 'Sweden', 'Norway']
// forEach
// countries.forEach((country,i,arr) => console.log(i,arr, country.toUpperCase()));

// map
// console.log(countries.map((country)=> country.toUpperCase()))

// filter
// console.log(countries.filter((country)=> country.includes('land')))

// reduce
// console.log(countries.reduce((acc, cur)=> acc+' '+cur ))

// find
// console.log(countries.find((country)=> country.includes('land')))

// findIndex
// console.log(countries.findIndex((country)=> country.includes('o')))

// some
// console.log(countries.some((country)=> country.includes('end')))

// every
// console.log(countries.every((country)=> country.includes('en')))


const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

//   products.forEach((product)=>{
//     console.log(product)
//   })

products.forEach((product)=>{
    // console.log(`The price of ${product.product} is ${product.price} euros`)
})