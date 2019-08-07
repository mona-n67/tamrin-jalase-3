var usernames =['mona', 'nasiri', 'sahar', 'mojdeh', 'omidi', 'shadi', 'sina', 'ali', 'jafari', 'reza'];
var question = prompt('Please enrer your username');
var b = usernames.indexOf(question);

if (b == -1){
    alert('access denied ' + question);
}
else{
    alert('Welcome ' + question);   
}
