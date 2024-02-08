import styled from 'styled-components';
import { InputColors } from '../../constants/colors';

export const SearchWrapper = styled.div`
  display: flex;
  height: 3em;
  box-shadow: 1px 2px 5px ${InputColors.shadow};
  & button {
    font-size: 1.5em;
  }
`
export const InputWrapper = styled.input`
  width: 100%;
  font-size: 1em;
  padding-left: 1em;
  border: 1px solid ${InputColors.border};
  border-radius: 3px;
`;

export const TypeAheadWrapper = styled.div`
  max-height: 15em;
  overflow-y: auto;
  background-color: white;
  border: 1px solid ${InputColors.border};
  border-top: none;
  border-radius: 0 0 4px 4px;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${InputColors.background};
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;
  }
`

export const FilteredWrapper = styled.div`
  padding-left: 1em;
`