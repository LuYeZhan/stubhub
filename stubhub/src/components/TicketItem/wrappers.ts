import styled from "styled-components";
import { TicketActionColors } from "../../constants/colors";

export const TicketRow = styled.tr`
  border-bottom: 1px solid ${TicketActionColors.border};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${TicketActionColors.hover};
  }
`;

export const LocationCell = styled.td`
  text-align: left;
`;

export const QuantityCell = styled.td`
  padding: 10px;
  text-align: center;
`;

export const PriceCell = styled.td`
  padding: 10px;
  text-align: center;
`;

export const ActionCell = styled.td`
  padding: 10px;
  text-align: center;
`;