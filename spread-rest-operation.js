// Spread used in object 
const person = {
    name: 'Samon',
    age: 24,
    greet()
    {
        console.log('Hi, I am ' + this.name);
    }
};

const copyOfObj = {...person};

const hobbies =  ['Writting', 'Coding'];
const copyOfArray = [...hobbies];

console.log(copyOfArray);
console.log(copyOfObj);

// Rest used in argument

const toArray = (...args) => 
{
    return args;
}

console.log(toArray(1, 2, 3, 4, 5));