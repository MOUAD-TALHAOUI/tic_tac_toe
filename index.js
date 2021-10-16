let turn="x";
let cells = [];
let winner=0;
initcells();

let xPlayerScore=0;
let oPlayerScore=0;
draw();
function initcells(){
    for (let i = 1; i < 10; i++) {
        
        cells.push({
          value: ""
        });
      }
}
 function replay(){
    cells=[];
    initcells();
    draw();
    const message = document.getElementById("message");
    message.innerHTML=`<h1></h1>`;
    winner=0;
}

function printscore(){
     scores="X : "+xPlayerScore+" : " +oPlayerScore +" : O";
    const scoreh = document.getElementById("score");
    scoreh.innerHTML=`<h1>${scores}</h1>`
}
  

  function draw(){
    for (let i = 1; i < 10; i++) {
        const cell = document.getElementById(""+i);
        cell.innerHTML=`<h1>${""+cells[i-1].value}</h1>`;
      }
      printscore();

  }

  function changeAndDraw(j){
    let cellss=[];
    for (let i = 1; i < 10; i++) {
       if(i===j){
        cellss.push({
            
            value: `${turn}`
          });
       } else{
        cellss.push({
          
          value: `${""+cells[i-1].value}`
        });
      }
    }
    cells=cellss;

    draw();
  }

  function play(i){
    console.log(i);
    console.log(cells);
    
    if(winner===0 && turn==="x" && cells[i-1].value===""){
        
        changeAndDraw(i);
        const cell = document.getElementById(""+i);
        cell.innerHTML=`<h1>${""+cells[i-1].value}</h1>`;
        checkwinner();
        turn="o";
    }
    else if(winner===0 && cells[i-1].value===""){

        changeAndDraw(i);
        const cell = document.getElementById(""+i);
        cell.innerHTML=`<h1>${""+cells[i-1].value}</h1>`;
        checkwinner();
        turn="x";
    }
  }

function  checkwinner(){
if(cells[0].value===cells[1].value && cells[2].value===cells[1].value && cells[0].value!=="" && cells[2].value!=="" && cells[1].value!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" player won"}</h1>`;
    winner=1;
    if(turn==="x"){
        xPlayerScore++;
    }else {
        oPlayerScore++;
    }
}else
if(cells[3].value===cells[4].value && cells[4].value===cells[5].value && cells[5].value!=="" && cells[3].value!=="" && cells[4].value!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" player won"}</h1>`;winner=1;
    if(turn==="x"){
        xPlayerScore++;
    }else {
        oPlayerScore++;
    }
}else 
if(cells[6].value===cells[7].value && cells[7].value===cells[8].value 
    && cells[6].value!=="" && cells[7].value!=="" && cells[8].value!==""
    ){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        xPlayerScore++;
    }else {
        oPlayerScore++;
    }
}else 
if(cells[0].value===cells[3].value && cells[3].value===cells[6].value
    && cells[0].value!=="" && cells[3].value!=="" && cells[6].value!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        xPlayerScore++;
    }else {
        oPlayerScore++;
    }
}else 
if(cells[1].value===cells[4].value && cells[4].value===cells[7].value
    && cells[1].value!=="" && cells[4].value!=="" && cells[7].value!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        xPlayerScore++;
    }else {
        oPlayerScore++;
    }
}else 
if(cells[2].value===cells[5].value && cells[5].value===cells[8].value
    && cells[2].value!=="" && cells[5].value!=="" && cells[8].value!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        xPlayerScore++;
    }else {
        oPlayerScore++;
    }
}else if(cells[0].value===cells[4].value && cells[4].value===cells[8].value
    && cells[0].value!=="" && cells[4].value!=="" && cells[8].value!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        xPlayerScore++;
    }else {
        oPlayerScore++;
    }
}else if(cells[6].value===cells[4].value && cells[4].value===cells[2].value
    && cells[6].value!=="" && cells[4].value!=="" && cells[2].value!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;    if(turn==="x"){
        xPlayerScore++;
    }else {
        oPlayerScore++;
    }
}

}

