// ==================== DAKA KNOWLEDGE BASE ====================
/**
 * DAKA Knowledge Base - Rule-based responses
 * Add more Q&A here to increase DAKA hit rate and reduce AI costs
 */

const chatbotKnowledgeBase = {
    vi: {
        greetings: [
            "👋 Xin chào! Tôi là DAKA, trợ lý ảo của Huỳnh Phú Xuân.\n\nTôi có thể giúp bạn:\n• Hiểu về Kinh tế Hành vi\n• Tìm hiểu nội dung blog\n• Trả lời câu hỏi về website\n\nHãy thử các câu hỏi nhanh bên dưới! 😊",
            "Chào bạn! 👋 Tôi là DAKA, trợ lý AI của Xuân.\n\nBạn muốn biết gì về:\n🎯 Kinh tế Hành vi\n📝 Blog & Bài viết\n👤 Thông tin cá nhân\n\nHỏi tôi bất cứ điều gì nhé!",
            "Hello! 🧠 Tôi là DAKA.\n\nTôi có thể trả lời các câu hỏi về:\n✨ Behavioral Economics\n✨ Blog posts và insights\n✨ Website này\n\nBạn cần giúp gì?"
        ],
        
        intro: "🌟 **Về Website này:**\n\nĐây là portfolio cá nhân của **Huỳnh Phú Xuân** - một Behavioral Economist chuyên về Market Research và Social Analysis.\n\n📍 **Nội dung:**\n• Blog về Kinh tế Hành vi & Tâm lý học\n• Phân tích xã hội & Insights thị trường\n• Nghiên cứu về hành vi tiêu dùng\n\n🎯 **Mục đích:** Chia sẻ kiến thức và quan điểm về cách con người ra quyết định trong kinh tế và đời sống.",
        
        behavioral: "🧠 **Kinh tế Hành vi (Behavioral Economics) là gì?**\n\nLà lĩnh vực nghiên cứu cách con người **THỰC SỰ** ra quyết định kinh tế, không phải cách họ **NÊN** ra quyết định (như kinh tế học cổ điển cho rằng).\n\n💡 **Ví dụ thực tế:**\n• Tại sao bạn mua thứ không cần khi sale?\n• Vì sao giá $9.99 hấp dẫn hơn $10?\n• Tại sao người ta sợ mất hơn ham được?\n\n🎓 **Ứng dụng:**\nMarketing, Chính sách công, UX Design, Đầu tư tài chính...\n\n📚 Khám phá thêm trong phần Blog!",
        
        latestBlogs: "📝 **Blog mới nhất:**\n\nCác bài viết được cập nhật thường xuyên về:\n\n🎯 **Kinh tế học:**\nHiệu ứng Neo, Loss Aversion, Anchoring...\n\n🧠 **Tâm lý học:**\nFOMO, Confirmation Bias, Decision-making...\n\n🌍 **Xã hội:**\nVăn hóa tiêu dùng, Gen Z, Social trends...\n\n📊 **Khoa học & Công nghệ:**\nAI, Data analysis, Future trends...\n\n👉 Xem tất cả tại phần **Blogs** trên menu!",
        
        contact: "📬 **Liên hệ với Xuân:**\n\n📧 Email: [Xem phần Contact]\n💼 LinkedIn: [Xem phần Contact]\n🐦 Social: [Xem phần Contact]\n\n💡 Bạn cũng có thể để lại comment trên các bài blog!\n\n⏰ **Response time:** Thường trong 24-48 giờ.",
        
        cv: "📄 **Hồ sơ & Kinh nghiệm:**\n\nXuân có background về:\n• Behavioral Economics\n• Market Research\n• Consumer Psychology\n• Social Analysis\n\n🎓 **Chuyên môn:**\n• Phân tích hành vi tiêu dùng\n• Nghiên cứu thị trường\n• Data-driven insights\n• Strategic consulting\n\n👉 Xem chi tiết tại phần **Resume** trên menu!",
        
        notUnderstood: [
            "🤔 Xin lỗi, tôi chưa hiểu câu hỏi của bạn.\n\nBạn có thể:\n• Thử các câu hỏi nhanh bên dưới\n• Hỏi về Kinh tế Hành vi\n• Hỏi về nội dung Blog\n• Hỏi về thông tin liên hệ",
            "💭 Hmm, tôi chưa có câu trả lời cho điều này.\n\nThử hỏi tôi về:\n✨ Behavioral Economics\n✨ Blog & Articles\n✨ Contact info\n\nHoặc dùng các gợi ý bên dưới!",
            "🔍 Tôi đang học hỏi thêm mỗi ngày!\n\nHiện tại tôi có thể giúp bạn về:\n📚 Kinh tế Hành vi\n📝 Nội dung blog\n👤 Thông tin website\n\nHãy thử hỏi các chủ đề này nhé!"
        ],
        
        goodbye: [
            "👋 Tạm biệt! Hẹn gặp lại bạn sớm!\n\n💡 Đừng quên ghé thăm phần Blog để đọc những insights mới nhất nhé!",
            "🌟 Bye bye! Cảm ơn bạn đã ghé thăm!\n\nNếu có câu hỏi gì, quay lại chat với tôi bất cứ lúc nào! 😊",
            "👋 See you! Have a great day!\n\n📚 Explore more articles in the Blog section!"
        ]
    },
    
    en: {
        greetings: [
            "👋 Hi! I'm DAKA, Xuan's AI assistant.\n\nI can help you with:\n• Understanding Behavioral Economics\n• Exploring blog content\n• Navigating this website\n\nTry the quick questions below! 😊",
            "Hello! 👋 I'm DAKA, your virtual assistant.\n\nAsk me about:\n🎯 Behavioral Economics\n📝 Blog posts & insights\n👤 About Xuan\n\nHow can I help?",
            "Hey there! 🧠 I'm DAKA.\n\nI can answer questions about:\n✨ Behavioral Economics\n✨ Blog articles\n✨ This website\n\nWhat would you like to know?"
        ],
        
        intro: "🌟 **About This Website:**\n\nThis is the personal portfolio of **Huynh Phu Xuan** - a Behavioral Economist specializing in Market Research and Social Analysis.\n\n📍 **Content:**\n• Blog about Behavioral Economics & Psychology\n• Social analysis & Market insights\n• Consumer behavior research\n\n🎯 **Purpose:** Sharing knowledge and perspectives on how people make decisions in economics and life.",
        
        behavioral: "🧠 **What is Behavioral Economics?**\n\nIt studies how people **ACTUALLY** make economic decisions, not how they **SHOULD** make them (as classical economics assumes).\n\n💡 **Real-world examples:**\n• Why do you buy unnecessary things on sale?\n• Why is $9.99 more attractive than $10?\n• Why do people fear losses more than desire gains?\n\n🎓 **Applications:**\nMarketing, Public Policy, UX Design, Investment...\n\n📚 Explore more in the Blog section!",
        
        latestBlogs: "📝 **Latest Blogs:**\n\nRegularly updated articles about:\n\n🎯 **Economics:**\nAnchoring Effect, Loss Aversion, Pricing...\n\n🧠 **Psychology:**\nFOMO, Cognitive Biases, Decision-making...\n\n🌍 **Society:**\nConsumer culture, Gen Z, Social trends...\n\n📊 **Science & Tech:**\nAI, Data analysis, Future trends...\n\n👉 See all in the **Blogs** menu section!",
        
        contact: "📬 **Contact Xuan:**\n\n📧 Email: [See Contact section]\n💼 LinkedIn: [See Contact section]\n🐦 Social: [See Contact section]\n\n💡 You can also comment on blog posts!\n\n⏰ **Response time:** Usually within 24-48 hours.",
        
        cv: "📄 **Profile & Experience:**\n\nXuan's background includes:\n• Behavioral Economics\n• Market Research\n• Consumer Psychology\n• Social Analysis\n\n🎓 **Expertise:**\n• Consumer behavior analysis\n• Market research\n• Data-driven insights\n• Strategic consulting\n\n👉 See details in the **Resume** menu section!",
        
        notUnderstood: [
            "🤔 Sorry, I don't understand that question yet.\n\nYou can:\n• Try quick questions below\n• Ask about Behavioral Economics\n• Ask about Blog content\n• Ask about contact info",
            "💭 Hmm, I don't have an answer for that yet.\n\nTry asking about:\n✨ Behavioral Economics\n✨ Blog & Articles\n✨ Contact information\n\nOr use the suggestions below!",
            "🔍 I'm learning more every day!\n\nCurrently I can help with:\n📚 Behavioral Economics\n📝 Blog content\n👤 Website info\n\nTry asking about these topics!"
        ],
        
        goodbye: [
            "👋 Goodbye! See you soon!\n\n💡 Don't forget to check the Blog for latest insights!",
            "🌟 Bye! Thanks for visiting!\n\nCome back and chat anytime! 😊",
            "👋 See you! Have a great day!\n\n📚 Explore more in the Blog section!"
        ]
    }
};

