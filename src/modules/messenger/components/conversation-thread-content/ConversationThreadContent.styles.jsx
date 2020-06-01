import styled from 'styled-components';

export const ConversationThreadContentContainer = styled.div`
  padding: 8px 32px 32px 32px;
  flex: 1 1 0;
  order: 2;
  position: relative;
  z-index: 1;
  overflow-y: auto;

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
