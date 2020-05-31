import React from 'react';
import {
  ConversationSidebarContainer,
  ConversationHeaderContainer,
} from './ConversationSidebar.styles';

import ConversationList from '../conversation-list/ConversationList.component';

const ConversationSidebar = () => {
  return (
    <ConversationSidebarContainer>
      <ConversationHeaderContainer>
        <div className='title'>Conversations</div>
        <div className='new-conversation'></div>
      </ConversationHeaderContainer>

      <ConversationList></ConversationList>
    </ConversationSidebarContainer>
  );
};

export default ConversationSidebar;
