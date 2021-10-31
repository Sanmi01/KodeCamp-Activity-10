

function getPost() {
    let postId = localStorage.getItem('postNumber')
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postBody = document.getElementById('post-body')
        let html =""
        let unExist = ""

        html += `
        <div>
            <div class="card">
                <div class="card-body">
                    <div class=" d-flex justify-content-end">
                        <h6 class="text-danger">${data.id}</h6>
                    </div>
                    <h5 class="post-title mb-4">${data.title}</h5>
                    <p class="post-body">${data.body}</p>
                </div>
            </div>
        </div>
        `

        unExist += `
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 class="post-title mb-4">This post does not exist in {JSON} Placeholder database and is most likely your own created post</h5>
                    <p class="post-body">Thank You and God Bless.</p>
                </div>
            </div>
        </div>
        `
         if(Object.keys(data).length !== 0) {
            postBody.innerHTML = html
         } else {
            postBody.innerHTML = unExist
         }
        
    })
}

getPost()



