"use strict";

//DO NOT TOUCH EXTREMELY SENSITIVE
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let speakers = window.speechSynthesis.getVoices();
let voice = new SpeechSynthesisUtterance('');
voice.default = false;
voice.lang = 'en-GB'; 

speak.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  const content = document.getElementById("display").innerHTML;
  speakers = window.speechSynthesis.getVoices();
  voice.text = content;
  voice.voice = speakers[4];
  console.log(speakers)

  window.speechSynthesis.speak(voice);
});
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//DO NOT TOUCH EXTREMELY SENSITIVE