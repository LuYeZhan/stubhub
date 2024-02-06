import styled, { css } from 'styled-components';

export interface CustomButtonProps extends ButtonProps {
  label: string;
}

interface ButtonProps {
  bgColor?: string;
  hover?: boolean;
  color?: string;
}

export const ButtonWrapper = styled.button<ButtonProps>`
  color: ${props => props.color || '#ffffff'}; // Set default color to white  
  padding: 0px 1em;
  display: flex;
  align-items: center;
  text-decoration: none;
  align-self: center;
  cursor: pointer;
  background-color: ${props => props.bgColor || 'inherit'};
  border: 0;
  height: -webkit-fill-available;
  transition: background-color 0.2s ease-out;

  /* Apply hover effect only if hover prop is true */
  ${props =>
    props.hover &&
    css`
      &:hover {
        background-color: #dddddd;
      }
    `}

  /* Icon style */
  .icon {
    margin-right: 5px;
  }
`;
