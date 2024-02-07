import { CustomButtonProps, ButtonWrapper } from "./wrappers";

const Button: React.FC<CustomButtonProps> = ({ onClick, label, ...props }) => {
  return <ButtonWrapper onClick={onClick} {...props}>{label}</ButtonWrapper>;
};

export default Button;

