const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = "";

rl.question("What do you think of Node.js? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  result += `What do you think of Node.js? ${answer} \n`;
  rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    result += `What's your name? Nicknames are also acceptable :) ${answer} \n`;
    rl.question("What's an activity you like doing? ", (answer) => {
      console.log(`What's an activity you like doing?: ${answer}`);
      result += `What's an activity you like doing? ${answer} \n`;
      rl.question("What do you listen to while doing that? ", (answer) => {
        console.log(`What do you listen to while doing that?: ${answer}`);
        result += `What do you listen to while doing that? ${answer} \n`;
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
          console.log(`Which meal is your favourite (eg: dinner, brunch, etc.): ${answer}`);
          result += `Which meal is your favourite (eg: dinner, brunch, etc.) ${answer} \n`;
          rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
            console.log(`What's your favourite thing to eat for that meal?: ${answer}`);
            result += `What's your favourite thing to eat for that meal? ${answer} \n`;
            rl.question("Which sport is your absolute favourite? ", (answer) => {
              console.log(`Which sport is your absolute favourite?: ${answer}`);
              result += `Which sport is your absolute favourite? ${answer} \n`;
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                console.log(`What is your superpower? In a few words, tell us what you are amazing at!: ${answer}`);
                result += `What is your superpower? In a few words, tell us what you are amazing at! ${answer} \n`;
                console.log();
                console.log(result);
                rl.close();
              });
            });
          });
        });
      });
    });
  }
  );
});

