import { fruits } from './foods';
import { choice, remove } from './helpers';

// Randomly draw a fruit from the array
const randomFruit = choice(fruits);

// Log the messages
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log('Delicious! May I have another?');

// Remove the fruit from the array of fruits
const fruitsLeft = remove(fruits, randomFruit);

// The final message
console.log(`I'm sorry, we're all out. We have ${fruitsLeft.length} left.`);