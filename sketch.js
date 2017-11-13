let video;
let button;
let snaps=[];
let counter=0;
let go=false;
let total=40;
function ready(){
    go = true;
}

function setup() {
  createCanvas(320,240);
  background(51);
  video = createCapture(VIDEO,ready);
  video.size(320,240);
  button = createButton("snap");
  button.mousePressed(takesnap);
}

function takesnap(){
    snaps.push(video.get());
    image(video,0,0);
}

function draw() {
    if(go){
        snaps[counter]=video.get();
        counter++;
        if(counter===total){
            counter=0;
        }
    }
    let w=80;
    let h=60;
    let x=0;
    let y=0;
    for(let i=0 ; i < snaps.length ; i++){
        let index = (i+frameCount)%snaps.length;
        image(snaps[index],x,y,w,h);
        x=x+w;
        if(x>width){
            x=0;
            y=y+h;
        }
        console.log(snaps);
    }
}