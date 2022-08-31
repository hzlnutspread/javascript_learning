async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json();
    console.log(data)
    console.log("----------------------------------------")

    console.log(data[0].name)
    console.log("----------------------------------------")

    data.forEach((data) => {
        console.log(data.name)
    });

    console.log("----------------------------------------")


    for (i = 0; i < Object.keys(data).length; i++) {
        console.log(Object.values(data)[i]['name']);
    }
};

fetchUsers();