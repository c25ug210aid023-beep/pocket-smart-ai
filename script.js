const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const messageText = userInput.value.trim();
  if (messageText === '') return;

  // User Message-ஐ ஸ்கிரீனில் காட்டுவது
  appendMessage(messageText, 'user-message');
  userInput.value = '';

  // AI பதில் தருவது போல் ஒரு போலி பதிலைக் காட்டுவது (Mock Response)
  setTimeout(() => {
    appendMessage(`Pocket AI: நீங்கள் கேட்டது "${messageText}".`, 'ai-message');
  }, 1000);
}

function appendMessage(text, className) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', className);
  messageElement.innerText = text;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}