// Keyword patterns for matching (case-insensitive)
const keywordResponses = {
    vi: {
        'xin chào|chào|hello|hi|hey': 'greetings',
        'giới thiệu|about|website|trang web': 'intro',
        'kinh tế hành vi|behavioral econ|be là gì|be|hành vi': 'behavioral',
        'blog|bài viết|article|post|mới nhất|latest': 'latestBlogs',
        'liên hệ|contact|email': 'contact',
        'cv|resume|hồ sơ|kinh nghiệm|experience': 'cv',
        'tạm biệt|bye|goodbye|see you': 'goodbye'
    },
    en: {
        'hello|hi|hey|greetings': 'greetings',
        'about|intro|website|what is this': 'intro',
        'behavioral econ|be|what is be': 'behavioral',
        'blog|article|post|latest|recent': 'latestBlogs',
        'contact|email|reach': 'contact',
        'cv|resume|profile|experience': 'cv',
        'bye|goodbye|see you|later': 'goodbye'
    }
};

// ==================== REST OF CHATBOT CODE ====================
// (The AIProvider class and DakaBot class code from previous file)

    }
    
    async isAvailable() {
        if (!this.enabled) return false;
        if (!this.apiKey) return false;
        
        // Check if we still have tokens
        const hasTokens = this.tokensUsed < this.tokenLimit;
        
        if (!hasTokens) {
            console.warn(`${this.name}: Token limit reached (${this.tokensUsed}/${this.tokenLimit})`);
        }
        
        return hasTokens;
    }
    
    async ask(question, context = []) {
        try {
            const messages = this.buildMessages(question, context);
            
            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    temperature: this.temperature,
                    max_tokens: this.maxTokens,
                    stream: false
                })
            });
            
            if (!response.ok) {
                const error = await response.text();
                throw new Error(`API Error ${response.status}: ${error}`);
            }
            
            const data = await response.json();
            const answer = data.choices[0].message.content;
            
            // Track usage
            const inputTokens = data.usage?.prompt_tokens || 0;
            const outputTokens = data.usage?.completion_tokens || 0;
            const totalTokens = inputTokens + outputTokens;
            
            this.tokensUsed += totalTokens;
            this.saveTokensUsed();
            
            // Calculate cost
            const cost = (inputTokens / 1_000_000 * 0.14) + (outputTokens / 1_000_000 * 0.28);
            this.trackSuccess(cost);
            
            console.log(`💰 ${this.name} cost: $${cost.toFixed(6)} | Total: $${this.stats.totalCost.toFixed(4)}`);
            
            return answer;
            
        } catch (error) {
            return this.handleError(error);
        }
    }
    
    buildMessages(question, context) {
        const systemPrompt = this.config.systemPrompt || this.getDefaultSystemPrompt();
        
        const messages = [
            { role: 'system', content: systemPrompt }
        ];
        
        // Add conversation context (last 3 exchanges max)
        const recentContext = context.slice(-6);
        messages.push(...recentContext);
        
        // Add current question
        messages.push({ role: 'user', content: question });
        
        return messages;
    }
    
    getDefaultSystemPrompt() {
        return `You are DAKA, an AI assistant for Huynh Phu Xuan's portfolio website.

ABOUT THE OWNER:
- Name: Huynh Phu Xuan (Huỳnh Phú Xuân)
- Role: Behavioral Economist
- Expertise: Behavioral Economics, Market Research, Consumer Psychology, Social Analysis

YOUR ROLE:
- Help visitors understand website content
- Answer questions about Behavioral Economics
- Provide insights on market research and consumer behavior
- Be professional yet approachable

RESPONSE GUIDELINES:
- Keep answers concise (2-4 paragraphs max)
- Use simple language, avoid jargon when possible
- Add 1-2 relevant emojis for warmth
- Reference portfolio content when relevant
- Suggest visiting relevant sections when appropriate

TONE: Professional, friendly, knowledgeable, helpful
LANGUAGE: Match user's language (Vietnamese or English)`;
    }
    
    loadTokensUsed() {
        const saved = localStorage.getItem('deepseek_tokens_used');
        return saved ? parseInt(saved) : 0;
    }
    
    saveTokensUsed() {
        localStorage.setItem('deepseek_tokens_used', this.tokensUsed.toString());
    }
    
    estimateCost(question, response) {
        // Rough estimate: ~1 token per 4 characters
        const inputTokens = question.length / 4;
        const outputTokens = response.length / 4;
        return (inputTokens / 1_000_000 * 0.14) + (outputTokens / 1_000_000 * 0.28);
    }
}

