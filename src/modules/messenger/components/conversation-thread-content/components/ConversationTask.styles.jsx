import styled from 'styled-components';

export const ConversationTaskContainer = styled.div`
  direction: ltr;

  .task-title {
    font-size: 14px;
    font-weight: 600;
    color: #546566;
    margin-bottom: 13px;
  }

  .task-submission {
    display: flex;
    direction: ltr;
    margin-bottom: 15px;

    img {
      width: 16px;
      height: 16px;
      margin-right: 12px;
    }

    .more {
      .schedule-date,
      .repeat {
        line-height: 14px;
        font-size: 13px;
      }
    }
  }

  .task-note {
    display: flex;
    margin-bottom: 15px;

    img {
      width: 13px;
      height: 18px;
      margin-right: 13px;
    }

    span {
      color: #546566;
      font-size: 13px;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .task-status {
      width: 131px;
      height: 36px;
      cursor: pointer;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 1rem;

      span {
        color: #e88282;
      }
    }

    .messenger-media {
      display: flex;

      img {
        margin-left: 10px;
      }
      .media-body {
        .name {
          color: #666666;
          font-size: 12px;
        }

        .done-on {
          font-size: 11px;
          color: #666666;
          text-align: right;
        }
      }
    }
  }
`;
