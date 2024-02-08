import styled from 'styled-components';
import { EventTitleColors } from '../../constants/colors';

export const EventImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  & img {
    width: 22em;
    height: 15em;
    display: block;
    border-radius: 3px;
  }



`

export const EventTitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${EventTitleColors.black};
  color: white;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const EventContainer = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  grid-gap: 1em;
`;

export const EventItem = styled.div`
  margin: 0.25em; 
`;

export const EventWrapper = styled.div`
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CategoryWrapper = styled.div`
  padding: 1em 3em;
`