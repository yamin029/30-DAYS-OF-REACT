const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let maxSkills = 0;
let maxSkillsUsers;

for (const key in users) {
    skillsLength = users[key].skills.length;
    if (skillsLength > maxSkills) {
        maxSkills = skillsLength;
        maxSkillsUsers = key
    }
}

//   console.log(maxSkillsUsers)

const highestPointsUsers = [];
for (const key in users) {
    if (users[key].points >= 50) {
        highestPointsUsers.push(key)
    }
}

// console.log(highestPointsUsers)

const mearnStack = [];
const mearnStackSkills = ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'];
for (const key in users) {
    const userSkills = users[key].skills;
    // let allSkillsMatched = userSkills.every(skill => mearnStackSkills.includes(skill));
    let allSkillsMatched = mearnStackSkills.every(skill => userSkills.includes(skill));
    if(allSkillsMatched){
        mearnStack.push(key)
    }
    // console.log(key, allSkillsMatched)
    // for (const skill of userSkills) {
    //     // console.log(skill)
    //     if (mearnStackSkills.includes(skill)) {
    //         mearnStack.push(key)
    //     }
    // }
}
// console.log(mearnStack)

const copiedObject = {...users}
copiedObject.Paul = 'Yamin'
console.log(copiedObject)