import React from 'react';
import { ConversationTaskContainer } from './ConversationTask.styles';
import ClockIcon from '../../../../../assets/img/messenger/ic_clock.png';
import NoteIcon from '../../../../../assets/img/messenger/ic_note.png';
import CheckmarkIcon from '../../../../../assets/img/controls/ic_checkmark.png';

const ConversationTask = ({
  title,
  scheduleDate,
  repeat,
  note,
  status,
  assignedToAvatar,
  assignedTo,
  doneOn,
}) => {
  return (
    <ConversationTaskContainer>
      <div className='task-title'>{title}</div>
      <div className='task-submission'>
        <img src={ClockIcon} alt='submission' />
        <div className='more'>
          <div className='schedule-date'>{scheduleDate}</div>
          <div className='repeat'>{repeat}</div>
        </div>
      </div>
      <div className='task-note'>
        <img src={NoteIcon} alt='task note' />
        <span>{note}</span>
      </div>
      <div className='footer'>
        <div className={`task-status ${status === 'DONE' ? 'done' : ''}`}>
          <img src={CheckmarkIcon} alt='done' />
          <span>done</span>
        </div>
        <div className='messenger-media'>
          <div className='media-body'>
            <div className='name'>{assignedTo}</div>
            <div className='done-on'>{doneOn}</div>
          </div>
          <img
            src={assignedToAvatar}
            width='30px'
            height='30px'
            alt='assignee avatar'
          />
        </div>
      </div>
    </ConversationTaskContainer>
  );
};

export default ConversationTask;
