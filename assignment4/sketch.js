function setup(){
    let cnv=createCanvas(windowWidth - 20, 200);
    cnv.id("canvas");
    cnv.parent("movecanvas");
    angleMode(DEGREES);

    describe('Two eyes that follow the cursor.');
}

function draw() {

    // Draw left eye

    let leftX = 100;
    let leftY = 100;

    // Calculate angle between left eye and mouse
    let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

    push();
    translate(leftX, leftY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(leftAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();

    // Draw right eye

    let rightX = 200;
    let rightY = 100;

    // Calculate angle between right eye and angle
    let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

    push();
    translate(rightX, rightY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(rightAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
}