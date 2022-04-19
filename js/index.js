const mainContainer = document.querySelector('#mainContainer');
// const blocks = document.createElement('div');
// blocks.classList.add('blocks');
// blocks.textContent = "BLOCK";

// mainContainer.appendChild(blocks);

const blockContainer = document.createElement('blockContainer');
blockContainer.classList.add('blockContainer');
mainContainer.appendChild(blockContainer);

for (let i = 0; i < 256; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('blocks');
    blocks.textContent = "";

    blockContainer.appendChild(blocks);
}