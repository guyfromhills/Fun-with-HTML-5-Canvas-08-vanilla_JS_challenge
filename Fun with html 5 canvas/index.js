

//grabbing canvas
const canvas = document.querySelector("#draw");

//grabbing context to draw
const ctx = canvas.getContext("2d");

//resizing
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//strokestyle specifies the colour, gradient or pattern
ctx.strokeStyle = "#Badass";

//line join specifies shape used to join two line segments when they meet
ctx.linejoin="round";

//linecap specifies the shape used to draw the end points of line
ctx.lineCap="round";

ctx.lineWidth=100;

//setting hue
let hue = 0;

//a kind of a flag, that only draws when mouse down
let isDrawing = false;

//building up or down
let direction = true;

//start and stop points for line
let lastX = 0;
let lastY = 0;

//for different blend modes
// ctx.globalCompositeOperation = "multiply";

function draw(e){
    if(!isDrawing)                                                     //draws only when mouse down
    {
        return true;
    }

    //setting in hsl values
    ctx.strokeStyle=`hsl(${hue},100%,50% )`;

   


    ctx.beginPath();

    //go to
    ctx.moveTo(lastX,lastY);

    //line to
    ctx.lineTo(e.offsetX,e.offsetY);

    ctx.stroke();

    //update last point ( destructuring an array)
    [lastX, lastY] = [e.offsetX, e.offsetY];

    //incrementing hue
    hue++;

    if( hue >= 360)
    {
        hue = 0;
    }

    if( ctx.lineWidth >= 200 || ctx.lineWidth <= 1)
    {
        direction = !direction;
    } 

    if( direction)
    {
    ctx.lineWidth++;
    }

    else{
        ctx.lineWidth--;
    }




}

canvas.addEventListener("mousedown",function (e){                      //is drawing set to true on mousedown
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];                          //updating first point to be where mouse down happens

});



canvas.addEventListener("mousemove",draw);

canvas.addEventListener("mouseup", function (){                       //is drawing set to false on mouseup
    isDrawing = false;
})
canvas.addEventListener("mouseout", function (){                       //is drawing set to false on mouseout
    isDrawing = false;
})