mustache_x = 0;
mustache_y = 0;

function preload()
{
  mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}
function setup()
{
    canvas = createCanvas(600,550);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600,550);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
  image(video,0,0,600,550);
  image(mustache,mustache_x,mustache_y,50,50);
}
function take_snapshot()
{
    save("mustache.png")
}
function modelLoaded()
{
    console.log('Model is Loaded');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("mustache_x = " + results[0].pose.nose.x);
        console.log("mustache_y = " + results[0].pose.nose.y);
        mustache_x = results[0].pose.nose.x -15;
        mustache_y = results[0].pose.nose.y +5;
    }
}