import styled from 'styled-components';
import { TicketListItemColors } from '../../constants/colors';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-left: 0;
  padding-right: 0;
  max-width: 1170px;
`;

export const TicketsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const TicketListItem = styled.li`
  border: 1px solid ${TicketListItemColors.border};
  display: block;
  padding: 5px;
  margin: 0 0 10px 0;
`;

export const TicketEvent = styled.div`
  display: table;
  width: 100%;
  padding: 5px;
`;

export const EventImage = styled.img`
  display: table-cell;
  width: 100px;
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