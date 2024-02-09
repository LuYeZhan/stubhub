import { ButtonWrapper, CustomButtonProps, IconWrapper } from "./wrappers";

const Button: React.FC<CustomButtonProps> = ({ onClick, label, icon, ...props }) => {
  return (
    <ButtonWrapper onClick={onClick} {...props}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {label}
    </ButtonWrapper>
  );
};

export default Button;