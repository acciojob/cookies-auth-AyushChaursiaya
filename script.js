//your JS code here. If required.
window.onload = function() {
      const cookie = document.cookie.split('; ').find(row => row.startsWith('username='));
      if (cookie) {
        const username = cookie.split('=')[1];
        alert('You are logged in as ' + username);
        document.getElementById('login-form').style.display = 'none'; // Hide login form
      }
    };

    // Handle login form submission
    document.getElementById('login-form').onsubmit = function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Simulate user authentication (replace this with actual backend authentication logic)
      if (username === 'user' && password === 'password') {
        // Set a cookie to store the username
        document.cookie = `username=${username}; path=/; max-age=3600`; // cookie lasts 1 hour
        alert('Logged in successfully!');
        window.location.reload(); // Reload to apply the login
      } else {
        alert('Invalid credentials');
      }
    };