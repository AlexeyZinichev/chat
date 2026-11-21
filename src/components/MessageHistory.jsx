import React from 'react';
import './chat.css';

const MessageHistory = ({ list = [] }) => {
  if (!list.length) return null;

  return (
    <div className="chat-history">
      {list.map(msg => {
        const isOwn = msg.type === 'message';
        const isResponse = msg.type === 'response';
        const isTyping = msg.type === 'typing';
        const messageClass = isOwn ? 'message-own' : isResponse ? 'message-response' : 'message-typing';

        return (
          <div key={msg.id} className={`message-item ${messageClass}`}>
            <div className="message-header">
              <span className="message-author">{msg.from.name}</span>
              <span className="message-time">{msg.time}</span>
            </div>
            {isTyping ? (
              <div className="typing-indicator">
                <span>печатает...</span>
              </div>
            ) : (
              <div className="message-bubble">
                {msg.text}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MessageHistory;
