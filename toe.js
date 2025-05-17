let btns = document.querySelectorAll(".btn");

let rbtn = document.querySelector("#reset");

let newbtn=document.querySelector(".new");

let msgcont=document.querySelector(".msg");

let h3=document.querySelector("h3");

let turno = true;


let wins = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
const disablebtn=()=>{
    for(let btn of btns)
    {
        btn.disabled=true;
    }
}

const enablebtn=()=>{
    for(let btn of btns)
    {
        btn.disabled=false;
        btn.innerText="";
    }
 
}

const showwinner=(winner)=>{
 h3.innerText=`Winner is ${winner}`;
 msgcont.classList.remove("hide");
 disablebtn();
}

const checkwin = () => {
    for (let pattern of wins) {

        let val1 = btns[pattern[0]].innerText;
        let val2 = btns[pattern[1]].innerText;
        let val3 = btns[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3 && val1 === val3) {
               
                showwinner(val1);
            }
        }
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        if (turno) {
           btn.style.color="blue";
            btn.innerText = "O";
            turno = false;
        }
        else {
            btn.style.color="red";
            btn.innerText = "X";
            turno = true;
        }
        btn.disabled = true;
        checkwin();
    });

});

const reset=()=>{
    turno=true;
    enablebtn();
    msgcont.classList.add("hide");
}
newbtn.addEventListener("click",reset);
rbtn.addEventListener("click",reset);