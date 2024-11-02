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


/// Function to handle login submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check credentials (you can modify this to match your signup logic)
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (username === storedEmail && password === storedPassword) {
        // Show logout button
        showLogoutButton();
        
        // Close the modal
        closeloginModal('loginModal');
    } else {
        alert('Log in failed. Invalid email or password.');
    }
});


function forgotPassword() {
    alert("Password reset instructions will be sent to your email.");
}


// document.querySelector('.auth-button-submit').addEventListener('click', function(event) {
//     event.preventDefault();

//     const termsCheckbox = document.getElementById('termsCheckbox');
//     if (!termsCheckbox.checked) {
//         alert("Please agree to the terms and conditions.");
//         return;
//     }

//     // Rest of your signup code here
// });
