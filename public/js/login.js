$('#loginSubmit').click(async event => {
  event.preventDefault();

  const loginEmail = $('#loginEmail').val().trim();
  if (!loginEmail) {
    $('.alert').text('Please enter an email address').css('display', 'flex');
    return;
  }

  const loginPassword = $('#loginPassword').val().trim();
  if (!loginPassword) {
    $('.alert').text('Please enter a password').css('display', 'flex');  
    return;
  }

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    location.replace('/');
  } else {
    $('.alert').text('Failed to login').css('display', 'flex');  
    return;
  }
});

$('#signUpSubmit').click(async event => {
  event.preventDefault();

  var username = $('#userName').val().trim();
  if (!username) {
    $('.alert').text('Please enter a username').css('display', 'flex');
    return;
  }

  var email = $('#userEmail').val().trim();
  if (!email) {
    $('.alert').text('Please enter an email address').css('display', 'flex');
    return;
  }
  
  var phone_number = $('#userPhone').val().trim();
  if (!phone_number) {
    $('.alert').text('Please enter a phone number').css('display', 'flex');
    return;
  }

  var password = $('#userPassword').val().trim();
  if (!password) {
    $('.alert').text('Please enter a password').css('display', 'flex');
    return;
  }

  var userVerify = $('#userVerify').val().trim();
  if (!userVerify) {
    $('.alert').text('Please verify your password').css('display', 'flex');
    return;
  }

  if (password !== userVerify) {
    $('.alert').text('Your passwords do not match').css('display', 'flex');
    return;
  }

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ username, email, phone_number, password }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    location.replace('/');
  } else {
    $('.alert').text('Failed to sign up a new user').css('display', 'flex');  
    console.error(response);
    return;
  }
});