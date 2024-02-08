import styled from 'styled-components';
import { Desktop } from '../../constants/devices';

export const ContainerWrapper = styled.div`
  background-image: url('/assets/img/bigbox.jpg');
  background-size: contain;
  min-height: 73vh;
  padding: 1.5em 2em 0 2em;

  @media ${Desktop} {
    margin-top: 4em;
    background-size: cover;
    min-height: 63vh;
  }
`

export const Wrapper = styled.div`
`