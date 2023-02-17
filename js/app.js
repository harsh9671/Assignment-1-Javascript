// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create arrays of words that will be used to build the story
var nouns = ['The turkey','Mom','Dad','The dog','My teacher','The elephant','The cat'];
var verbs = ['sat on','ate','danced with','saw',"doesn't like",'kissed'];
var adjective = ['a funny','a scary','a goofy','a slimy','a barking','a fat'];
var nouns2 = ['goat','monkey','fish','cow','frog','bug','worm'];
var settings = ['on the moon','on the chair','in my spaghetti','in my soup','on the grass','in my shoes'];

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

var textToSpeak
// Onclick handler for the buttons to pick a random word
document.getElementById('b1').onclick = function(){
	textToSpeak= nouns[Math.floor(Math.random()*nouns.length)];
}
document.getElementById('b2').onclick = function(){
	textToSpeak = textToSpeak+" "+ verbs[Math.floor(Math.random()*verbs.length)];
}
document.getElementById('b3').onclick = function(){
	textToSpeak = textToSpeak+" "+ adjective[Math.floor(Math.random()*adjective.length)];
}
document.getElementById('b4').onclick = function(){
	textToSpeak = textToSpeak+" "+ nouns2[Math.floor(Math.random()*nouns2.length)];
}
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
document.getElementById('b5').onclick = function(){
	textToSpeak = textToSpeak+" "+ settings[Math.floor(Math.random()*settings.length)];
	 console.log(textToSpeak);
	 document.querySelector('label').innerHTML = 'Your story: '+ textToSpeak;
}

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text',
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
document.getElementById('b6').onclick = function() {	
	speakNow(textToSpeak);
}

var randomStory;
//Extra 
// Onclick handler for the button to generate a story with one click
document.getElementById('b7').onclick = function(){
    randomStory = nouns[Math.floor(Math.random()*nouns.length)];
	randomStory = randomStory +" "+ verbs[Math.floor(Math.random()*verbs.length)];
	randomStory = randomStory +" "+ adjective[Math.floor(Math.random()*adjective.length)];
	randomStory = randomStory +" "+ nouns2[Math.floor(Math.random()*nouns2.length)];
	randomStory = randomStory +" "+ settings[Math.floor(Math.random()*settings.length)];
	console.log(randomStory)
	document.querySelector('label').innerHTML = "Generated story: " + randomStory;
	speakNow(randomStory);
}
// Onclick handler for the button to reset the story
document.getElementById('b8').onclick = function(){
	randomStory = "";
	document.querySelector('label').innerHTML = "";
}