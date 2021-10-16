let turn="x";
let cells = [];
let winner=0;
initcells();

let x=0;
let o=0;
draw();
function initcells(){
    for (let i = 1; i < 10; i++) {
        
        cells.push({
          x: i,
          element: "",
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
     scores="X : "+x+" : " +o +" : O";
    const scoreh = document.getElementById("score");
    scoreh.innerHTML=`<h1>${scores}</h1>`
}
  

  function draw(){
    for (let i = 1; i < 10; i++) {
        const cell = document.getElementById(""+i);
        cell.innerHTML=`<h1>${""+cells[i-1].element}</h1>`;
      }
      printscore();

  }

  function changeAndDraw(j){
    let cellss=[];
    for (let i = 1; i < 10; i++) {
       if(i===j){
        cellss.push({
            x: i,
            element: `${turn}`,
          });
       } else{
        cellss.push({
          x: i,
          element: `${""+cells[i-1].element}`,
        });
      }
    }
    cells=cellss;

    draw();
  }

  function play(i){
    console.log(i);
    console.log(cells);
    
    if(winner===0 && turn==="x" && cells[i-1].element===""){
        
        changeAndDraw(i);
        const cell = document.getElementById(""+i);
        cell.innerHTML=`<h1>${""+cells[i-1].element}</h1>`;
        checkwinner();
        turn="o";
    }
    else if(winner===0 && cells[i-1].element===""){

        changeAndDraw(i);
        const cell = document.getElementById(""+i);
        cell.innerHTML=`<h1>${""+cells[i-1].element}</h1>`;
        checkwinner();
        turn="x";
    }
  }

function  checkwinner(){
if(cells[0].element===cells[1].element && cells[2].element===cells[1].element && cells[0].element!=="" && cells[2].element!=="" && cells[1].element!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;
    winner=1;
    if(turn==="x"){
        x++;
    }else {
        o++;
    }
}else
if(cells[3].element===cells[4].element && cells[4].element===cells[5].element && cells[5].element!=="" && cells[3].element!=="" && cells[4].element!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        x++;
    }else {
        o++;
    }
}else 
if(cells[6].element===cells[7].element && cells[7].element===cells[8].element 
    && cells[6].element!=="" && cells[7].element!=="" && cells[8].element!==""
    ){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        x++;
    }else {
        o++;
    }
}else 
if(cells[0].element===cells[3].element && cells[3].element===cells[6].element
    && cells[0].element!=="" && cells[3].element!=="" && cells[6].element!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        x++;
    }else {
        o++;
    }
}else 
if(cells[1].element===cells[4].element && cells[4].element===cells[7].element
    && cells[1].element!=="" && cells[4].element!=="" && cells[7].element!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        x++;
    }else {
        o++;
    }
}else 
if(cells[2].element===cells[5].element && cells[5].element===cells[8].element
    && cells[2].element!=="" && cells[5].element!=="" && cells[8].element!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        x++;
    }else {
        o++;
    }
}else if(cells[0].element===cells[4].element && cells[4].element===cells[8].element
    && cells[0].element!=="" && cells[4].element!=="" && cells[8].element!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;
    if(turn==="x"){
        x++;
    }else {
        o++;
    }
}else if(cells[6].element===cells[4].element && cells[4].element===cells[2].element
    && cells[6].element!=="" && cells[4].element!=="" && cells[2].element!==""){
    const message = document.getElementById("message");
    message.innerHTML=`<h1>${turn+" won"}</h1>`;winner=1;    if(turn==="x"){
        x++;
    }else {
        o++;
    }
}

}

