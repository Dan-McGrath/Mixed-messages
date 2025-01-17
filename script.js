const dadJokes = [
  "I used to be addicted to soap, but I'm clean now.",
  "A guy walks into a bar... and he was disqualified from the limbo contest.",
  "You think swimming with sharks is expensive? Swimming with sharks cost me an arm and a leg.",
  "When two vegans get in an argument, is it still called a beef?",
  "I ordered a chicken and an egg from Amazon. I'll let you know...",
  "Do you wanna box for your leftovers?",
  "No, but I'll wrestle you for them.",
  "That car looks nice but the muffler seems exhausted.",
  "Shout out to my fingers. I can count on all of them.",
  "If a child refuses to nap, are they guilty of resisting a rest?",
];

const energyLevel = ["High", "Blah", "Low"];

const advice = ["Get some sleep!", "Eat some food!", "Drink some coffee."];

let message = [];

const getRandIndx = (arrLength) => {
  let randIndx = Math.floor(Math.random() * arrLength);
  return randIndx;
};

const getJoke = (arr) => {
  let randIndx = getRandIndx(arr.length);
  return `Here's a joke to keep you going: ${arr[randIndx]}`;
};

const getEnergyLevel = (arr) => {
  let randIndx = getRandIndx(arr.length);
  return arr[randIndx];
};

const getAdvice = (arr) => {
  let randIndx = getRandIndx(arr.length);
  return `You should: ${arr[randIndx]}`;
};

const createMessage = () => {
  const energy = getEnergyLevel(energyLevel);
  if (energy === "High") {
    message.push(`Your energy level is: ${energy}`);
    message.push(getJoke(dadJokes));
  } else {
    message.push(`Your energy level is: ${energy}`);
    message.push(getJoke(dadJokes));
    message.push(getAdvice(advice));
  }
  return console.log(message.join("\n"));
};

createMessage();
