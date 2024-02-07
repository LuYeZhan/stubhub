import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ButtonsWrapper, HeaderWrapper, NavWrapper, LineWrapper, LogoWrapper } from "./wrappers";

const Header = () => {

  const navigate = useNavigate()
   
  const onClick = () => {
    navigate('/login')
  }

  return (
    <HeaderWrapper>
      <LineWrapper src='/assets/img/line_color.png' alt="Line color"/>
      <NavWrapper>
        <LogoWrapper src="/assets/logo/logo.svg" alt="Logo" /> 
        <ButtonsWrapper>
          <Button label='Help' hover={true} color='#000000'/> <Button label='Login' hover={true} color='#000000' onClick={onClick}/>
        </ButtonsWrapper>
      </NavWrapper>
    </HeaderWrapper>
  );
}

export default Header
