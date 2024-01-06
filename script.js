let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let messageContainer = document.querySelector(".message-container");
let message = document.querySelector("#message");

let turnO = true ;//Player X , Player O

const winPatterns = [ 
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,4,6],[2,5,8],
    [3,4,5],[6,7,8]
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  messageContainer.classList.add("hide");

};

//  Here EventListner is used to define a particular box
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       if (turnO) {
        box.innerText = "O";
        turnO = false;
       } else {
        box.innerText = "X";
        turnO = true;
      } 
      box.disabled = true; // Not to change when the 2nd click is done 
      
      checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}; 

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}; 

const showWinner = (winner) => {
    message.innerText = `Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
  };

const checkWinner = () => {
   for(let pattern of winPatterns) {
    let Position1Value = boxes[pattern[0]].innerText;
    let Position2Value = boxes[pattern[1]].innerText;
    let Position3Value = boxes[pattern[2]].innerText;

    if (Position1Value != "" && Position2Value != "" && Position3Value != ""){
        if(Position1Value ===Position2Value &&Position2Value ===Position3Value){
        
            showWinner(Position1Value);
        }
    }
   }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

