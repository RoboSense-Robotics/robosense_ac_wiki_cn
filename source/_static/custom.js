document.addEventListener('DOMContentLoaded', function() {
    // 创建 lightbox 元素
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    // 获取所有文档中的图片
    const images = document.querySelectorAll('.document img');
    let scale = 1;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', e => {
            lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            lightbox.classList.add('show');
            scale = 1;
            translateX = 0;
            translateY = 0;
            updateTransform();
            const lightboxImg = getLightboxImage();
            if (lightboxImg) {
                lightboxImg.style.cursor = 'grab';
                // 阻止图片的默认拖动行为
                lightboxImg.addEventListener('dragstart', e => e.preventDefault());
            }
        });
    });

    // 点击 lightbox 背景关闭
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
        }
    });

    // 获取 lightbox 中的图片
    function getLightboxImage() {
        return lightbox.querySelector('img');
    }

    // 更新图片变换
    function updateTransform() {
        const img = getLightboxImage();
        if (img) {
            img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        }
    }

    // 处理鼠标滚轮缩放
    lightbox.addEventListener('wheel', e => {
        e.preventDefault();
        const delta = e.deltaY * -0.01;
        scale = Math.min(Math.max(0.1, scale + delta), 10);
        updateTransform();
    });

    // 处理拖拽
    lightbox.addEventListener('mousedown', e => {
        const img = getLightboxImage();
        if (img && e.target === img) {
            e.preventDefault();
            e.stopPropagation();
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            img.style.cursor = 'grabbing';
        }
    });

    lightbox.addEventListener('mousemove', e => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateTransform();
        }
    });

    // 将mouseup事件监听器添加到document上
    document.addEventListener('mouseup', e => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
            const img = getLightboxImage();
            if (img) {
                img.style.cursor = 'grab';
            }
            isDragging = false;
        }
    });

    // 确保鼠标离开 lightbox 时重置鼠标样式
    lightbox.addEventListener('mouseleave', e => {
        const img = getLightboxImage();
        if (img) {
            img.style.cursor = 'grab';
        }
    });

    // Dify 聊天机器人功能
    // 配置参数
    const difyConfig = {
        apiUrl: 'https://10.40.55.89/v1/chat-messages',
        apiKey: 'app-wzKGRIEWbGcUVmDIfz4WNCqT',
        chatTitle: 'RoboSense wiki 智能助手',
        placeholder: '请输入您的问题...',
        sendButtonText: '发送',
        resetButtonText: '重置对话'
    };

    // 创建聊天气泡
    const chatBubble = document.createElement('div');
    chatBubble.className = 'dify-chat-bubble';
    document.body.appendChild(chatBubble);

    // 创建聊天容器
    const chatContainer = document.createElement('div');
    chatContainer.className = 'dify-chat-container';
    chatContainer.innerHTML = `
        <div class="dify-chat-header">
            <div class="dify-chat-title">${difyConfig.chatTitle}</div>
            <button class="dify-chat-reset" title="${difyConfig.resetButtonText}"></button>
        </div>
        <div class="dify-chat-messages"></div>
        <div class="dify-chat-input-container">
            <input type="text" class="dify-chat-input" placeholder="${difyConfig.placeholder}">
            <button class="dify-chat-send" title="${difyConfig.sendButtonText}"></button>
        </div>
        <div class="dify-chat-disclaimer">所有内容均由AI生成，仅供参考</div>
    `;
    document.body.appendChild(chatContainer);

    // 获取DOM元素
    const messagesContainer = chatContainer.querySelector('.dify-chat-messages');
    const chatInput = chatContainer.querySelector('.dify-chat-input');
    const sendButton = chatContainer.querySelector('.dify-chat-send');
    const resetButton = chatContainer.querySelector('.dify-chat-reset');

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
        messageDiv.className = `dify-message ${isUser ? 'user' : ''}`;
        messageDiv.innerHTML = `
                <div class="dify-message-avatar ${isUser ? 'user' : 'bot'}"></div>
                <div class="dify-message-content">${content}</div>
            `;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return messageDiv;
    }

    // 显示正在输入指示器
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'dify-message';
        typingDiv.innerHTML = `
            <div class="dify-message-avatar bot"></div>
            <div class="dify-typing">
                <div class="dify-typing-dot"></div>
                <div class="dify-typing-dot"></div>
                <div class="dify-typing-dot"></div>
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

    // 发送消息到Dify
    async function sendToDify(userMessage) {
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
            const response = await fetch(difyConfig.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${difyConfig.apiKey}`
                },
                body: JSON.stringify({
                    query: userMessage,
                    inputs: {},
                    conversation_id: '',
                    user: 'wiki_user001',
                    response_mode: 'streaming'
                })
            });

            if (!response.ok) {
                throw new Error('API请求失败');
            }

            // 移除typing指示器
            messagesContainer.removeChild(typingIndicator);

            // 创建一个新的机器人消息容器
            const botMessageDiv = addMessage('', false);
            const botMessageContent = botMessageDiv.querySelector('.dify-message-content');

            // 处理流式响应
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let botResponse = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                // 解码并处理返回的数据
                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.startsWith('data:')) {
                        try {
                            const data = JSON.parse(line.substring(5));
                            if (data.event === 'message' && data.answer) {
                                botResponse += data.answer;
                                const formattedResponse = formatMathText(botResponse);
                                // 使用 marked 库将 Markdown 转换为 HTML
                                botMessageContent.innerHTML = marked.parse ? marked.parse(formattedResponse) : marked(formattedResponse);
                                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                            }
                        } catch (e) {
                            console.error('解析响应失败:', e);
                        }
                    }
                }
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
            sendToDify(message);
            chatInput.value = '';
        }
    }

    // 事件监听器
    chatBubble.addEventListener('click', toggleChat);

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
