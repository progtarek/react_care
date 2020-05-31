import React from 'react';
import { ConversationListContainer } from './ConversationList.styles';
import ConversationGroupItem from '../conversation-group-item/ConversationGroupItem.component';
import MESSENGER_DATA from './coversationList';

const ConversationList = () => {
  return (
    <ConversationListContainer>
      {MESSENGER_DATA.map(({ id, ...rest }) => (
        <ConversationGroupItem key={id} {...rest} />
      ))}
    </ConversationListContainer>
  );
};

export default ConversationList;