// ==================== EXAMPLE: CHATBASE PROVIDER (READY TO USE) ====================
/**
 * Chatbase AI Provider - Example implementation
 * Uncomment and add API key to enable
 */
class ChatbaseProvider extends AIProvider {
    constructor(apiKey, config = {}) {
        super('Chatbase', config);
        this.apiKey = apiKey;
        this.chatbotId = config.chatbotId;
        this.endpoint = `https://www.chatbase.co/api/v1/chat`;
    }
    
    async isAvailable() {
        return this.enabled && !!this.apiKey;
    }
    
    async ask(question, context = []) {
        try {
            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    messages: [{ content: question }],
                    chatbotId: this.chatbotId,
                    stream: false
                })
            });
            
            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            
            const data = await response.json();
            this.trackSuccess();
            
            return data.text;
            
        } catch (error) {
            return this.handleError(error);
        }
    }
}

// ==================== EXAMPLE: HUGGING FACE PROVIDER (READY TO USE) ====================
/**
 * Hugging Face Inference API Provider
 * Free tier: 30,000 requests/month
 */
class HuggingFaceProvider extends AIProvider {
    constructor(apiKey, config = {}) {
        super('HuggingFace', config);
        this.apiKey = apiKey;
        this.model = config.model || 'mistralai/Mixtral-8x7B-Instruct-v0.1';
        this.endpoint = `https://api-inference.huggingface.co/models/${this.model}`;
    }
    
