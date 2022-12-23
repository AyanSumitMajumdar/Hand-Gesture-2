prediction1=""
prediction2=""
Webcam.set({
   width:350,
   height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_uri+'"/>';    
}); 
}

console.log('ml5 version: ',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j4zSr_uGF/model.json',modelloaded);
function modelloaded(){
 console.log('modelloaded');
}

function speak(){
 var synth=window.speechSynthesis;
 speakdata1="The first prediction is "+prediction1;
 speakdata2="The second prediction is "+prediction2;
 var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
 synth.speak(utterThis);

}