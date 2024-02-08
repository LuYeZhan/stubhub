import styled from 'styled-components';
import { Desktop } from '../../constants/devices';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  
  @media ${Desktop} {
    height: 73vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & button {
    align-self: baseline;
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  margin-top: 1em;
  width: 100%;
  padding: 8px;
  margin-bottom: 1.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;
