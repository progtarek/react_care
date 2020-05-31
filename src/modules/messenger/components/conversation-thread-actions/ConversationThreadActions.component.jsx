import React from 'react';
import { ConversationThreadActionsContainer } from './ConversationThreadActions.styles';
import GroupAction from './components/GroupAction.component';
import SearchAction from './components/SearchAction.component';
import FilterAction from './components/FilterAction.component';

const ConversationThreadActions = () => {
  return (
    <ConversationThreadActionsContainer>
      <GroupAction />
      <FilterAction />
      <SearchAction />
    </ConversationThreadActionsContainer>
  );
};

export default ConversationThreadActions;
