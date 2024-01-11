let gamebutton = document.querySelectorAll('.button');
let reset_button = document.querySelector('.resetbtn');
let winnercontainer = document.querySelector('.winnercontainer');
let winner = document.querySelector('.winner');

let player0 = true;

let winningPossibility = [[0,1,2],
                          [0,3,6],
                          [0,4,8],
                          [1,4,7],
                          [2,5,8],
                          [2,4,6],
                          [3,4,5],
                          [6,7,8]
                        ];

gamebutton.forEach((game_button) => {
    game_button.addEventListener('click',() => {
        console.log("button");
        if(player0){
            game_button.innerText = "O";
            player0 = false;
        }
        else{
            game_button.innerText = "X"; 
            player0 = true;           
        }
        game_button.disabled = true;

        checkWinner();
    });
});

const disabledbuttons = () => {
    for(let btn of gamebutton){
        btn.disabled = true;
    }
}

const enabledbuttons = () => {
    for(let btn of gamebutton){
        btn.disabled = false;
        btn.innerText = "";
    }
}

const displayWinner = (winnerText) => {
    winner.innerText = `Congratulations,Winner is ${winnerText}`;
    winnercontainer.classList.remove("hide");
    disabledbuttons();
}

const checkWinner = () => {
    for(let possibility of winningPossibility){
        let pos1 = gamebutton[possibility[0]].innerText;
        let pos2 = gamebutton[possibility[1]].innerText;
        let pos3 = gamebutton[possibility[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner",pos1);
            winner.innerText = pos1;
            displayWinner(pos1);
            }
        }
    }
}

reset_button.addEventListener('click',()=>{
    turn0 = true;
    enabledbuttons();
    winnercontainer.classList.add("hide");
});