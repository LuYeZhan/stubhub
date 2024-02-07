import styled from "styled-components";

export const TicketRow = styled.tr`
  border-bottom: 1px solid #DDD;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #FAFAFA;
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