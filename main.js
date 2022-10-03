moustacheX=0
moustacheY=0

function preload(){
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw() {
    image(video, 0, 0, 300, 300 )
    image(moustache, moustacheX, moustacheY, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png')
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        moustacheX =   results[0].pose.nose.x;
        moustacheY =   results[0].pose.nose.y;
        console.log("moustache x = " + moustacheX);
        console.log("moustache y = " + moustacheY);
    }
}
function modelLoaded(){
    console.log("PoseNet is loaded")
}