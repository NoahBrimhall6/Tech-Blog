// Create Post
$('#postBtn').click(async (event) => {
  event.preventDefault();

  const title = $('#postTitle').val().trim();
  if (!title) {
    $('.alert').text('Please enter a title').css('display', 'flex');
    return;
  }

  const body = $('#postBody').val().trim();
  if (!body) {
    $('.alert').text('Please enter body text').css('display', 'flex');
    return;
  }

  const response = await fetch('api/posts', {
    method: 'POST',
    body: JSON.stringify({ title, body }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    location.replace('/dashboard');
  } else {
    $('.alert').text('Failed to create post').css('display', 'flex');  
  }
});

// Delete Post
$('.deleteBtn').click(async (event) => {
  event.preventDefault();
  const postId = $(event.target).parent().parent().attr('id');
  console.log(postId);

  const response = await fetch(`api/posts/${postId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    location.replace('/dashboard');
  } else {
    $('.alert').text('Failed to delete post').css('display', 'flex');  
  }
});

// Update post
$('.updateBtn').click(async (event) => {
  event.preventDefault();
  const postId = $(event.target).parent().parent().attr('id');
  const newTitle = $(`#title-${postId}`).text();
  const newBody = $(`#body-${postId}`).text();

  const response = await fetch(`api/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({ title: newTitle, body: newBody }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    location.replace('/dashboard');
    console.log(response);
  } else {
    $('.alert').text('Failed to update post').css('display', 'flex');  
  }
});

// Click on post to see comments
$('.commentBtn').click(function (event) {
  event.preventDefault();
  const postId = $(event.target).parent().parent().attr('id');
  document.location.replace(`/post/${postId}`);
});