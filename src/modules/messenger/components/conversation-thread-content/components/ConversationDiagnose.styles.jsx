import styled from 'styled-components';

export const ConversationDiagnoseContainer = styled.div`
  .title {
    font-size: 16px;
    color: #546566;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .released-on {
    display: flex;
    direction: ltr;
    margin-bottom: 4px;

    img {
      width: 16px;
      height: 16px;
      margin-right: 12px;
    }

    .more {
      .release-date,
      .email {
        line-height: 14px;
        font-size: 13px;
        margin-bottom: 6px;
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .block {
      display: flex;
      align-items: center;

      &.action {
        span {
          color: #ce5b4c;
          font-size: 13px;
          margin-left: 22px;
          font-weight: 600;
        }
      }

      &.history {
        span {
          color: #546566;
          font-size: 13px;
          margin-left: 22px;
          font-weight: 600;
        }
      }
    }
  }
`;
