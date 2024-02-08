import { useContext, useState } from "react";
import { UserType } from "../../types/users.type"
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { setIsUserLoggedIn, setUser, users } = useContext(DataContext);
  const navigate = useNavigate()

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
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
        setError("This username doesn't exist.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("An error occurred while fetching user data.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
