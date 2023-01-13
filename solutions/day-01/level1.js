const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]
// Declare an empty array;
const arr = []
// Declare an array with more than 5 number of elements
const arr1 = Array(5).fill('x')
// Find the length of your array
const arr1Length = arr1.length
// Get the first item, the middle item and the last item of the array
const firstItem = arr1[0]
const middleItem = arr1[floor((arr1.length)/2)]
console.log(middleItem)
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method

const itCompanies = [];
itCompanies[0] = "Facebook";
itCompanies[1] = "Google";
itCompanies[2] = "Microsoft";
itCompanies[3] = "Apple";
itCompanies[4] = "IBM";
itCompanies[5] = "Oracle";
itCompanies[6] = "Amazon";
// Slice out the middle IT company or companies from the array
middleIndex = Math.floor(itCompanies.length/2)
// const middleItem = itCompanies.slice(middleIndex,middleIndex+1)
// console.log(middleItem)

// Remove the first IT company from the array
// itCompanies.splice(0,1)
// console.log(itCompanies)
// Remove the middle IT company or companies from the array
// itCompanies.splice(middleIndex,1)
// console.log(itCompanies)
// Remove the last IT company from the array
// itCompanies.pop()
// console.log(itCompanies)
// Remove all IT companies
itCompanies.splice(0)
console.log(itCompanies)