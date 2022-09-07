window.addEventListener('DOMContentLoaded', (e) => {
    const result = document.querySelector('#result');
    const filter = document.querySelector('#filter');
    const listItems = [];

    const numResults = 50;
    const url = `https://randomuser.me/api?results=${numResults}`



    getData();

    // e.target.value will give us whatever is being inputted
    filter.addEventListener('input', (e) => filterData(e.target.value));

    async function getData() {
        const response = await fetch(url);
        const data = await response.json();
        // The result of console.log(data) returned objects
        const getResults = data.results;

        result.innerHTML = '';

        getResults.forEach(user => {
            const li = document.createElement('li')
            listItems.push(li);

            li.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
            `
            result.appendChild(li)
        });

        console.log('Successfully loaded')
    }

    function filterData(searchTerm) {
        listItems.forEach(item => {
            if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
    }


});