import styled from 'styled-components';
import {
  DESKTOP_SIDEBAR_WIDTH,
  GRAY,
  WHITE,
} from '../../../../shared/styles/variables';
import ConversationIcon from '../../../../assets/img/messenger/conversation.png';

export const ConversationSidebarContainer = styled.div`
  display: flex;
  height: 100vh;
  width: ${DESKTOP_SIDEBAR_WIDTH};
  padding-top: 74px;
`;

export const ConversationHeaderContainer = styled.div`
  height: 74px;
  position: fixed;
  width: ${DESKTOP_SIDEBAR_WIDTH};
  background-color: ${GRAY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  top: 0;

  .title {
    color: ${WHITE};
    font-size: 19px;
    margin-left: 35px;
  }

  .new-conversation {
    background-image: url(${ConversationIcon});
    background-size: cover;
    width: 36px;
    height: 34px;
    margin-right: 26px;
  }
`;
