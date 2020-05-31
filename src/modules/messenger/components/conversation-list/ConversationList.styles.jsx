import styled from 'styled-components';

export const ConversationListContainer = styled.div`
  overflow-y: auto;
  width: 100%;

  /* style scrollbar*/
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #eeeeee;
  }
  ::-webkit-scrollbar-thumb {
    background: #c5d2d4;
    border-radius: 10px;
    height: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b7c3c5;
  }
`;
