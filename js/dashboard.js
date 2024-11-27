document.addEventListener('DOMContentLoaded', function () {
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    const contentArea = document.getElementById('content-area');
    const ctx = document.getElementById('activityChart').getContext('2d');

    const data = {
        labels: ['Job Posted', 'Shortlisted', 'Interviews', 'Payments'],
        datasets: [{
            label: 'Overview Stats',
            data: [56, 43, 12, 25000],
            backgroundColor: [
                'rgba(26, 115, 232, 0.7)',
                'rgba(26, 115, 232, 0.7)',
                'rgba(26, 115, 232, 0.7)',
                'rgba(26, 115, 232, 0.7)'
            ],
            borderColor: [
                'rgba(26, 115, 232, 1)',
                'rgba(26, 115, 232, 1)',
                'rgba(26, 115, 232, 1)',
                'rgba(26, 115, 232, 1)'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            },
            onClick: (e) => {
                const element = chart.getElementAtEvent(e);
                if (element.length > 0) {
                    const datasetIndex = element[0]._datasetIndex;
                    const index = element[0]._index;
                    const value = chart.data.datasets[datasetIndex].data[index];
                    const label = chart.data.labels[index];

                    // Change the color of the clicked bar
                    chart.data.datasets[datasetIndex].backgroundColor = chart.data.datasets[datasetIndex].backgroundColor.map((color, i) => {
                        if (i === index) return 'rgba(33, 161, 241, 0.8)';
                        return 'rgba(26, 115, 232, 0.7)';
                    });
                    chart.update();
                    alert(`You clicked on ${label} bar. Value: ${value}`);
                }
            }
        }
    };

    const chart = new Chart(ctx, config);

    sidebarItems.forEach((item) => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all items
            sidebarItems.forEach((el) => el.classList.remove('active'));
            // Add 'active' class to clicked item
            this.classList.add('active');

            // Load appropriate content
            const section = this.getAttribute('data-section');
            loadContent(section);
        });
    });

    function loadContent(section) {
        let contentHTML = '';
        switch (section) {
            case 'overview':
                contentHTML = `
                    <h2>Dashboard Overview</h2>
                    <div class="overview-stats">
                        <div class="stat-card">
                            <h3>Total Jobs Posted</h3>
                            <p id="jobsPosted" class="stat-value">56</p>
                        </div>
                        <div class="stat-card">
                            <h3>Total Shortlisted Candidates</h3>
                            <p id="shortlistedCandidates" class="stat-value">43</p>
                        </div>
                        <div class="stat-card">
                            <h3>Total Interviews Scheduled</h3>
                            <p id="interviewsScheduled" class="stat-value">12</p>
                        </div>
                        <div class="stat-card">
                            <h3>Total Payments Processed</h3>
                            <p id="paymentsProcessed" class="stat-value">$25,000</p>
                        </div>
                    </div>
                    <div class="activity-graph">
                        <canvas id="activityChart"></canvas>
                    </div>
                `;
                break;
            default:
                contentHTML = `<h2>${section}</h2><p>${section} content goes here.</p>`;
        }

        contentArea.innerHTML = contentHTML;
    }
});
