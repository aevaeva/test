var t = 0;
let words = ['ANGELA ANDAL ANGELA ANDAL ANGELA ANDAL ANGELA ANDAL ANGELA ANDAL ANGELA ANDAL'];
let indexWord = 0;
let font1;
let img;
let fontSize;
let horSpace;
let horOffset;

function preload() {
   font1 = loadFont('itc-avant-garde-gothic-std-bold-589572c7e9955.otf');
	 img = loadImage('1681533664529.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	
	textFont(font1);
  fill(255);
  textSize(4);
  textAlign(CENTER);
	
	
	fontSize = createSlider(0, 255, 60);
    fontSize.position(50, 50);
    fontSize.style('width', '80px');
    fontSize.class('slider');

    horSpace = createSlider(0, 255, 50);
    horSpace.position(50, 100);
    horSpace.style('width', '80px');
    horSpace.class('slider');

    horOffset = createSlider(0, 255, 50);
    horOffset.position(50, 150);
    horOffset.style('width', '80px');
    horOffset.class('slider');
}

function draw() {
  background(0);
	let horSpaceVal = horSpace.value();
	let horOffsetVal = horOffset.value();
	let fontSizeVal = fontSize.value();
	textSize(fontSizeVal);
	
	
	image(img, 0, 0, windowWidth, windowHeight);
	t++;
	let textWid = textWidth(words[indexWord]);
	translate((windowWidth/2)-(textWid/2+950) , 0);
	
	for (var a = 0; a< 11; a++) {
		for (var b = 0; b< words[indexWord].length; b++) {
		 var dx = 20*sin(radians(t*2+b*30));
		 // dx = 1;
		 let	letters = (words[indexWord].length)*textAscent();
		 text(words[indexWord][b], horSpaceVal*b+(10+dx)+a*horOffsetVal, (a*70)); 
			// text(words[indexWord][b], (50*b)+(100+dx)*b, 50*a); 
		}
	}
}
