import styled from 'styled-components';
import { TicketListColors } from '../../constants/colors';

export const Wrapper = styled.div`
  padding: 1em 3em;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 0;
  padding-right: 0;
`;

export const TicketsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

interface TicketListItemProps {
  status?: boolean;
}

export const TicketListItem = styled.li<TicketListItemProps>`
  border: 1px solid ${TicketListColors.border};
  display: block;
  padding: 5px;
  margin: 0 0 10px 0;
  ${({ status }) => status && `
    background-color: ${TicketListColors.primary}
  `}
`;

export const TicketEvent = styled.div`
  display: table;
  width: 100%;
  padding: 5px;
`;

export const EventImage = styled.img`
  display: table-cell;
  width: 150px;
  height: 100px;
  margin: 0;
`;

export const EventInfo = styled.div`
  display: table-cell;
  width: 100%;
  padding-left: 10px;
  vertical-align: top;
  font-size: 90%;
  line-height: 2.3em;
  color: gray;
`;

export const EventTitle = styled.h4`
  margin: 0;
  font-size: 1.5em;
  display: block;
  margin-right: 30px;
  font-weight: 300;
  color: black;
`;

export const DateTime = styled.time`
  &:after {
    content: '-';
    margin: 0 5px;
  }
`;

export const Locations = styled.span`
  display: block;
`;

export const TicketActions = styled.ul`
  display: table;
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
`;