const blogFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blogTitle').Value.trim();
    console.log(title)
    const description = document.querySelector('#blogBody').value.trim();
    console.log(description)

    if (title && description ) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({title, description }),
            headers: {
                'Content-Type': 'application/json',
             },
        });

        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert('Failed to create a blog')
        }
    }


}

document.querySelector('#btnBlog').addEventListener('submit', function(){
    res.render('/newBlog')
})

document.querySelector('.new-blog').addEventListener('submit', blogFormHandler)