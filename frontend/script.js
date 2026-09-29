async function sendMessage() {
    const inputField = document.getElementById("user-input");
    const ageField = document.getElementById("age");
    const chatBox = document.getElementById("chat-box");

    const message = inputField.value.trim();
    const age = ageField.value;

    if (message === "") return;

    // 1. Show User Message in Chat
    addMessageToChat(message, "user-message");
    inputField.value = ""; // Clear input

    // 2. Show "Typing..." Indicator
    const loadingId = "loading-" + Date.now();
    addMessageToChat("👩‍🍳 Chef is thinking...", "bot-message", loadingId);

    try {
        // 3. Call the Python Backend API
        const response = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message,
                child_age: parseInt(age)
            })
        });

        const data = await response.json();

        // 4. Remove Loading and Show Bot Response
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.remove();

        // Format the bold text from AI (Example: **Title** becomes <b>Title</b>)
        let formattedReply = data.reply.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        
        addMessageToChat(formattedReply, "bot-message", null, true);

    } catch (error) {
        console.error("Error:", error);
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.innerText = "⚠️ Error connecting to server. Is backend running?";
    }
}

// Helper function to add HTML to chat
function addMessageToChat(text, className, id = null, isHTML = false) {
    const chatBox = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.classList.add("message", className);
    
    if (id) div.id = id;

    if (isHTML) {
        div.innerHTML = text;
    } else {
        div.innerText = text;
    }

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to bottom
}