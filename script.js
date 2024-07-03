let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;//player1

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    for(let box of boxes){
        box.innerText = "";
    }

};

const showDraw = () => {
    msg.innerText = "Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();

}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("boxwas clicked");

        if(turnO ){ //player O
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "x";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    
   });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";

    };
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    };
};

const showWinner = (winner) =>{
    msg.innerText = `congratulation, Winner is ${winner}`; 
    msgContainer.classList.remove("hide"); 
    disableBoxes();
};

const checkWinner =() => {
    let draw = true;
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" || pos2Val != "" || pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return
            }
            if(pos1Val=== "" || pos2Val === "" || pos3Val === ""){
                draw = false;
            }
        }
            
        }
        if(draw){
            showDraw();
            console.log("draw");   
    }
}



    
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

