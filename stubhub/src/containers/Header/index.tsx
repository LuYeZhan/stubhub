import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import {
  ButtonsWrapper,
  HeaderWrapper,
  NavWrapper,
  LineWrapper,
  LogoWrapper
} from "./wrappers";

const Header = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (isUserLoggedIn) {
      setIsUserLoggedIn(false)
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const renderLoginButtonLabel = () => {
    return isUserLoggedIn ? 'Logout' : 'Login';
  };

  return (
    <HeaderWrapper>
      <LineWrapper src='/assets/img/line_color.png' alt="Line color"/>
      <NavWrapper>
        <LogoWrapper src="/assets/logo/logo.svg" alt="Logo" /> 
        <ButtonsWrapper>
          <Button label='Help' hover={true} color='#000000'/>
          <Button
            label={renderLoginButtonLabel()}
            hover={true}
            color='#000000'
            onClick={handleLoginClick}
          />
        </ButtonsWrapper>
      </NavWrapper>
    </HeaderWrapper>
  );
}

export default Header;
