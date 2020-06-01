import React from 'react';
import {
  ConversationThreadContainer,
  Tarek,
} from './ConversationThread.styles';
import ConversationThreadHeader from '../conversation-thread-header/ConversationThreadHeader.component';
import ConversationThreadControls from '../conversation-thread-controls/ConversationThreadControls.component';

const ConversationThread = () => {
  return (
    <ConversationThreadContainer>
      <ConversationThreadHeader></ConversationThreadHeader>
      <Tarek>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        nihil dolores dolor magni assumenda quidem! Voluptatibus cum fuga ipsam
        nostrum blanditiis commodi dolor quas pariatur, sunt iure, dicta non
        officiis!
      </Tarek>
      <ConversationThreadControls> </ConversationThreadControls>
    </ConversationThreadContainer>
  );
};

export default ConversationThread;
