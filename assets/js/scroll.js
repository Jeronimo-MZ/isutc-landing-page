var scrollWidth = 0;
const delay = ms => new Promise(res => setTimeout(res, ms));
let numImages = document.querySelectorAll('#banner .container img').length;

async function scroll (direction) {
    let value;
    if (direction === 'left') {
        value = 5;
    } else if (direction === 'right') {
        value = -5;
    } else {
        return;
    }
    let imgContainer = document.querySelector('#banner .container');
    for (let i = 0; i < 20; i++) {
        await delay(5);
        scrollWidth += value;
        imgContainer.style.marginLeft = scrollWidth+'vw';
    }
}

const btnPrevious = document.getElementById('btn-previous');
const btnNext = document.getElementById('btn-next');
// progress bar
function slideShow() {
    btnNext.dispatchEvent(new Event('click'));
}


const progress = document.querySelector('.progress-bar .progress.run-animation');
const resetProgress = async() => {
    progress.classList.remove('run-animation');
    await delay(50);
    progress.classList.add('run-animation');
    clearInterval(myVar);
    myVar = setInterval(slideShow, 5800)
};





btnPrevious.addEventListener('click', () => {
    if ((scrollWidth+1) > 0) {
        for (let i = 1; i < numImages; i++) {
            scroll('right');
        }
    } else {
        
        scroll('left');
    }
    resetProgress()
});
btnNext.addEventListener('click', () => {
    if ((-scrollWidth/100) < numImages-1) {
        scroll('right')
    } else {
        for (let i = 1; i < numImages; i++) {
            scroll('left');
        }
    }
    resetProgress()
});



var myVar = setInterval(slideShow(), 5800);
