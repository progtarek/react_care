import React from 'react';
import { ConversationThreadContainer } from './ConversationThread.styles';
import ConversationThreadHeader from '../conversation-thread-header/ConversationThreadHeader.component';

const ConversationThread = () => {
  return (
    <ConversationThreadContainer>
      <ConversationThreadHeader />
    </ConversationThreadContainer>
  );
};

export default ConversationThread;
