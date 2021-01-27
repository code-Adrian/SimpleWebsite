
var Data = {

"Table":[

{
        "Days":"monday",
       "Sport":"american Football",
	   "Time":"12:00PM",
	   "Location":"stadium",
       },
       {
	   "Days":"tuesday",
      "Sport":"soccer",
	  "Time":"15:30 PM",
	  "Location":"pitch",
       },
       {
        "Days":"wednesday",
		"Sport":"karate",
		"Time":"9:00 AM",
		"Location":"indoor",
       },
	   {
	   "Days":"thursday",
	   "Sport":"badminton",
	   "Time":"13:30 PM",
	   "Location":"indoor",
	   },
	   {
	   "Days":"friday",
	   "Sport":"table-Tennis",
	   "Time":"16:30 PM",
	   "Location":"indoor",
	   },
	   {
	   "Days":"saturday",
	   "Sport":"archery",
	   "Time":"10:00 AM",
	   "Location":"stadium",
	   },
	   {
	   "Days":"sunday",
	   "Sport":"cycling",
	   "Time":"12:00 PM",
	   "Location":"outdoor",
	   }
      ]
	  
	  
	  
	  
}





//This is Custom helper is used to capitalise the first letter of the day,sport and location of the Week and return the full String with the first letter.

Handlebars.registerHelper("DayOfTheWeek",function(days){
var RestOfTheWords = days.slice(1);
var Uppercase = days.charAt(0).toUpperCase()+RestOfTheWords;
return Uppercase;
});

Handlebars.registerHelper("SportOfTheWeek",function(sport){
var RestOfTheWords = sport.slice(1);
var Uppercase = sport.charAt(0).toUpperCase()+RestOfTheWords;
return Uppercase;
});

Handlebars.registerHelper("Location",function(location){
var RestOfTheWords = location.slice(1);
var Uppercase = location.charAt(0).toUpperCase()+RestOfTheWords;
return Uppercase;
});


$(document).ready(function(){
var template = Handlebars.compile($('#TimeTable-json').html());

var CompiledTemplate = template(Data);


$('#TableTemplate').html(CompiledTemplate);



 $('#Add').submit(function(evt) {
    evt.preventDefault();

  NewSport= {
     Days:$('#day').val(),
     Sport:$('#sport').val(),
     Time:$('#time').val(),
     Location:$('#Location').val(),
  }
  Data.Table.push(NewSport);
  let CompiledTemplate = template(Data);
  $("#TableTemplate").html(CompiledTemplate);
  $('.TableModal').modal('hide');
  $('input[type="text"]').each(function() {
        $(this).val("");
  });
  $('input[type="email"]').val("");
});








});


	 


