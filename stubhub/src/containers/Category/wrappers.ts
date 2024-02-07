import styled from 'styled-components';

export const EventImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  & img {
    width: 250px;
    height: 150px;
    display: block; 
  }
`

export const EventTitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5em;
  box-sizing: border-box;
`

export const EventContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const EventItem = styled.div`
  margin: 0.25em; 
  max-width: 250px;
`;

export const EventWrapper = styled.div`
`;