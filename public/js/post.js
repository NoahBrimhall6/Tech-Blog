const submit = $('#commentBtn');

submit.click(async (event) => {
  event.preventDefault();
  const url = window.location.href;
  const post_id = url.split('/').pop();
  const comment = $('#comment').val().trim();

  if (comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment, post_id }),
      headers: { 'Content-Type': 'application/json' }
    });
  
    console.log(response)
  
    if (response.ok) {
      location.replace(`/post/${post_id}`);
    } else {
      console.error('Failed to add comment');
    }
  }
});