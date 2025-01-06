let  boxes = document.querySelectorAll(".box");

let resetButton = document.querySelectorAll(".reset-button");

let turn0 = true ; //player0 , playerX 

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let count = 0 ;
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0){//player0 turn
            box.innerText = "0";
            turn0 = false ;
            box.classList.add('o');
            count++ ;
        }
        else{//playerX turn 
            box.innerText = "X";
            turn0 = true ;
            box.classList.add('x');
            count++;
        }

        box.disabled = true ;

        let iswinner =checkwinner();

        
    if (count === 9 && !iswinner) {
        displaydraw();
      }


    })
})



const checkwinner = () =>{ 
    for(let pattern of winPatterns){
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;

        if(pos0 != "" && pos1 != "" && pos2 != ""){
            if((pos0 == pos1)  && (pos1 == pos2)){
                console.log(pos0);
                displaywinner(pos0);
                disableboxes();
                return true ;
            }
            
      
        }
 
    }
}

let msgbox = document.querySelector(".msg-box");
let msgcontainer = document.querySelector('.msg-container');
const displaywinner = (pos0) =>{
    msgbox.innerHTML = `Congratulations &#x1F60A;, Winner : ${pos0}`;
   msgcontainer.style.display = 'block';    
    
}

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true ;
    }
}


const displaydraw = () =>{
    msgbox.innerHTML =`It's a Draw`
    msgcontainer.style.display ="block";
}

let reset = document.querySelector(".reset-button");


const resetbtn = () => {
    turn0 = true ;
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false ;
        msgcontainer.style.display ="none";
    }
    count = 0;
}


