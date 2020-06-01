import React from 'react';
import { ConversationThreadContainer } from './ConversationThread.styles';
import ConversationThreadHeader from '../conversation-thread-header/ConversationThreadHeader.component';
import ConversationThreadControls from '../conversation-thread-controls/ConversationThreadControls.component';
import ConversationThreadContent from '../conversation-thread-content/ConversationThreadContent.component';

const ConversationThread = () => {
  return (
    <ConversationThreadContainer>
      <ConversationThreadHeader></ConversationThreadHeader>
      <ConversationThreadContent></ConversationThreadContent>
      <ConversationThreadControls> </ConversationThreadControls>
    </ConversationThreadContainer>
  );
};

export default ConversationThread;
