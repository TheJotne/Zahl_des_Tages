//start with python -m http.server 8000
const STARTSPEED=50
const STARTTIME=5

let time=STARTTIME
let speed=STARTSPEED
let divElement= document.getElementById("number")

let colors=[
{first:"#a7c957" ,second: "#bc4749" },
{first:"#e4c1f9" ,second: "#fcf6bd" },
{first:"#eae2b7" ,second: "#d62828" },
{first:"#f77f00" ,second: "#003049" },
{first:"#84a59d" ,second: "#f5cac3" } 
]

let r = document.querySelector(':root');

let randomNumber=Math.round(getRandomArbitrary(0, colors.length-1))

r.style.setProperty('--first-color',  colors[randomNumber].first);
r.style.setProperty('--second-color', colors[randomNumber].second);

function countDown(){
    if(time<STARTTIME &&time>0)
        speed=speed*2
    if(time>0){
        time--
        
        setTimeout( countDown, 2000);
    }
}

function showNumbers(){
    if(time>0){
        let randomNumber=Math.round(getRandomArbitrary(100,999))
        divElement.innerHTML=randomNumber
        
        setTimeout(showNumbers, speed);
    }
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function startCountdown(){
    time=STARTTIME
    speed=STARTSPEED
    countDown()
    showNumbers()
  }
  
  