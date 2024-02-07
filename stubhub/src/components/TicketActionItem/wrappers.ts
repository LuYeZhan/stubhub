import styled from 'styled-components';
import { ActionLinkColors } from '../../constants/colors';

export const ActionItem = styled.li`
  display: table-cell;
`;

export const ActionLink = styled.a`
  background: ${ActionLinkColors.white};
  display: block;
  margin: 5px;
  padding: 5px;
  color: ${ActionLinkColors.grey};
  border: 1px solid transparent;
  &:hover {
    background-color: ${ActionLinkColors.background};
    border-color: ${ActionLinkColors.border};
  }
`;