    async isAvailable() {
        return this.enabled && !!this.apiKey;
    }
    
    async ask(question, context = []) {
        try {
            const prompt = this.buildPrompt(question, context);
            
            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        max_new_tokens: 500,
                        temperature: 0.7
                    }
                })
            });
            
            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            
            const data = await response.json();
            const answer = data[0]?.generated_text || data.error;
            
            this.trackSuccess();
            return answer;
            
        } catch (error) {
            return this.handleError(error);
        }
    }
    
    buildPrompt(question, context) {
        return `You are DAKA, a helpful AI assistant. Answer this question concisely:

Question: ${question}

Answer:`;
    }
}

// ==================== DAKA CHATBOT - MAIN CLASS ====================
/**
 * DAKA Chatbot with modular AI providers
 * Easy to add new providers - just extend AIProvider!
 */
class DakaBot {
    constructor() {
        this.currentLang = localStorage.getItem('preferred-language') || 'vi';
        this.isOpen = false;
        this.messageHistory = [];
        this.conversationContext = [];
        
        // AI Providers (priority order)
        this.aiProviders = [];
        
        // Stats
        this.stats = {
            totalQueries: 0,
            dakaHits: 0,
            aiHits: 0,
            aiHitsByProvider: {}
        };
        
        this.init();
    }
    
    init() {
        this.cacheDOMElements();
        this.attachEventListeners();
        this.displayGreeting();
        this.loadStats();
    }
    
    // ==================== AI PROVIDER MANAGEMENT ====================
    
    /**
     * Register an AI provider
     * @param {AIProvider} provider - AI provider instance
     * @param {number} priority - Lower number = higher priority (0 = highest)
     */
    registerProvider(provider, priority = 99) {
        this.aiProviders.push({ provider, priority });
        
        // Sort by priority (ascending)
        this.aiProviders.sort((a, b) => a.priority - b.priority);
        
        console.log(`✅ Registered ${provider.name} (Priority: ${priority})`);
        
        // Initialize stats tracking
        if (!this.stats.aiHitsByProvider[provider.name]) {
            this.stats.aiHitsByProvider[provider.name] = 0;
        }
    }
    
    /**
     * Remove an AI provider
     */
    removeProvider(providerName) {
        this.aiProviders = this.aiProviders.filter(
            p => p.provider.name !== providerName
        );
        console.log(`❌ Removed ${providerName}`);
    }
    
