import React, { useState } from "react";
import { getData } from "../../api/endpoints/dataService";
import { URLS } from "../../constants/apiUrls";
import { UserType } from "../../types/users.type"

const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userData = await getData(URLS.USERS);
      const flattenedUserData: UserType[] = userData.flat();      
      const userExists = flattenedUserData.some((user) => user.username === username);
      
      if (userExists) {
        console.log('You are logged in!')
        setLoggedIn(true);
      } else {
        setError("This username doesn't exist.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("An error occurred while fetching user data.");
    }
  };

  if (loggedIn) {
    return <p>You are logged in!</p>;
  }

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
