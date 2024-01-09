async function editFormHandler(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();
    

    console.log(title);
    console.log(content);

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id,
          title: title.value,
          content: content.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }

}

document.querySelector('#edit-form').addEventListener('click', editFormHandler);

