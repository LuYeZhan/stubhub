import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgb(221, 221, 221);
  background-color: rgb(245, 245, 245);
  flex-direction: column;
`

export const LineWrapper = styled.img`
  position: relative;
  width: 100%;
  height: 5px;

  ::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 50% 0%;
    background-repeat: no-repeat;
  }
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3em;
  padding: 0.5em 0;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`