import React from 'react';
import { ConversationThreadControlsContainer } from './ConversationThreadControls.styles';
import CustomInput from '../../../../shared/components/forms/CustomInput.component';
import CustomButtonWithIcon from '../../../../shared/components/forms/CustomButtonWithIcon.component';
import SendIcon from '../../../../assets/img/controls/ic_send.png';
import AddIcon from '../../../../assets/img/controls/ic_add.png';

const ConversationThreadControls = () => {
  return (
    <ConversationThreadControlsContainer>
      <form>
        <CustomButtonWithIcon type='button' style={{ marginRight: '10px' }}>
          <img src={AddIcon} alt='attach' />
        </CustomButtonWithIcon>
        <CustomInput type='text' placeholder='message' />
        <CustomButtonWithIcon type='submit' style={{ marginLeft: '13px' }}>
          <img src={SendIcon} alt='send' />
        </CustomButtonWithIcon>
      </form>
    </ConversationThreadControlsContainer>
  );
};

export default ConversationThreadControls;
