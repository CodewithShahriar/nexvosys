function showSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

function showloginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeloginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

document.querySelector('.auth-button-submit').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const termsCheckbox = document.getElementById('termsCheckbox');

    // Check if all fields are filled and terms are accepted
    if (!name || !email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    if (!termsCheckbox.checked) {
        alert("Please agree to the terms and conditions.");
        return;
    }

    // Continue with form submission
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
    // localStorage.removeItem('userEmail');
    // localStorage.removeItem('userPassword');

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

// Function to handle login credentials autofill
document.getElementById('adminLogin').addEventListener('click', function() {
    document.getElementById('login-username').value = 'admin@nexvosys.com';
    document.getElementById('login-password').value = 'admin123';
});

document.getElementById('developerLogin').addEventListener('click', function() {
    document.getElementById('login-username').value = 'developer@nexvosys.com';
    document.getElementById('login-password').value = 'dev123';
});

document.getElementById('clientLogin').addEventListener('click', function() {
    document.getElementById('login-username').value = 'client@nexvosys.com';
    document.getElementById('login-password').value = 'client123';
});

// Function to handle login submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check credentials only for Admin
    if (username === 'admin@nexvosys.com' && password === 'admin123') {
        // Successful login for Admin
        window.location.href = 'dashboard.html'; // Redirect to dashboard
        return; // Stop further execution
    } 
    
    // For Developer and Client, do not redirect to dashboard
    if (username === 'developer@nexvosys.com' && password === 'dev123') {
        // If login is successful for Developer, show a message
        alert('The Developer dashboard is not ready yet. Please try again later.');
        return;
    }

    if (username === 'client@nexvosys.com' && password === 'client123') {
        // If login is successful for Client, show a message
        alert('The Client dashboard is not ready yet. Please try again later.');
        return;
    }

    // Check for general login credentials stored in localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (username === storedEmail && password === storedPassword) {
        // Show logout button
        showLogoutButton();

        // Close the modal
        closeloginModal('loginModal');

        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        // If login fails, show the alert
        alert('Log in failed. Invalid email or password.');
    }
});

function forgotPassword() {
    alert("Password reset instructions will be sent to your email.");
}
