const tagsEl = document.querySelector('#tags');
const textArea = document.querySelector('#textarea');


textArea.focus();

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter') {

        e.target.value = ''



        randomSelect()


        console.log('you just hit enter')
    }
})


function createTags(input) {
    // my way of doing it
    // const tagsArray = input.replaceAll(' ', '').trim().split(',');

    // cooler way of doing it with .filter() and .map()
    const tagsArray = input.split(',').filter(input => input.trim() != '').map(tag => tag.trim());
    
    tagsEl.innerHTML = '';

    tagsArray.forEach(input => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML = input;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            unlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unlightTag(tag) {
    tag.classList.remove('highlight')
}
