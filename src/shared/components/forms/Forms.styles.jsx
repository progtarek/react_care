import styled from 'styled-components';
import { WHITE } from '../../styles/variables';

export const CustomInputContainer = styled.input`
  background-color: ${WHITE};
  border-radius: 10px;
  height: 35px;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  color: #495057;
  background-clip: padding-box;
  border: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;

  ::placeholder {
    color: #afafb3;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #afafb3;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ;
  }
`;

export const CustomButtonWithIconContainer = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  padding: 0;
`;