    /**
     * Enable/disable a provider
     */
    toggleProvider(providerName, enabled) {
        const item = this.aiProviders.find(p => p.provider.name === providerName);
        if (item) {
            item.provider.enabled = enabled;
            console.log(`${enabled ? '✅' : '⏸️'} ${providerName} ${enabled ? 'enabled' : 'disabled'}`);
        }
    }
    
    /**
     * Get list of all providers
     */
    getProviders() {
        return this.aiProviders.map(p => ({
            name: p.provider.name,
            priority: p.priority,
            enabled: p.provider.enabled,
            stats: p.provider.getStats()
        }));
    }
    
    // ==================== MESSAGE PROCESSING ====================
    
    async processMessage(message) {
        this.stats.totalQueries++;
        
        // STEP 1: Try DAKA (Rule-based Knowledge Base)
        const dakaResponse = this.checkDakaKB(message.toLowerCase());
        
        if (dakaResponse) {
            this.stats.dakaHits++;
            console.log('💚 DAKA hit (rule-based, free, instant)');
            
            return {
                text: dakaResponse,
                source: 'DAKA',
                fromAI: false,
                cost: 0
            };
        }
        
        // STEP 2: Try AI providers in priority order
        for (const { provider } of this.aiProviders) {
            const available = await provider.isAvailable();
            
            if (!available) {
                console.log(`⏭️ Skipping ${provider.name} (not available)`);
                continue;
            }
            
            console.log(`🤖 Trying ${provider.name}...`);
            
            const aiResponse = await provider.ask(
                message,
                this.getConversationContext()
            );
            
            if (aiResponse) {
                this.stats.aiHits++;
                this.stats.aiHitsByProvider[provider.name]++;
                
                console.log(`✅ ${provider.name} response received`);
                
                return {
                    text: aiResponse,
                    source: provider.name,
                    fromAI: true,
                    cost: provider.stats.totalCost
                };
            }
        }
        
        // STEP 3: All failed - graceful degradation
        console.log('⚠️ All AI providers failed, using fallback');
        
        return {
            text: this.getFallbackResponse(),
            source: 'DAKA',
            fromAI: false,
            cost: 0
        };
    }
    
    checkDakaKB(lowerMessage) {
        const kb = chatbotKnowledgeBase[this.currentLang];
        const keywords = keywordResponses[this.currentLang];
        
        // Check for blog search
        if (this.isBlogSearchQuery(lowerMessage)) {
            return this.searchBlogs(lowerMessage);
        }
        
        // Check keyword patterns
        for (const [pattern, responseKey] of Object.entries(keywords)) {
            const regex = new RegExp(pattern, 'i');
            if (regex.test(lowerMessage)) {
                if (responseKey === 'goodbye') {
                    const goodbyes = kb.goodbye;
                    return goodbyes[Math.floor(Math.random() * goodbyes.length)];
                }
                return kb[responseKey];
            }
        }
        
        // Check conversation context
        if (this.hasRecentContext('blog')) {
            return kb.latestBlogs;
        }
        
        return null; // Not found in DAKA KB
    }
    
