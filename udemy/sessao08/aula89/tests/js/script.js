const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElements = document.querySelector('#loading')
const postsContainer = document.querySelector('#posts-container')

async function getAllPosts() {

    const response  = await fetch(url);
    const data = await response.json();

    console.log(data)

    loadingElements.classList.add('hide');

    data.map( post => {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const body = document.createElement('body');
        const link = document.createElement('a')

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = 'Ler'
        link.setAttribute('href', `post.html?id=${post.id}`)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div)
    })
}

getAllPosts()