import styled from 'styled-components';
import { LetterColors } from '../../constants/colors';

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure it's above other content */
`;

export const DialogContent = styled.div`
  background-color: white;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
  max-width: 400px; 
  width: 100%;
  color: ${LetterColors.secondary}
`;