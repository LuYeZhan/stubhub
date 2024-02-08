import styled from 'styled-components';
import { TicketListColors } from '../../constants/colors';
import { Desktop } from '../../constants/devices';

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
  margin: 0 0 1em 0;
  border-radius: 5px;
  @media ${Desktop} {
    padding: 0.75em;
  }
  ${({ status }) => status && `
  background-color: ${TicketListColors.primary}
`}
`;

export const TicketEvent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media ${Desktop} {
    flex-direction: row;
  }
`;

export const EventImage = styled.img`
  display: table-cell;
  width: auto;
  height: 175px;
  margin: 0;
  border-radius: 5px;
  @media ${Desktop} {
    width: 200px;
    height: 100px;
    flex-direction: row;
    margin: 5px 0 15px 5px;
  }
`;

export const EventInfo = styled.div`
  display: table-cell;
  width: 100%;
  padding-left: 10px;
  vertical-align: top;
  font-size: 90%;
  line-height: 2.3em;
  color: gray;
  @media ${Desktop} {
    flex-direction: row;
    margin-top: 1em;
    font-size: 100%;
  }
`;

export const EventTitle = styled.h4`
  margin: 0;
  font-size: 1.5em;
  display: block;
  margin-right: 30px;
  font-weight: 300;
  color: black;
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${Desktop} {
    flex-direction: row;
  }
`

export const DateTime = styled.time`
  @media ${Desktop} {
    flex-direction: row;
    padding-right: 0.5em;
  }
`;

export const Locations = styled.span`
  @media ${Desktop} {
    &:before {
      content: ' - '
    }
  }
`;

export const TicketActions = styled.ul`
  display: flex;
  text-align: center;
  padding: 0;
  margin: 0;
  flex-direction: column;
  @media ${Desktop} {
    display: table;
    width: 100%;
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;
