function fun1(){
    element1 = document.getElementById('dice-1');
    element2 = document.getElementById('dice-2');
    let dice_1 = addclass(element1);
    let dice_2 = addclass(element2);
    if (dice_1 > dice_2)
        document.getElementById('heading').innerHTML = "Player 1 is Win 🚩";
    else if (dice_1 < dice_2)
        document.getElementById('heading').innerHTML = "Player 2 is Win 🚩";
    else
        document.getElementById('heading').innerHTML = "Game Draw 🥳";
}

function addclass(element){
    let diceClass = element.classList[1];
    let dice = Math.floor(Math.random()*6)+1
    element.classList.remove(diceClass);
    switch(dice){ 
        case 1:
            element.classList.add('fa-dice-one');
            break; 
        case 2:   
            element.classList.add('fa-dice-two');
            break;
        case 3:
            element.classList.add('fa-dice-three');
            break;
        case 4:
            element.classList.add('fa-dice-four');
            break;
        case 5:
            element.classList.add('fa-dice-five');
            break;
        case 6:
            element.classList.add('fa-dice-six');
            break;
        default:
            break;
    }

    return dice;
}
