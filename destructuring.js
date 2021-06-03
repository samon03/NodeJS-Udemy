const person = {
    name: 'Shiliya', 
    age: 24,
    greet()
    {
        console.log('Hi, I am '+ this.name);
    }
};

const printName = (personData) =>
{
    console.log(personData.name);
}

printName(person);

const printName2 = ({ name }) =>
{
    console.log(name);
}

printName2(person);

// Object Destruturing
const objDestruturing = {name, age, greet} = person;
console.log(name, age, greet);

// Array Destruturing

const hobbies = ['Writting', 'Coding'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);