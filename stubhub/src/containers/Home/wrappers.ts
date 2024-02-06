import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  transition: all 0.2s ease-out;
  height: 3em;
  & button {
    font-size: 1.5em;
  }
`

export const ContainerWrapper = styled.div`
  background-image: url('/assets/img/bigbox.jpg');
  margin-top: 4em;
  background-size: cover;
  min-height: 23.5em;
`

export const InputWrapper = styled.input`
  width: 90%;
  font-size: 1em;
  padding-left: 1em;
  border: 1px solid #ccc;
  border-radius: 1px;
`;

export const TypeAheadWrapper = styled.div`
  max-height: 15em;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;
  }
`

export const Wrapper = styled.div`
  padding: 1.5em 2em 0 2em;
`

export const FilteredWrapper = styled.div`
  padding-left: 1em;
`