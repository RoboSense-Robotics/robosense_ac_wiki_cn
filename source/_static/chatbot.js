// 聊天机器人模块
document.addEventListener('DOMContentLoaded', function() {
    // 配置参数
    const chatConfig = {
        apiUrl: 'https://susu-ai.xyz/chat',
        chatTitle: 'RoboSense wiki 智能助手',
        placeholder: '请输入您的问题...',
        sendButtonText: '发送',
        resetButtonText: '重置对话'
    };

    // 创建聊天气泡
    const chatBubble = document.createElement('div');
    chatBubble.className = 'chat-bubble';
    document.body.appendChild(chatBubble);

    // 创建聊天容器
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';
    chatContainer.innerHTML = `
        <div class="chat-header">
            <div class="chat-title">${chatConfig.chatTitle}</div>
            <button class="chat-reset" title="${chatConfig.resetButtonText}"></button>
        </div>
        <div class="chat-messages"></div>
        <div class="chat-input-container">
            <input type="text" class="chat-input" placeholder="${chatConfig.placeholder}">
            <button class="chat-send" title="${chatConfig.sendButtonText}"></button>
        </div>
        <div class="chat-disclaimer">所有内容均由AI生成，仅供参考</div>
    `;
    document.body.appendChild(chatContainer);

    // 获取DOM元素
    const messagesContainer = chatContainer.querySelector('.chat-messages');
    const chatInput = chatContainer.querySelector('.chat-input');
    const sendButton = chatContainer.querySelector('.chat-send');
    const resetButton = chatContainer.querySelector('.chat-reset');

    // 会话ID和对话历史
    let sessionId = generateSessionId();

    // 生成会话ID
    function generateSessionId() {
        return 'session_' + Math.random().toString(36).substring(2, 15);
    }

    // 重置对话
    function resetConversation() {
        messagesContainer.innerHTML = '';
        sessionId = generateSessionId();

        // 添加开场白
        if (messagesContainer.children.length === 0) {
            const welcomeMessage = `
                你好，我是速腾聚创的速速Susu，一个专业的AI文档助手。我可以帮你查找文档内容相关的信息。如果你有任何关于文档的问题，欢迎提问！<br>
                你可以这样问：<br>
                • <a href="#" class="suggested-question">什么是 Active Camera</a><br>
                • <a href="#" class="suggested-question">Active Camera 的规格参数有哪些</a><br>
                • <a href="#" class="suggested-question">介绍一下 Active Camera 的坐标系</a>
            `;
            const welcomeDiv = addMessage(welcomeMessage, false);

            // 添加点击事件监听器
            welcomeDiv.querySelectorAll('.suggested-question').forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    chatInput.value = this.textContent;
                    handleSend();
                });
            });
        }
        chatInput.focus();
    }

    // 页面加载时重置对话
    resetConversation();

    // 切换聊天窗口显示状态
    function toggleChat() {
        chatContainer.classList.toggle('show');
        if (chatContainer.classList.contains('show')) {
            // 添加开场白
            if (messagesContainer.children.length === 0) {
                const welcomeMessage = `
                    你好，我是速腾聚创的速速Susu，一个专业的AI文档助手。我可以帮你查找文档内容相关的信息。如果你有任何关于文档的问题，欢迎提问！<br>
                    你可以这样问：<br>
                    • <a href="#" class="suggested-question">什么是 Active Camera</a><br>
                    • <a href="#" class="suggested-question">Active Camera 的规格参数有哪些</a><br>
                    • <a href="#" class="suggested-question">介绍一下 Active Camera 的坐标系</a>
                `;
                const welcomeDiv = addMessage(welcomeMessage, false);

                // 添加点击事件监听器
                welcomeDiv.querySelectorAll('.suggested-question').forEach(link => {
                    link.addEventListener('click', function (e) {
                        e.preventDefault();
                        chatInput.value = this.textContent;
                        handleSend();
                    });
                });
            }
            chatInput.focus();
        }
    }

    // 添加消息到聊天窗口
    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : ''}`;
        messageDiv.innerHTML = `
                <div class="message-avatar ${isUser ? 'user' : 'bot'}"></div>
                <div class="message-content">${content}</div>
            `;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return messageDiv;
    }

    // 显示正在输入指示器
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message';
        typingDiv.innerHTML = `
            <div class="message-avatar bot"></div>
            <div class="typing">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return typingDiv;
    }

    function formatMathText(text) {
        // 移除所有美元符号 ($)
        let result = text.replace(/\$/g, '');
        // 将形如 "A_B" 的表达式替换为 "A<sub>B</sub>"
        return result.replace(/([A-Za-z0-9])_([A-Za-z0-9])/g, '$1<sub>$2</sub>');
    }

    // 发送消息到后端
    async function sendToBackend(userMessage) {
        // 禁用输入框和发送按钮
        chatInput.disabled = true;
        chatInput.classList.add('disabled');
        sendButton.disabled = true;

        // 添加用户消息到界面
        addMessage(userMessage, true);

        // 创建typing指示器
        const typingIndicator = showTypingIndicator();

        try {
            // 构建请求
            const response = await fetch(chatConfig.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: userMessage
                })
            });

            if (!response.ok) {
                throw new Error('API请求失败');
            }

            // 创建一个新的机器人消息容器
            const botMessageDiv = addMessage('', false);
            const botMessageContent = botMessageDiv.querySelector('.message-content');

            // 处理流式响应
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let botResponse = '';

            // 移除typing指示器
            messagesContainer.removeChild(typingIndicator);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                // 解码并处理返回的数据
                const chunk = decoder.decode(value);
                botResponse += chunk;
                const formattedResponse = formatMathText(botResponse);
                // 使用 marked 库将 Markdown 转换为 HTML
                botMessageContent.innerHTML = marked.parse ? marked.parse(formattedResponse) : marked(formattedResponse);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }

        } catch (error) {
            console.error('发送消息失败:', error);
            // 移除typing指示器
            if (messagesContainer.contains(typingIndicator)) {
                messagesContainer.removeChild(typingIndicator);
            }
            // 显示错误消息
            addMessage('抱歉，发生了错误，请稍后重试。', false);
        } finally {
            // 重新启用输入框和发送按钮
            chatInput.disabled = false;
            chatInput.classList.remove('disabled');
            sendButton.disabled = false;
            chatInput.focus();
        }
    }

    // 发送消息处理函数
    function handleSend() {
        const message = chatInput.value.trim();
        if (message) {
            sendToBackend(message);
            chatInput.value = '';
        }
    }

    // 事件监听器
    chatBubble.addEventListener('click', (e) => {
        e.stopPropagation();  // 阻止事件冒泡
        toggleChat();
    });

    resetButton.addEventListener('click', resetConversation);

    sendButton.addEventListener('click', handleSend);

    chatInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    // ESC键关闭聊天窗口
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && chatContainer.classList.contains('show')) {
            chatContainer.classList.remove('show');
        }
    });
}); 