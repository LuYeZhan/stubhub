import styled from 'styled-components';
import { ActionLinkColors } from '../../constants/colors';
import { Desktop } from '../../constants/devices';

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
  border-radius: 5px;
  &:hover {
    background-color: ${ActionLinkColors.background};
    border-color: ${ActionLinkColors.border};
  }
  @media ${Desktop} {
    padding: 1em 0;
  }
`;

export const Icon = styled.i`
  margin-right: 5px;
`;