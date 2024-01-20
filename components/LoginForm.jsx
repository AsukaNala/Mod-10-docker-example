import { useState } from "react";
import { useUserContext } from "../context/UserContext";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  const { currentUser, handleUpdateUser } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail, name: userName });
    }
  };

  if (currentUser.email || currentUser.userName)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );

  return (
    <div className="LoginForm componentBox">
      <h1>This is Docker Action Practice</h1>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>{" "}
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>{" "}
        {"  "}
        <label>
          Password: {"  "}
          <input
            type="password"
            name="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>{" "}
        {"  "}
        <button>Log in</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;
