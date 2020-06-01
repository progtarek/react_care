import styled from 'styled-components';

export const ConversationBubbleContainer = styled.div`
  padding-left: 30px;
  max-width: 80%;
  margin-bottom: 0.75rem;

  .messenger {
    margin-left: -3rem;
    display: flex;
    align-items: center;

    .avatar {
      width: 30px;
      height: 30px;
    }

    .more {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 23px;
      flex: 1 0;

      .short {
        color: #838383;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
      }

      .sent-on {
        font-weigh: 200;
        font-size: 11px;
        color: #838383;
      }
    }
  }

  .bubble {
    background-color: #ecf2f2;
    padding: 14px 1rem;
    color: #546566;
    border-radius: 16px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-right-color: #ecf2f2;
      border-left: 0;
      border-bottom: 0;
      margin-top: -8px;
      margin-left: -12px;
      bottom: -1px;
      transform: rotate(-12deg);
    }
  }

  &.rtl {
    direction: rtl;
    padding-left: 0 !important;
    padding-right: 30px;
    margin-left: auto;

    .messenger {
      margin-right: -3rem;
      margin-left: 0px;

      .more {
        margin-right: 23px;
        margin-left: 0px;
      }
    }

    .bubble {
      background-color: #e7e7e7;

      &:after {
        content: '';
        position: absolute;
        right: 0;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: #e7e7e7;
        border-right: 0;
        border-bottom: 0;
        margin-top: -10px;
        margin-right: -12px;
        bottom: 0px;
        transform: rotate(11deg);
      }
    }
  }
`;
