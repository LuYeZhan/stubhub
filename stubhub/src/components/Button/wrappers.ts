import { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { ButtonColors } from '../../constants/colors';

export interface CustomButtonProps extends ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
}

interface ButtonProps {
  bgColor?: string;
  hover?: boolean;
  color?: string;
}

export const ButtonWrapper = styled.button<ButtonProps>`
  color: ${props => props.color || ButtonColors.white};  
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  text-decoration: none;
  align-self: center;
  cursor: pointer;
  background-color: ${props => props.bgColor || 'inherit'};
  border: 0;
  height: -webkit-fill-available;
  transition: background-color 0.2s ease-out;
  border-radius: 3px;

  ${props =>
    props.hover &&
    css`
      &:hover {
        background-color: ${ButtonColors.grey};
      }
    `}
`;

export const IconWrapper = styled.span`
  margin-right: 5px;
`;