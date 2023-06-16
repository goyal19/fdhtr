song=""
song2=""
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

scoreleftwrist=0;
scorerightwrist=0;


function preload(){
    song=loadSound("song.mp3")
    song2=loadSound("song2.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
 video.hide();   
}

function draw(){
    image(video,0,0,600,500);
    fill("#03f4fc");
    stroke("#03d3fc");
    if(scoreleftwrist>0.2){
        circle(leftwristx,leftwristy,20);
        InNumberleftwristy=Number(leftwristy);
        remove_decimal=floor(InNumberleftwristy);
        volume=remove_decimal/500;
        document.getElementById("volume").innerHTML="Volume - "+volume;
        song.setVolume(volume);
    
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1)
}
function gotposes(results){
 if(results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
 }   
}
