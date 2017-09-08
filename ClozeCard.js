// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
// module.exports = ClozeCard;

// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
var fs = require("fs");
var inquirer = require("inquirer");

var ClozeCard = function(text, partial, cloze) {
    this.text = text;
    this.partial = partial;
    this.cloze = cloze;
}

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;