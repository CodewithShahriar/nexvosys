document.addEventListener('DOMContentLoaded', function () {
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    const contentArea = document.getElementById('content-area');

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
                contentHTML = `<h2>Overview</h2><p>Overview content goes here.</p>`;
                break;
            case 'aiAssistant':
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

                setTimeout(() => {
                    const chatDisplay = document.getElementById('chatDisplay');
                    const userInput = document.getElementById('userInput');
                    const sendBtn = document.getElementById('sendBtn');

                    sendBtn.addEventListener('click', () => {
                        const message = userInput.value.trim();
                        if (message) {
                            appendMessage(chatDisplay, 'user', message);
                            userInput.value = '';
                            getAIResponse(chatDisplay, message);
                        }
                    });

                    userInput.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') sendBtn.click();
                    });
                }, 100);
                break;
            default:
                contentHTML = `<h2>${section}</h2><p>${section} content goes here.</p>`;
        }

        contentArea.innerHTML = contentHTML;
    }

    function appendMessage(container, sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(`${sender}-message`);
        messageDiv.textContent = message;
        container.appendChild(messageDiv);
        container.scrollTop = container.scrollHeight;
    }

    async function getAIResponse(container, userMessage) {
        appendMessage(container, 'ai', 'Thinking...');
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer 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` // Replace YOUR_API_KEY with your actual API key
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "user", content: userMessage }
                    ]
                })
                
            });

            const data = await response.json();
            const aiReply = data.choices[0].message.content;

            // Add AI response to chat
            appendMessage(container, 'ai', aiReply);

        } catch (error) {
            appendMessage(container, 'ai', 'Sorry, there was an error connecting to the AI.');
            console.error('Error:', error);
        }
    }
});
