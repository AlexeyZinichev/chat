import React from 'react';
import MessageHistory from './components/MessageHistory';
import { messages } from './data';

function App() {
  return (
    <div className="chat-container">
      <MessageHistory list={messages} />
    </div>
  );
}

export default App;
