document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');

    const button1 = document.querySelector("#button1");

    button1.addEventListener('click', () => {
        
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const content = data.message;
            img.src = content
        })

    })

})

