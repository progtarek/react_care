import styled, { css } from 'styled-components';
import DefaultAvatarIcon from '../../../../assets/img/messenger/ic_default_group_conversation.png';
import { WHITE } from '../../../../shared/styles/variables';

export const ConversationMediaObject = css`
  width: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  color: #666666;

  &:last-child {
    border: none;
  }
`;

export const ConversationMediaObjectFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  flex: 1;
  align-self: stretch;

  .last-activity {
    color: #909b9c;
    font-size: 12px;
  }

  .unseen-count {
    width: 35px;
    height: 20px;
    display: flex;
    font-size: 12px;
    color: ${WHITE};
    align-items: center;
    justify-content: center;
    background-color: #608a8b;
    border-radius: 10px;
  }
`;

export const ConversationMediaObjectBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;

  .last-messenger {
    font-size: 13px;
    font-weight: 600;
  }

  .last-message {
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ConversationListItemContainer = styled.div`
  height: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e7e9e9;

  .group-title {
    font-size: 16px;
    font-weight: 700;
  }

  &.active {
    background-color: #ecf2f2;
  }
`;

export const ConversationListItemWrapper = styled.div`
  ${ConversationMediaObject};
`;

export const ConversationAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-size: cover;
  margin-right: 15px;
  background-image: url(${({ url }) => (url ? url : DefaultAvatarIcon)});

  &.unseen {
    border: 3px solid #608a8b;
  }
`;
