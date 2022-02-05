noseX = 0;
noseY = 0;

function preload()
{
   lipstick = loadImage("https://i.postimg.cc/KjJwyr0s/PNGPIX-COM-Lips-PNG-Transparent-Image-2.png");
}

function setup() 
{

   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses );
}

function draw() 
{

    image(video, 0, 0, 300, 300);
    image(lipstick, noseX, noseY, 40, 40);

}

function take_snapshot() 
{

    save('fliterimage.png');

}

function modelLoaded() 
{

    console.log("posenet is initialized");

}

function gotPoses(results)
{

    if(results.length > 0) 
    {
      console.log(results);
      noseX = results[0].pose.nose.x-16;
      noseY = results[0].pose.nose.y+14;
      console.log("nose x = "+noseX);
      console.log("nose y = "+noseY);
    }

}
