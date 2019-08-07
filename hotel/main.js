var hotel = {
    name : 'Golden Age1',
    facilities : ['Parking', 'Free WiFi', 'Food & Drink', 'Airport shuttle'],
    star : 4 ,
    Room : ['Bath', 'Balcony', 'Sea view', 'Tv', 'Coffee machine'],
    city : 'Istanbul',
    Bed : ['Twin beds', 'Double bed']
};
var htl = prompt("what do you want to know about hotel ??? name OR facilities OR star OR Room OR city");
alert (hotel[htl]);

var change = prompt("do you want to change " + hotel[htl] + " ? yes OR no");

if(change == "yes"){
   var y = prompt("Please enter your change");
   console.log(y);
}
else{
    console.log(hotel[htl]);
}

// OR 
//  var a = (change == "yes") ? console.log(prompt("enter your change please.")) : console.log(hotel[htl]) ;
// End