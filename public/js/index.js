const home = $('#navHome');
const dashboard = $('#navDashboard');
const login = $('#navLogin');
const logout = $("#navLogout");

home.click(() => {
  document.location.replace('/');
});

dashboard.click(() => {
  document.location.replace('/dashboard');
});

login.click(() => {
  document.location.replace('/login');
});

logout.click(async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
});