song1 = "";
song2 = "";
xl = 0;
yl = 0;
xr = 0;
yr = 0;

function preload() 
{   song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotPoses(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        if(results.length > 0)
        {
            xl = results[0].pose.leftWrist.x;
            yl = results[0].pose.leftWrist.y;

            xr = results[0].pose.leftWrist.x;
            yr = results[0].pose.leftWrist.y;
        }
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}