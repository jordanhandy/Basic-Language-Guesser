let chalk = require("chalk"); // For color coding
let franc = require("franc"); // For language processing
let langs = require("langs"); // To get the language codes

let code = franc(process.argv[2], { minLength: 3 }); // Take the cmd-line arguments
// If undefined, tell user
if (code === "und") {
  console.log(chalk.bold.red("Unable to find language.  Try again"));
}
// Else output the name of the language detected
else {
  try {
    console.log(chalk.bold.green(langs.where("3", `${code}`).name));
  } catch (e) {
    // If failed, catch error
    console.log(chalk.bold.blue("Language code undefined in database"));
  }
}
