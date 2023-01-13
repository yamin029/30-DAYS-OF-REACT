// import { countries } from "./countries.js"
// import { webTechs } from "./web_techs.js"

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const newArr = text.split(/[\s,]+/)
// console.log(newArr)
// console.log(newArr.length)

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.forEach((item) => !item.includes('Meat') && console.log("Meat is not included!"))
// for (let i = 0; i < shoppingCart.length; i++) {
//     if (!shoppingCart[i].includes('Meat')) {
//         shoppingCart = ['Meat', ...shoppingCart]
//     }
// }
// if (shoppingCart.includes('Meat')) console.log('ddd')
console.log(shoppingCart)


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
  
  // if(countries.includes('Ethiopia')){
  //     console.log('Ethiopia'.toUpperCase())
  // }
  // else{
  //     countries.push('Ethiopia')
  // }
  // console.log(countries)
  
  // if(webTechs.includes('Sass')){
  //     console.log('Sass is a CSS preprocess')
  // }
  // else{
  //     webTechs.push('Sass')
  // }
  // console.log(webTechs)
  
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node', 'Express', 'MongoDB']
  
  const fullStack = [frontEnd+backEnd]
  console.log(fullStack)  