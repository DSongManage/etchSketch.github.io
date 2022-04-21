const mainContainer = document.querySelector('#mainContainer');
const blockContainer = document.createElement('blockContainer');
blockContainer.classList.add('blockContainer');
mainContainer.appendChild(blockContainer);

const clearIt = document.querySelector('.clearIt');
const resetIt = document.querySelector('.resetIt');

buildGrid();

clearIt.addEventListener('click', () => {
    var chooseGrid = Number(prompt("Please Enter grid size (max 100):"));
    resetNewBoard();
    buildGrid(chooseGrid);
    console.log(typeof(chooseGrid));
});

resetIt.addEventListener('click', () => {
    resetNewBoard();
    buildGrid();
});


function resetNewBoard() {
    const elem = document.getElementsByClassName('blockRow');
    while(elem.length > 0){
        elem[0].parentNode.removeChild(elem[0]);
    }
    const elem2 = document.getElementsByClassName('blocks');
    while(elem2.length > 0){
        elem2[0].parentNode.removeChild(elem2[0]);
    }
}

function buildGrid(gridSize = 10) {

    for (let i = 0; i < gridSize; i++) {
        const blockRow = document.createElement('div');
        blockRow.classList.add('blockRow');
        blockContainer.appendChild(blockRow);
        console.log(blockRow);
    
        for (let j = 0; j < gridSize; j++) {
            const blocks = document.createElement('div');
            blocks.classList.add('blocks');
            // blocks.textContent = 'dude';
            blockRow.appendChild(blocks);
            // console.log(blocks);
        };
    };

    const blocks = document.querySelectorAll('.blocks');

    blocks.forEach(block => {
        
        block.addEventListener('mouseenter', () => {
            block.classList.add('blockColor');
            console.log(block);
        });
    });
    
};


