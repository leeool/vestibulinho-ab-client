import React, { useState } from 'react';
import { FloatingButton } from './chatButton.styled';
import Chat from "minimal-chatbot"
import messages, { firstMessage } from '../../Data';
import { Bot } from 'lucide-react';

const ChatButton = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      {showChat && <Chat data={messages} firstMessage={firstMessage} />}
      <FloatingButton onClick={toggleChat}>
        <Bot size={40}/>
      </FloatingButton>
    </>
  );
}

export default ChatButton;
