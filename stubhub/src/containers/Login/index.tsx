import { useContext, useState } from "react";
import { UserType } from "../../types/users.type"
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { Form, Input, Label, LoginContainer } from "./wrappers";
import Button from "../../components/Button";
import { ButtonColors } from "../../constants/colors";
import Dialog from "../../components/Dialog";

const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { setIsUserLoggedIn, setUser, users } = useContext(DataContext);
  const navigate = useNavigate()

  const handleLogin = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const flattenedUserData: UserType[] = users.flat();      
      const foundUser = flattenedUserData.find((user) => user.username === username);
      if (!username) {
        setError("Please enter a username value.");
        return;
      }
      if (foundUser) {
        setIsUserLoggedIn(true);
        setUser(foundUser)
        navigate('/me')
      } else {
        setError(`doesn't exist.`);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleCloseDialog = () => {
    setError(""); 
  };

  return (
    <LoginContainer>
      <Form >
        <h2>Login</h2>
        <Label>Username:</Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button bgColor={ButtonColors.grey} color={ButtonColors.black} onClick={handleLogin} label='login' />
      </Form>
      {error && <Dialog isOpen={true} onClose={handleCloseDialog} username={username} errorMessage={error} />}    
      </LoginContainer>
  );
};

export default Login;