    getFallbackResponse() {
        const responses = chatbotKnowledgeBase[this.currentLang].notUnderstood;
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    getConversationContext() {
        // Get last 3 exchanges (6 messages) for context
        return this.messageHistory
            .slice(-6)
            .map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'assistant',
                content: msg.text.replace(/<br>/g, '\n')
            }));
    }
    
    // ==================== UI METHODS (Same as before) ====================
    
    cacheDOMElements() {
        this.button = document.getElementById('chatbot-button');
        this.window = document.getElementById('chatbot-window');
        this.closeBtn = document.getElementById('chatbot-close');
        this.messagesContainer = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.sendBtn = document.getElementById('chatbot-send');
        this.quickBtns = document.querySelectorAll('.quick-question-btn');
    }
    
    attachEventListeners() {
        this.button.addEventListener('click', () => this.toggleWindow());
        this.closeBtn.addEventListener('click', () => this.toggleWindow());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        this.quickBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const question = e.target.getAttribute('data-question');
                this.handleQuickQuestion(question);
            });
        });
    }
    
    toggleWindow() {
        this.isOpen = !this.isOpen;
        this.window.classList.toggle('hidden');
        if (this.isOpen) {
            this.input.focus();
        }
    }
    
    displayGreeting() {
        const greetings = chatbotKnowledgeBase[this.currentLang].greetings;
        const greeting = greetings[Math.floor(Math.random() * greetings.length)];
        this.addMessage(greeting, 'bot', { source: 'DAKA' });
    }
    
    addMessage(text, sender, metadata = {}) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        const time = new Date().toLocaleTimeString(this.currentLang === 'vi' ? 'vi-VN' : 'en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const formattedText = text.replace(/\n/g, '<br>');
        
        // Add source badge
        let badge = '';
        if (metadata.source && metadata.source !== 'DAKA') {
            const color = metadata.source === 'DeepSeek' ? '#667eea' : '#27ae60';
            badge = `<span class="source-badge" style="background: ${color}">🤖 ${metadata.source}</span>`;
        }
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="message-avatar">🧠</div>
                <div>
                    <div class="message-content">${formattedText}${badge}</div>
                    <div class="message-time">${time}</div>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div>
                    <div class="message-content">${formattedText}</div>
                    <div class="message-time">${time}</div>
                </div>
            `;
        }
        
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        this.messageHistory.push({ text, sender, time, ...metadata });
    }
    
    async sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;
        
        this.addMessage(message, 'user');
        this.input.value = '';
        this.sendBtn.disabled = true;
        
        this.conversationContext.push(message);
        
        this.showTypingIndicator();
        
        try {
            const response = await this.processMessage(message);
            
            setTimeout(() => {
                this.hideTypingIndicator();
                this.addMessage(response.text, 'bot', { 
                    source: response.source,
                    fromAI: response.fromAI 
                });
                this.sendBtn.disabled = false;
                this.saveStats();
            }, response.fromAI ? 500 : 300);
            
        } catch (error) {
            console.error('Error:', error);
            this.hideTypingIndicator();
            const errorMsg = this.currentLang === 'vi' 
                ? "Xin lỗi, có lỗi xảy ra. Vui lòng thử lại!"
                : "Sorry, an error occurred. Please try again!";
            this.addMessage(errorMsg, 'bot', { source: 'DAKA' });
            this.sendBtn.disabled = false;
        }
    }
    
    handleQuickQuestion(question) {
        const kb = chatbotKnowledgeBase[this.currentLang];
        const questionTexts = {
            'intro': this.currentLang === 'vi' ? 'Giới thiệu website' : 'About website',
            'behavioral': this.currentLang === 'vi' ? 'Kinh tế hành vi là gì?' : 'What is Behavioral Economics?',
            'blog': this.currentLang === 'vi' ? 'Xem blog mới nhất' : 'Latest blogs'
        };
        
        this.addMessage(questionTexts[question], 'user');
        
        setTimeout(() => {
            const responses = {
                'intro': kb.intro,
                'behavioral': kb.behavioral,
                'blog': kb.latestBlogs
            };
            this.addMessage(responses[question], 'bot', { source: 'DAKA' });
        }, 500);
    }
    
    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'chat-message bot';
        indicator.id = 'typing-indicator';
        indicator.innerHTML = `
            <div class="message-avatar">🧠</div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        this.messagesContainer.appendChild(indicator);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }
    
    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    
    updateLanguage(lang) {
        this.currentLang = lang;
        const placeholder = this.currentLang === 'vi' ? 'Nhập câu hỏi...' : 'Type your question...';
        this.input.placeholder = placeholder;
    }
    
    // ==================== HELPER METHODS ====================
    
    isBlogSearchQuery(message) {
        const searchTerms = ['tìm', 'search', 'bài', 'post', 'article'];
        return searchTerms.some(term => message.includes(term));
    }
    
    searchBlogs(query) {
        // Simple blog search implementation
        const kb = chatbotKnowledgeBase[this.currentLang];
        return kb.latestBlogs; // Simplified
    }
    
    hasRecentContext(keyword) {
        return this.conversationContext.slice(-3).some(msg => 
            msg.toLowerCase().includes(keyword)
        );
    }
    
    // ==================== STATS MANAGEMENT ====================
    
    saveStats() {
        localStorage.setItem('daka_stats', JSON.stringify(this.stats));
    }
    
    loadStats() {
        const saved = localStorage.getItem('daka_stats');
        if (saved) {
            this.stats = { ...this.stats, ...JSON.parse(saved) };
        }
    }
    
    getStats() {
        const dakaHitRate = this.stats.totalQueries > 0 
            ? (this.stats.dakaHits / this.stats.totalQueries * 100).toFixed(1)
            : 0;
        
        const totalCost = this.aiProviders.reduce(
            (sum, p) => sum + p.provider.stats.totalCost, 
            0
        );
        
        return {
            totalQueries: this.stats.totalQueries,
            dakaHits: this.stats.dakaHits,
            aiHits: this.stats.aiHits,
            dakaHitRate: `${dakaHitRate}%`,
            aiHitsByProvider: this.stats.aiHitsByProvider,
            totalCost: `$${totalCost.toFixed(4)}`,
            providers: this.getProviders()
        };
    }
    
    resetStats() {
        this.stats = {
            totalQueries: 0,
            dakaHits: 0,
            aiHits: 0,
            aiHitsByProvider: {}
        };
        this.saveStats();
        
        // Reset provider stats
        this.aiProviders.forEach(p => {
            p.provider.stats = {
                totalCalls: 0,
                successCalls: 0,
                failedCalls: 0,
                totalCost: 0
            };
        });
    }
}

