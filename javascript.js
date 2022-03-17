let container = document.querySelector('.container');
let gridSize = 256;
let rowcol =16;


let button = document.querySelector('button');
button.addEventListener('click', ()=>{
    
    // prompt for rows and columns
    requestGridSize();
    clearGrid(); 
    // make grid based on the input value
    makeGrid(gridSize);
    styleGrid(rowcol);
})

let requestGridSize = ()=>{
    rowcol = prompt("Input number of rows and columns");
    console.log(typeof rowcol);
    while ((rowcol > 100 || rowcol < 0) && typeof rowcol != "string") {
        rowcol = prompt("Input number of rows and columns");
    }
    gridSize = rowcol*rowcol;
}


let makeGrid = (gridSize)=> {
    for (i=0;i<gridSize;i++){
        let div = document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseover',()=>{
            div.style.backgroundColor = 'red';
        })
    }
}
makeGrid(gridSize);

let clearGrid = ()=> {
    while(container.lastChild){
        container.removeChild(container.lastChild);
    }

}

let styleGrid = (rowcol)=>{
    container.style.setProperty('--grid-rows', rowcol);
    container.style.setProperty('--grid-cols', rowcol);
}
styleGrid(rowcol);
