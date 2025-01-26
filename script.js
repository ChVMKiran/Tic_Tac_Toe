let boxes = document.querySelectorAll(".box");
// let turn='X';
let count=0;
let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let user_score=0;
let comp_score=0;

let checkWinner=(move)=>{
    let flag=false;
    wins.forEach((w)=>{;
        if(boxes[w[0]].innerText===move&&boxes[w[1]].innerText===move&&boxes[w[2]].innerText===move){
            if(move==='X'){
                user_score++;
                let par = document.getElementById("plyr");
                par.innerText=user_score;
                let winner = document.getElementById("msg");
                winner.innerText="You won !";
                rst();
            }
            else{
                comp_score++;
                let par = document.getElementById("comp");
                par.innerText=comp_score;
                let winner = document.getElementById("msg");
                winner.innerText='Computer Won !';
            }
            rst();
            flag=true;
            return flag;
        }
    });
    return flag;
}

let comp=()=>{
    while(1){
        let ran = Math.floor(Math.random()*9);
        if(!boxes[ran].classList.contains("disabled")){
            boxes[ran].innerText='O';
            boxes[ran].classList.add("disabled");
            count++;
            break;
        }
    }
    if(checkWinner('O'))rst();
}

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(!box.classList.contains("disabled")){
            box.innerText='X';
            // document.getElementById("turn").innerText=`${turn}'s turn`;
            box.classList.add("disabled");
            count++;
            if(count===9){
                if(!checkWinner('X'))document.getElementById("msg").innerText="That's a tie";
                rst();
            }
            else{
                let flag = checkWinner('X');
                console.log(flag);
                if(flag===false)comp();
                else rst();
            }
        }
    });
});

let rstbtn=document.getElementById("rstbtn");
rstbtn.onclick=()=>{
    // console.log("hi");
    rst();
}
let rst = () =>{
    count=0;
    // document.getElementById("msg").innerText="";
    boxes.forEach((box)=>{
        box.innerText="";
        if(box.classList.contains("disabled"))box.classList.remove("disabled");
    });
};