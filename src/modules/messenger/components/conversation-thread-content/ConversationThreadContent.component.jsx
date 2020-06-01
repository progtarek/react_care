import React from 'react';
import { ConversationThreadContentContainer } from './ConversationThreadContent.styles';
import ConversationDiagnose from './components/ConversationDiagnose.component';
import ConversationBubble from './components/ConversationBubble.component';
import ConversationToast from './components/ConversationToast.component';
import ConversationTask from './components/ConversationTask.component';
import CHAT_LIST from './chatList';

const ConversationThreadContent = () => {
  return (
    <ConversationThreadContentContainer>
      {CHAT_LIST.map(({ id, type, ...rest }) => {
        if (type === 'toast') {
          return <ConversationToast key={id} {...rest} />;
        } else if (type === 'diagnose') {
          return (
            <ConversationBubble key={id} {...rest}>
              <ConversationDiagnose {...rest}></ConversationDiagnose>
            </ConversationBubble>
          );
        }
        return (
          <ConversationBubble key={id} {...rest}>
            <ConversationTask {...rest} />
          </ConversationBubble>
        );
      })}
      {/*
      <ConversationBubble messenger='me'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate in
        maxime excepturi placeat
      </ConversationBubble> */}
    </ConversationThreadContentContainer>
  );
};

export default ConversationThreadContent;
