let images = document.querySelectorAll('.pic');
i = 0
function slide() {
    if (i === images.length) {
        images[i-1].classList.remove('visible');
        i = 0
    }
    images[i].classList.add('visible');
    setTimeout(slide, 3000)

    if (i >= 1) {
        images[i-1].classList.remove('visible');
    }
    i++
}


let links = document.querySelector('.user-action .links');

function userClick() {
    links.classList.toggle('hidden');
}

