var fs = require("fs");
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");


inquirer.prompt([

        {
            type: "list",
            message: "flashcards",
            choices: ["basic", "cloze"],
            name: "command"
        }

    ])

    .then(function(inquirerResponse) {

        //What to do with the choice
        //switch statement
        switch (inquirerResponse.command) {
            case "basic":

                var firstPresident = new BasicCard(
                    "Who was the first president of the United States?", "George Washington");

                console.log(firstPresident.front);

                inquirer.prompt([{
                    type: "input",
                    message: "answer",
                    name: "answer"
                }]).then(function(userResponse) {
                    if (userResponse.answer === firstPresident.back) {
                        console.log("Correct");
                    } else {
                        console.log("Incorrect")
                    }
                })
                break;

            case "cloze":

                var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.",
                    "... was the first president of the United States.",
                    "George Washington");

                // " ... was the first president of the United States."
                console.log(firstPresidentCloze.partial);
                inquirer.prompt([{
                    type: "input",
                    message: "answer",
                    name: "answer"
                }]).then(function(userResponse) {
                    if (userResponse.answer === firstPresidentCloze.cloze) {
                        console.log("Correct");
                    } else {
                        console.log("Incorrect")
                    }
                })

                break;
        }
    });