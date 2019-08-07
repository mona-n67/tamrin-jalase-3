// var num_user = Number(prompt('Please enter a number :'));
// document.write('Your number is : ' + num_user + '<br>');

// if(num_user % 5 == 0 && num_user % 2 == 0 ){
//     document.write('You winnnnnnn')
// }
// else{
//     document.write('You loseeeeee')
// }

var usernames = ["sharifi", "saadat", "mojdeh", "amiri", "afshar", "eslami", "sahar", "rahimi", "reza", "ashkaan", "asadi", "peymaan", "payam", "kameli", "azari", "raziee", "sahand", "golmohamadi", "jjj", "eslami", "radin", "raad", "hadian"];
console.log(usernames[3]);
var quistion = prompt("Enter your username?");
var j = usernames.indexOf(quistion);
var d = (j == -1) ? alert(" access denied " + quistion) : alert(" Welcom " + quistion);