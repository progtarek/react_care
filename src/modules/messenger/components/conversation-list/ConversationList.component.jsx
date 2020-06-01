import React from 'react';
import { ConversationListContainer } from './ConversationList.styles';
import ConversationListItem from '../conversation-list-item/ConversationListItem.component';
import MESSENGER_DATA from './coversationList';

const ConversationList = () => {
  return (
    <ConversationListContainer>
      {MESSENGER_DATA.map(({ id, ...rest }) => (
        <ConversationListItem key={id} {...rest} />
      ))}
    </ConversationListContainer>
  );
};

export default ConversationList;
