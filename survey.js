const readline = require('readline');
const person = {};
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("Whats your name? Nicknames are also acceptable > ", (answer) => {
  person.name = answer;
  rl.question("Whats an activity that you like doing? > ", (answer) => {
    person.favActivity = answer;
    rl.question("What do you listen to while doing that? > ", (answer) => {
      person.musicChoice = answer;
      rl.question("Which meal is your favourite? > ", (answer) => {
        person.favMealTime = answer;
        rl.question("What's your favourite thing to eat for that meal > ", (answer )=> {
          person.favMeal = answer;
          rl.question("Which sport is your absolute favourite > ", (answer) => {
            person.favSport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! > ", (answer) => {
              person.superpower = answer;
              console.log(`${person.name} loves ${person.favActivity} while listening to ${person.musicChoice}. ${person.favMeal} for ${person.favMealTime} is their favourite and ${person.favSport} is their favourite sport. ${person.name}'s superpower is ${person.superpower}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});

