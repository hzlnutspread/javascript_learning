const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;
let int = setInterval(blurring, 30)

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function blurring() {
    load ++

    if(load > 99) {
        clearInterval(int);
    }

    // loadText.innerHTML = `${load}%`
    // loadText.style.opacity = (100 - `${load}`)/100
    // bg.style.filter = `blur(${30 - load/3.3}px)`

    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}