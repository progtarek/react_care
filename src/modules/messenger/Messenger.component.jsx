import React from 'react';
import ConversationSidebar from './components/conversation-sidebar/ConversationSidebar.component';
import ConversationThread from './components/conversation-thread/ConversationThread.component';
import { MessengerContainer } from './Messenger.styles';

const Messenger = () => {
  return (
    <MessengerContainer id='messenger'>
      <ConversationSidebar />
      <ConversationThread />
    </MessengerContainer>
  );
};

export default Messenger;
