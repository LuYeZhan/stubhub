import { CustomButtonProps, ButtonWrapper } from "./wrappers";

const Button: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return <ButtonWrapper {...props}>{label}</ButtonWrapper>;
};

export default Button;

