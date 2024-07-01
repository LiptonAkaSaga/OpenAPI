import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post('http://localhost:8080/chat', { messages: newMessages });
      setMessages([...newMessages, { role: 'assistant', content: response.data.message }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role === 'user' ? 'user-message' : 'assistant-message'}`}>
            <span className="message-content">
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="message-input"
          placeholder="Wpisz wiadomość..."
        />
        <button
          onClick={sendMessage}
          className="send-button"
        >
          Wyślij
        </button>
      </div>
    </div>
  );
};

export default ChatApp;