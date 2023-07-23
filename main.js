x = 0;
y = 0;


   var Speech = window.webkitSpeechRecognition;
   var spr = new Speech();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  spr.start();
  background("White");
} 
function setup() {
  canvas = createCanvas(1300,500);
  background("White");


}

function preload(){
  apple = loadImage("apple.png")
}

function draw() {
  
} 

spr.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    
  no = Number(content);
  
  if(Number.isInteger(no)){
    check(no,no)
   }
  else{
    document.getElementById("status").innerHTML  = "Speech Has Not Recognised As number";
  }
}
function check(e,f){
  
    if(e != 0 )
  {   
    x = Math.floor(Math.random()*1300);
    y = Math.floor(Math.random()*500);
    e--
       image(apple, x, y, 20, 20 )
    check(e)
  }
  else{
    document.getElementById("status").innerHTML =  + " Apples drawn";
  }




 
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
