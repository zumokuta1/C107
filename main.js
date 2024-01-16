var SpeechRecognition = window.webkitSpeechRecognition;

var reconognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    reconognition.start();
}

reconognition.onresult = function (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    speak();

    document.getElementById("textbox").innerHTML = Content;

}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    heigth: 250,
    image_format: 'png',
    png_quality: 100
})
camera = document.getElementById("camera");