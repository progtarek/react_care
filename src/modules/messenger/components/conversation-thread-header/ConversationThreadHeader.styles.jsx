import styled from 'styled-components';
import { WHITE } from '../../../../shared/styles/variables';

export const ConversationThreadHeaderContainer = styled.header`
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  padding: 0 22px 0 32px;
  background-color: #5cafb5;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  z-index: 1000;
  background-color: #5cafb5;
  order: 1;

  .active-conversation-title {
    color: ${WHITE};
    font-size: 16px;
  }
`;