// ==================== ADDITIONAL CSS ====================
const additionalStyles = `
.source-badge {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.15rem 0.5rem;
    color: white;
    border-radius: 8px;
    font-size: 0.7rem;
    font-weight: 600;
    vertical-align: middle;
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// ==================== INITIALIZATION ====================
/**
 * Initialize DAKA Chatbot
 * Add your AI providers here!
 */
document.addEventListener('DOMContentLoaded', () => {
    // Create chatbot instance
    window.daka = new DakaBot();
    
    // ========== METHOD 1: WITH API KEY (RECOMMENDED) ==========
    // Uncomment and add your DeepSeek API key:
    
    // const deepseek = new DeepSeekProvider('YOUR_DEEPSEEK_API_KEY_HERE', {
    //     systemPrompt: 'Custom system prompt...' // Optional
    // });
    // window.daka.registerProvider(deepseek, 1); // Priority 1 (highest)
    
    
    // ========== METHOD 2: WITHOUT API KEY (DAKA ONLY) ==========
    // Leave as-is for rule-based only
    
    
    // ========== METHOD 3: ADD LATER ==========
    // Set API key after initialization:
    // window.daka.setDeepSeekKey('sk-xxx');
    
    
    console.log('🧠 DAKA Chatbot initialized');
    console.log('📊 Registered providers:', window.daka.getProviders().length);
});

// ==================== HELPER FUNCTIONS ====================

/**
 * Easy way to add DeepSeek after initialization
 */
window.setDeepSeekKey = function(apiKey, config = {}) {
    const deepseek = new DeepSeekProvider(apiKey, config);
    window.daka.registerProvider(deepseek, 1);
    console.log('✅ DeepSeek registered successfully');
};

/**
 * Display chatbot statistics
 */
window.showDakaStats = function() {
    const stats = window.daka.getStats();
    console.table(stats);
    console.log('\n📊 Provider Details:');
    stats.providers.forEach(p => {
        console.log(`\n${p.name}:`);
        console.table(p.stats);
    });
};

/**
 * Example: Add Chatbase provider
 */
window.addChatbase = function(apiKey, chatbotId) {
    const chatbase = new ChatbaseProvider(apiKey, { chatbotId });
    window.daka.registerProvider(chatbase, 2); // Priority 2 (after DeepSeek)
    console.log('✅ Chatbase registered');
};

/**
 * Example: Add Hugging Face provider
 */
window.addHuggingFace = function(apiKey, model) {
    const hf = new HuggingFaceProvider(apiKey, { model });
    window.daka.registerProvider(hf, 3); // Priority 3
    console.log('✅ Hugging Face registered');
};

// ==================== CONSOLE COMMANDS ====================
console.log(`
🧠 DAKA Chatbot Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 Setup:
  setDeepSeekKey('sk-xxx')          - Add DeepSeek API key
  addChatbase('key', 'chatbotId')   - Add Chatbase provider
  addHuggingFace('key', 'model')    - Add HuggingFace provider

📊 Statistics:
  showDakaStats()                   - View detailed statistics
  daka.getStats()                   - Get stats object
  daka.resetStats()                 - Reset all statistics

🔧 Provider Management:
  daka.getProviders()               - List all providers
  daka.toggleProvider('Name', true) - Enable/disable provider
  daka.removeProvider('Name')       - Remove provider

💬 Chatbot:
  daka.isOpen                       - Check if chatbot open
  daka.messageHistory               - View message history
  daka.currentLang                  - Current language (vi/en)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
