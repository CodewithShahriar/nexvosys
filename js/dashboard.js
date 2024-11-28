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
            case 'marketing':
                document.querySelector('#marketing').classList.remove('hidden');
                break;
            case 'invoice-payment':
                document.querySelector('#invoice-payment').classList.remove('hidden');
                break;
            case 'team':
                document.querySelector('#team').classList.remove('hidden');
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



// marketing
document.addEventListener('DOMContentLoaded', function () {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [1200, 1500, 1800, 2000, 2200, 3000, 3500, 4000, 4500, 5000],
                    backgroundColor: '#03a9f4',
                },
            ],
        },
        options: { responsive: true },
    });

    // Conversion Chart
    const conversionCtx = document.getElementById('conversionChart').getContext('2d');
    new Chart(conversionCtx, {
        type: 'line',
        data: {
            labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [
                {
                    label: 'Sessions',
                    data: [20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000],
                    borderColor: '#2196f3',
                    fill: false,
                },
                {
                    label: 'Conversions',
                    data: [17000, 20000, 25000, 38000, 42000, 44000, 42000, 44000, 55000, 58000, 69000, 75000],
                    borderColor: '#f44336',
                    fill: false,
                },
            ],
        },
        options: { responsive: true },
    });

    // CPC Gauge
    const cpcGauge = document.getElementById('cpcGauge');
    cpcGauge.innerHTML = `<svg viewBox="0 0 36 36" class="circular-chart green">
      <path class="circle" stroke-dasharray="75, 100" d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831" />
    </svg>`;
});
