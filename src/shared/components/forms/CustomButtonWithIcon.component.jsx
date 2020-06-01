import React from 'react';
import { CustomButtonWithIconContainer } from './Forms.styles';

const CustomButtonWithIcon = ({ children, ...rest }) => {
  return (
    <CustomButtonWithIconContainer {...rest}>
      {children}
    </CustomButtonWithIconContainer>
  );
};

export default CustomButtonWithIcon;
