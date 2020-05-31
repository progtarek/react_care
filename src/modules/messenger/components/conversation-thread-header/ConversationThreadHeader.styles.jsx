import styled from 'styled-components';
import { WHITE } from '../../../../shared/styles/variables';

export const ConversationThreadHeaderContainer = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  padding: 0 22px 0 32px;
  background-color: #5cafb5;
  justify-content: space-between;

  .active-conversation-title {
    color: ${WHITE};
    font-size: 16px;
  }
`;
