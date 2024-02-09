import styled from 'styled-components';
import { ButtonColors, EventTitleColors } from '../../constants/colors';
import { Desktop, TabletLandscape } from '../../constants/devices';
import { Paddings } from '../../constants/paddings';

export const EventImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  & img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 3px;
  }
`;

export const EventTitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${EventTitleColors.black};
  color: white;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EventContainer = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  @media ${TabletLandscape} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${Desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const EventItem = styled.div`
  margin: 0.25em; 
`;

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
  & button {
    width: 100%;
    padding: 1em;
    &:hover {
      background-color: ${ButtonColors.darkgreen};
    }
  }
  @media ${Desktop} {
    justify-content: flex-end;
    & button {
      width: auto;
    }
  }
`;

export const CategoryWrapper = styled.div`
  padding: 1em;
  @media ${Desktop} {
    padding: ${Paddings.desktop};
  }

`;
