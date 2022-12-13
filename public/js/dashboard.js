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
    $('.alert').text('Failed to login').css('display', 'flex');  
    return;
  }
});