import styled from "styled-components";
import { EventCellColors, UnderlineColors } from "../../constants/colors";

export const EventContainer = styled.div`
  padding: 1em 3em;
`;

export const EventTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TicketList = styled.div`
  margin-bottom: 20px;
`;

export const CustomTr = styled.tr`
  font-size: 0.7em;
  text-transform: uppercase;
  vertical-align: top;
  padding: 5px;
  color: black;
  font-weight: 600;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${UnderlineColors.primary}
  }
`;

export const EventRow = styled.tr``;

export const EventCell = styled.td`
  padding: 10px;
  border: 1px solid ${EventCellColors.border};
`;

export const TableWrapper = styled.table`
  width: 100%;
`