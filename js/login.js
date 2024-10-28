// Function to handle signup
document.querySelector('.auth-button-submit').addEventListener('click', function() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Store user data
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Show logout button
    showLogoutButton();
    
    // Close the modal
    closeSignupModal();
});

// Function to show the logout button
function showLogoutButton() {
    const signupButton = document.querySelector('.auth-button-signup');
    const loginButton = document.querySelector('.auth-button-login');

    if (signupButton && loginButton) {
        signupButton.style.display = 'none';
        loginButton.style.display = 'none';

        // Create logout button
        const logoutButton = document.createElement('li');
        logoutButton.className = 'rd-nav-item';
        logoutButton.innerHTML = `<a class="rd-nav-link" href="#" onclick="logout()">Log Out</a>`;

        // Append logout button to the existing navbar
        document.querySelector('.rd-navbar-nav').appendChild(logoutButton);
    }
}

// Function to handle logout
function logout() {
    // Clear user data
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    
    // Show signup and login buttons again
    const signupButton = document.querySelector('.auth-button-signup');
    const loginButton = document.querySelector('.auth-button-login');

    if (signupButton && loginButton) {
        signupButton.style.display = 'block'; // Show Sign Up button
        loginButton.style.display = 'block';   // Show Log In button
    }

    // Remove the logout button
    const logoutButton = document.querySelector('.rd-nav-item a[onclick="logout()"]');
    if (logoutButton) {
        logoutButton.parentElement.remove(); // Remove the logout button
    }
}
