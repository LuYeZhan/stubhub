import styled from "styled-components";
import { TicketActionColors, UnderlineColors } from "../../constants/colors";

export const TicketRow = styled.tr`
  position: relative;
  &:hover {
    background-color: ${TicketActionColors.hover};
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${UnderlineColors.primary}
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