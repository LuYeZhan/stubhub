import styled from 'styled-components';

export const ActionItem = styled.li`
  display: table-cell;
`;

export const ActionLink = styled.a`
  background: #f5f5f5;
  display: block;
  margin: 5px;
  padding: 5px;
  color: #888;
  border: 1px solid transparent;
  &:hover {
    background-color: #EEE;
    border-color: #DDD;
  }
`;