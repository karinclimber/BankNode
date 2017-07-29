var fs = require("fs");
var bankAction = process.argv[2];
var money = process.argv[3];

switch(bankAction) {
    case "total":
    total();
    break;

    case "deposit":
    deposit();
    break;

    case "withdraw":
    withdraw();
    break;

    case "lotto":
    lotto();
    break;


function total() {
    fs.readFile("bank.txt", "utf8", function(error, data) {
        if (error) {
            console.log(error);
            return -1;
        } //end of if
data = data.split(",");
var result = 0;

        for (var i = 0; i < data.length; i++) {
             if (parseFloat(data[i])) {
                result += parseFloat(data[i]);
             } //end of if
        } //end of for loop
            console.log("Your balance is " + "$" + result.toFixed(2) + ".");
    }) //end of fs.read
} //end of total function

function deposit() {
    fs.appendFile("bank.txt", `, ${money}`, function(error, data) {
        if (error) {
            console.log(error);
        } //end of if
        total(); //run total function to get updated total
             
    }), //end of fs.append
     console.log(`Deposited: $${money}.`);
} //end of deposit


function withdraw() {
    fs.appendFile("bank.txt", `, ${-money}`, function(error, data) {
        if (error) {
            console.log(error);
        } //end of if
        total(); //run total to get updated total
    }) //end of fs.apped
            console.log(`Withdrew: $${money}.`);
} //end of withdraw function


function lotto() {
    var lottoWin = Math.floor((Math.random() * 10) + 1);
    fs.appendFile("bank.txt", `, ${-money}`, function(error,data) {
        if (error) {
            console.log(error);
        } //end of if
        else if (lottoWin === 2) {
            fs.appendFile("bank.txt", `, ${lottoWin}`, function(error, data) {
            console.log(`You won: $${lottoWin}!`);
            total(); //run total function to get updated total
            }) //end of append lotto win
        }
        else {
            console.log("You lose!");
            total(); //run total function to get updated total
        } //end of else if
         
    }) //end of append money
} //end of lotto function
} //end of switch