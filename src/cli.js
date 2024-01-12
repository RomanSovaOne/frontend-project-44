import readlineSync from 'readline-sync';

console.log('brain-games');
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
export default name;

console.log(`Hello, ${name}!`);
