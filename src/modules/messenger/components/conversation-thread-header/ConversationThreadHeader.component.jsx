import React from 'react';
import { ConversationThreadHeaderContainer } from './ConversationThreadHeader.styles';
import ConversationThreadActions from '../conversation-thread-actions/ConversationThreadActions.component';

function ConversationThreadHeader() {
  return (
    <ConversationThreadHeaderContainer>
      <div className='active-conversation-title'>Mom’s Discharge Plan</div>
      <ConversationThreadActions />
    </ConversationThreadHeaderContainer>
  );
}

export default ConversationThreadHeader;
