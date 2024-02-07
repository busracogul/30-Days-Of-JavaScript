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

// Exercises 1
let maxSkills = 0;
let skillsPerson = "";

for (const person in users) {
    const skillsCount = users[person].skills.length;

    if (skillsCount > maxSkills) {
        maxSkills = skillsCount;
        skillsPerson = person;
    }
}
console.log(`${skillsPerson}`);

// Exercises 2
let loginCount = 0;
let highPointCount = 0;

for (const person in users) {
    if (users[person].isLoggedIn) {
        loginCount++;
    }

    if (users[person].points >= 50) {
        highPointCount++;
    }
}
console.log(`Login Count: ${loginCount}`);
console.log(`High Point Count: ${highPointCount}`);

// Exercises 3
function findDevelopers(users) {
    const mernDevelopers = [];

    for (const userName in users) {
        const userData = users[userName];
        const skills = userData.skills;

        if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
            mernDevelopers.push(userName);
        }
    }
    return mernDevelopers;
}
console.log(findDevelopers(users));

// Exercises 4
const copyUsers = Object.assign({}, users);
copyUsers.Busra = {
    email: 'cogulbusra@gmail.com',
    skills: ['HTML', 'CSS', 'Javascript', 'Sass'],
    age: 22,
    isLoggedIn: false,
    points: 65
}
console.log(copyUsers);

// Exercises 5
console.log(Object.keys(users));

// Exercises 6
console.log(Object.values(users));
