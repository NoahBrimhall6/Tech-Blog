const home = $('#navHome');
const dashboard = $('#navDashboard');
const login = $('#navLogin');

home.click(() => {
  document.location.replace('/');
});

dashboard.click(() => {
  document.location.replace('/dashboard');
});

login.click(() => {
  document.location.replace('/login');
});