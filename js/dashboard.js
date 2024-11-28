document.addEventListener('DOMContentLoaded', function () {
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    const contentArea = document.getElementById('content-area');

    // Sidebar section management
    sidebarItems.forEach((item) => {
        item.addEventListener('click', function () {
            sidebarItems.forEach((el) => el.classList.remove('active'));
            this.classList.add('active');

            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });

    function showSection(section) {
        const sections = document.querySelectorAll('.main-content section');
        sections.forEach((sec) => sec.classList.add('hidden'));

        switch (section) {
            case 'overview':
                document.querySelector('.overview-section').classList.remove('hidden');
                break;
            case 'projects':
                document.querySelector('#projects').classList.remove('hidden');
                break;
            case 'clientmanagement':
                document.querySelector('#clientmanagement').classList.remove('hidden');
                break;
            case 'aiAssistant':
                document.querySelector('#ai-assistant').classList.remove('hidden');
                break;
            default:
                console.warn('Invalid section:', section);
        }
    }

    // Overview Charts
    const ctx1 = document.getElementById('visitSalesChart').getContext('2d');
    const ctx2 = document.getElementById('trafficSourcesChart').getContext('2d');

    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [
                {
                    label: 'Revenue Growth',
                    data: [10, 15, 20, 25, 30, 35, 40, 45],
                    backgroundColor: '#07268d',
                },
                {
                    label: 'User Engagement',
                    data: [5, 10, 15, 20, 25, 30, 35, 40],
                    backgroundColor: '#03a9f4',
                },
            ],
        },
        options: { responsive: true },
    });

    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Search Engines', 'Direct Click', 'Referral Traffic'],
            datasets: [
                {
                    data: [50, 30, 20],
                    backgroundColor: ['#07268d', '#03a9f4', '#fbc02d'],
                },
            ],
        },
        options: { responsive: true },
    });

    // AI Assistant functionality
    const chatDisplay = document.getElementById('chatDisplay');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    sendBtn.addEventListener('click', function () {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;

        const userChat = document.createElement('div');
        userChat.textContent = `You: ${userMessage}`;
        chatDisplay.appendChild(userChat);

        const aiChat = document.createElement('div');
        aiChat.textContent = `AI: Here's a response for "${userMessage}".`; // Replace with AI logic.
        chatDisplay.appendChild(aiChat);

        userInput.value = '';
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    });
});




