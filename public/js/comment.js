const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentBody = document.querySelector('#comments').value.trim();
    const blog_id = event.target.getAttribute('data-id');
    if (commentBody && blog_id) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({commentBody, blog_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok){
            console.log(response)
            document.location.reload()
        }
    }
}
document.querySelector('.new-comment').addEventListener('submit', commentFormHandler);
