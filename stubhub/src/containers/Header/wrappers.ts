import styled from 'styled-components';
import { HeaderColors } from '../../constants/colors';

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${HeaderColors.border};
  background-color: ${HeaderColors.background};
  flex-direction: column;
`

export const LineWrapper = styled.img`
  position: relative;
  width: 100%;
  height: 0.325em;
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
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LogoWrapper = styled.img`
  margin:0.3em 0 0.3em 0.3em;
  cursor: pointer;
`