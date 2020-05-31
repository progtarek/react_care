import React from 'react';
import {
  ConversationGroupItemContainer,
  ConversationMediaObjectFooter,
  ConversationMediaObjectBody,
  ConversationAvatar,
} from './ConversationGroupItem.styles';

const ConversationGroupItem = ({
  avatar,
  status,
  groupTitle,
  lastMessage,
  unseenCount,
  lastActivity,
  lastMessenger,
}) => {
  return (
    <ConversationGroupItemContainer>
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
    </ConversationGroupItemContainer>
  );
};

export default ConversationGroupItem;
