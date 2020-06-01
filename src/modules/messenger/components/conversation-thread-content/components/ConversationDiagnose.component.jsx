import React from 'react';
import { ConversationDiagnoseContainer } from './ConversationDiagnose.styles';
import ClockIcon from '../../../../../assets/img/messenger/ic_clock.png';
import EmojiIcon from '../../../../../assets/img/messenger/ic_sad_emoji.png';
import HistoryIcon from '../../../../../assets/img/messenger/ic_history.png';

const ConversationDiagnose = ({ title, releasedOn, email }) => {
  return (
    <ConversationDiagnoseContainer>
      <div className='title'>{title}</div>
      <div className='released-on'>
        <img src={ClockIcon} alt='release on' />
        <div className='more'>
          <div className='release-date'>{releasedOn}</div>
          <div className='email'>{email}</div>
        </div>
      </div>
      <div className='footer'>
        <div className='block action'>
          <img src={EmojiIcon} alt='action' width='16px' height='16px' />
          <span>Severe</span>
        </div>
        <div className='block history'>
          <img
            src={HistoryIcon}
            alt='view history'
            width='16px'
            height='16px'
          />
          <span>View History</span>
        </div>
      </div>
    </ConversationDiagnoseContainer>
  );
};

export default ConversationDiagnose;
