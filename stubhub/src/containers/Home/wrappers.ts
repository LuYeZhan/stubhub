import styled from 'styled-components';
import { Desktop, TabletLandscape } from '../../constants/devices';

export const ContainerWrapper = styled.div`
  background-image: url('/assets/img/bigbox.jpg');
  background-size: contain;
  min-height: 40vh;
  padding: 1.5em 2em 0 2em;

  @media ${Desktop} {
    margin-top: 4em;
    background-size: cover;
  }

  @media ${TabletLandscape} {
    min-height: 63vh;
  }

`;

export const Wrapper = styled.div`
`;
