img = "";

function preload() {
img = loadImage("loki.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#000066");
    text("Tv", 231, 205);
    noFill();
    stroke("#000066");
    rect(220, 190, 310, 150)

    fill("#000066");
    text("Ac", 267, 35);
    noFill();
    stroke("#000066");
    rect(253, 20, 270, 113);
}