import React from 'react';
import {
  ConversationListItemContainer,
  ConversationMediaObjectFooter,
  ConversationMediaObjectBody,
  ConversationListItemWrapper,
  ConversationAvatar,
} from './ConversationListItem.styles';

const ConversationListItem = ({
  avatar,
  status,
  groupTitle,
  lastMessage,
  unseenCount,
  lastActivity,
  lastMessenger,
  active,
}) => {
  return (
    <ConversationListItemContainer className={active ? 'active' : ''}>
      <ConversationListItemWrapper>
        <ConversationAvatar url={avatar} className={status} />
        <ConversationMediaObjectBody>
          <div className='group-title'>{groupTitle}</div>
          <div className='last-messenger'>{lastMessenger}</div>
          <div className='last-message'>{lastMessage}</div>
        </ConversationMediaObjectBody>
        <ConversationMediaObjectFooter>
          <div className='last-activity'>{lastActivity}</div>
          {status === 'unseen' ? (
            <div className='unseen-count'>{unseenCount}</div>
          ) : null}
        </ConversationMediaObjectFooter>
      </ConversationListItemWrapper>
    </ConversationListItemContainer>
  );
};

export default ConversationListItem;
