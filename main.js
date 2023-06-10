song = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload() {
    song = loadSound('music.mp3');
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    Posenet = ml5.poseNet(camera, modelLoaded);
    Posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model loaded successfuly!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function draw() {
    image(camera, 0, 0, 600, 450);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function playsong() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stopsong() {
    song.stop();
}