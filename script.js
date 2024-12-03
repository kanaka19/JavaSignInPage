document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const rememberMe = document.getElementById('rememberMe').ariaChecked;

  if (username) {
    if (rememberMe) {
        document.cookie = `username=${username}; path=/; max-age=31536000`; 
    } else {
        document.cookie = `username=${username}; path=/`;
    }

  document.getElementById('loginForm').style.display = 'none';
  const welcomeMessage = document.getElementById('welcomeMessage');
  welcomeMessage.style.display = 'block';
  welcomeMessage.innerHTML = `<h2>Welcome, ${username}!</h2><button onclick="logout()">Logout</button>`;
}
});
function logout() {
  document.cookie = "username=; path=/; max-age=0;"
  location.reload();
}

function checkLoginStatus() {
  const cookies = document.cookie.split('; ');
  const userCookie = cookies.find(row => row.startsWith('username='));
  if (userCookie) {
      const username = userCookie.split('=')[1];
      document.getElementById('loginForm').style.display = 'none';
      const welcomeMessage = document.getElementById('welcomeMessage');
      welcomeMessage.style.display = 'block';
      welcomeMessage.innerHTML = `<h2>Welcome back, ${username}!</h2><button onclick="logout()">Logout</button>`;
  }
}

checkLoginStatus();