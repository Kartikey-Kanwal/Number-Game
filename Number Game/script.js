const Timer_Display = document.getElementById('Timer')
const Target_Display = document.getElementById('Target')
const Score_Display = document.getElementById('Score')

const Bubble_Container= document.querySelector('.Bubble_Container')

let Original_Time = 20;
let Time_Left = 20;
let Score = 0;

let Bubble_Count = 160;

function Create_Bubbles(){
    Bubble_Container.innerHTML = ''
    for(let i = 1; i<= Bubble_Count; i++){
        const Bubble = document.createElement('div');
        Bubble.classList.add("Bubble");
        Bubble.textContent = Math.floor(Math.random()*10);
        Bubble_Container.appendChild(Bubble)
    }
}

function Gen_Target(){
    const Target = Math.floor(Math.random()*10)
    Target_Display.innerText = Target;
}

function Start_Timer(){
    const Time_Inv = setInterval(()=>{
        Time_Left--;
        Timer_Display.textContent = Time_Left;
        if (Time_Left === 0){
            clearInterval(Time_Inv);
            Bubble_Container.innerHTML = 
            `<div class="Append_Container">
                <div class="Game_Over"><strong>GAME OVER</strong></div>
                <div class="Final_Score">Score : <strong>${Score}</strong></div>
                <button class="Reset_Btn" onclick="Reset_Game()"><strong>RESTART</strong></button>
            </div>`
        }
    },1000)
}

function Reset_Game(){
    Time_Left = Original_Time;
    Score = 0;
    Timer_Display.textContent = Original_Time;
    Score_Display.textContent = 0;
    Start_Game();
}

function Start_Game(){
    Create_Bubbles();
    Gen_Target();
    Start_Timer();
}

Bubble_Container.addEventListener('click',(event)=>{
    if(event.target.classList.contains('Bubble')){
        if(event.target.textContent === Target_Display.textContent){
            Score+=10;
        }
        else{
            Score-=5;
        }
        Score_Display.textContent = Score;

        Gen_Target();
        Create_Bubbles();
    }
})

Create_Bubbles();
Gen_Target();
Start_Timer();