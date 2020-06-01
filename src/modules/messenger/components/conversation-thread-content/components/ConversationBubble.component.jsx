import React from 'react';
import { ConversationBubbleContainer } from './ConversationBubble.styles';

const ConversationBubble = ({ children, messenger, avatar, sentOn }) => {
  return (
    <ConversationBubbleContainer className={messenger === 'me' ? 'rtl' : 'ltr'}>
      <div className='bubble'>{children}</div>
      <div className='messenger'>
        <img className='avatar' src={avatar} alt='sender' />
        <div className='more'>
          <span className='short'>{messenger}</span>
          <span className='sent-on'>{sentOn}</span>
        </div>
      </div>
    </ConversationBubbleContainer>
  );
};

export default ConversationBubble;
