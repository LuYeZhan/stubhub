import Button from "../../components/Button";
import { ButtonsWrapper, HeaderWrapper, NavWrapper, LineWrapper, LogoWrapper } from "./wrappers";


export const Header = () => {
    
  return (
    <HeaderWrapper>
      <LineWrapper src='/assets/img/line_color.png' alt="Line color"/>
      <NavWrapper>
        <LogoWrapper src="/assets/logo/logo.svg" alt="Logo" /> 
        <ButtonsWrapper>
          <Button label='Help'/> <Button label='Login'/>
        </ButtonsWrapper>
      </NavWrapper>
    </HeaderWrapper>
  );
}
