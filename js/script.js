let postTitle = document.getElementById('post-title');
let postBody = document.getElementById('post-body');
let postForm = document.getElementById('post-form');
let postArray = [];



postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createPost()
})


function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data) => {
      postArray = data
      renderPosts()
    })
}

function renderPosts() {
    console.log(postArray)
    let postLayout = document.getElementById('post-layout')
      let html = "";
      postArray.forEach((e, index) => {
        //   console.log(element)
        html += `
        <div class="selectPosts col-md-4 mb-3">
            <div class="card h-100">
                <div class="card-body">
                    <div class=" d-flex justify-content-end">
                        <h6 class="text-danger">${index + 1}</h6>
                    </div>
                    <h5 class="post-title mb-4">${e.title}</h5>
                    <p class="post-body">${e.body}</p>
                </div>
            </div>
        </div>
        `
      })
      postLayout.innerHTML = html
      selectPost()

}


function selectPost() {
    let selectPosts = document.querySelectorAll('.selectPosts')
    console.log(selectPosts)
    selectPosts.forEach((e, index) => {
        e.addEventListener('click', () => {
            console.log(index)
            localStorage.setItem('postNumber', index + 1)
            window.location.href = 'post.html';
        })
    })
    // for (let i = 0; i < selectPosts.length; i++ ) {
    //     selectPosts[i].addEventListener('click', () => {
    //         console.log(i)
    //     })
    // }
}

getPosts()


function createPost() {
    let pTitle = postTitle.value
    let pBody = postBody.value

    if(pTitle == "") {
        alert("Post Title cannot be empty")
    } else if (pBody == "") {
        alert("Post Body cannot be empty")
    } else {
        let createdPost = {
            title: pTitle,
            body: pBody,
            userId: 5
        }
    
        postArray.push(createdPost)
        postTitle.value= ""
        postBody.value = ""
        renderPosts()
        alert("Post Created")
    }
}