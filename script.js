function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    if (message === "") return;

    chatBox.innerHTML += `<div class="user">You: ${message}</div>`;

    let reply = "";

    if (message.includes("menu")) {
        reply = "🍕 Our menu includes Pizza, Burger, Pasta, and Drinks.";
    } 
    else if (message.includes("order")) {
        reply = "🛒 You can place an order by selecting items from the menu.";
    }
    else if (message.includes("price")) {
        reply = "💰 Prices start from ₹99 onwards.";
    }
    else if (message.includes("delivery")) {
        reply = "🚚 Delivery available within 30 minutes.";
    }
    else if (message.includes("contact")) {
        reply = "📞 Contact us at 9876543210.";
    }
    else {
        reply = "🤖 Sorry, I didn't understand. Ask about menu, order, price, or delivery.";
    }

    chatBox.innerHTML += `<div class="bot">Bot: ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";
}
