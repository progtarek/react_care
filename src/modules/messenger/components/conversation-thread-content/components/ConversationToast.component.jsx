import React from 'react';
import { ConversationToastContainer } from './ConversationToast.styles';

const ConversationToast = ({ content, sentOn }) => {
  return (
    <ConversationToastContainer>
      <p className='toast-content'>{content}</p>
      <span className='sent-on'>{sentOn}</span>
    </ConversationToastContainer>
  );
};

export default ConversationToast;
