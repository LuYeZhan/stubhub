import styled from "styled-components";
import { EventCellColors } from "../../constants/colors";

export const EventContainer = styled.div`
  margin-top: 20px;
`;

export const EventTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TicketList = styled.div`
  margin-bottom: 20px;
`;


export const EventRow = styled.tr``;

export const EventCell = styled.td`
  padding: 10px;
  border: 1px solid ${EventCellColors.border};
`;