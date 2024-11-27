// JavaScript for sidebar menu interactions and dynamic content loading
document.addEventListener('DOMContentLoaded', function() {
    // Select all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar .menu li a');
    const contentSection = document.getElementById('contentSection');

    // Function to update active link
    function updateActiveLink(target) {
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
        });
        target.classList.add('active');
    }

    // Event listener for sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            updateActiveLink(event.target);
            loadContent(event.target.id);
        });
    });

    // Function to dynamically load content based on the clicked link
    function loadContent(sectionId) {
        let contentHTML = '';

        switch (sectionId) {
            case 'overview':
                contentHTML = `
                    <div class="cards">
                        <div class="card yellow">
                            <h3>8</h3>
                            <p>My Jobs</p>
                        </div>
                        <div class="card red">
                            <h3>1</h3>
                            <p>Total Applications</p>
                        </div>
                        <div class="card green">
                            <h3>43</h3>
                            <p>Total Messages</p>
                        </div>
                        <div class="card purple">
                            <h3>0</h3>
                            <p>Shortlisted</p>
                        </div>
                    </div>
                    <div class="chart">
                        <h3>Performance Chart</h3>
                        <div class="chart-placeholder">Chart Placeholder</div>
                    </div>
                `;
                break;
            case 'postJob':
                contentHTML = `<h2>Post a new job</h2>`;
                break;
            case 'postedJobs':
                contentHTML = `<h2>View posted jobs</h2>`;
                break;
            case 'shortlisted':
                contentHTML = `<h2>View shortlisted candidates</h2>`;
                break;
            case 'interview':
                contentHTML = `<h2>Manage interviews</h2>`;
                break;
            case 'recruiterProfile':
                contentHTML = `<h2>Edit recruiter profile</h2>`;
                break;
            case 'myPayments':
                contentHTML = `<h2>My payment details</h2>`;
                break;
            case 'aiAssistant':
                contentHTML = `<h2>AI Assistant</h2>`;
                break;
            case 'home':
                contentHTML = `<h2>Home Dashboard</h2>`;
                break;
            default:
                contentHTML = `<h2>Welcome to the dashboard!</h2>`;
        }

        contentSection.innerHTML = contentHTML;
    }

    // Initialize with Overview as default section
    loadContent('overview');

    // Sign Out action
    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('You have signed out.');
    });
});


case 'aiAssistant';
    contentHTML = `
        <div class="ai-assistant">
            <h2><span class="icon">🤖</span> AI Assistant</h2>
            <div class="chatbox">
                <div id="chatDisplay" class="chat-display"></div>
                <div class="chat-input">
                    <input type="text" id="userInput" placeholder="Ask me anything..." />
                    <button id="sendBtn">Generate <span>➤</span></button>
                </div>
            </div>
        </div>
    `;
    break;
