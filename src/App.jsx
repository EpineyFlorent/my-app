import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloUser from "./components/HelloUser";

//Conditional Rendering
function LoginButton({ isLoggedIn, setIsLoggedIn }) {
  return (
    <button onClick={() => setIsLoggedIn((previousValue) => !previousValue)}>
      Login
    </button>
  );
}
//Conditional Rendering
function LogoutButton({ isLoggedIn, setIsLoggedIn }) {
  return (
    <button onClick={() => setIsLoggedIn((previousValue) => !previousValue)}>
      Logout
    </button>
  );
}
//Conditional Rendering
function LogButton({ isLoggedIn, setIsLoggedIn }) {
  if (isLoggedIn) {
    return (
      <LogoutButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    );
  }
  return <LoginButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
}

function App() {
  const username = "Florent Epiney";
  function SayHello(username) {
    alert("Hello " + username + " !");
  }
  //anonymous function
  () => {
    console.log("Hello from the arrow function");
  };

  //useState
  const [value, setValue] = useState(0);
  function handleClick() {
    // setValue(value + 1);
    // setValue(value + 1); --> add only 1 because it does not keep the value
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
  }

  useEffect(() => {
    console.log("useInsertionEffect");
  }, [value]);

  //Conditional Rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //JSX
  const element = <h2>Hello World</h2>;
  let myButton; //let is important because we does not want to reassign the value
  if (isLoggedIn) {
    myButton = (
      <button onClick={() => setIsLoggedIn((previousValue) => !previousValue)}>
        Logout
      </button>
    );
  } else {
    myButton = (
      <button onClick={() => setIsLoggedIn((previousValue) => !previousValue)}>
        Login
      </button>
    );
  }

  return (
    <>
      <h1>Demo Component</h1>
      <HelloUser username={username} color="blue" />
      <HelloUser username="Lisa Salamin" color="pink" />
      <button
        onClick={() => {
          SayHello(username);
        }}
      >
        Next
      </button>
      <h1>useState</h1>
      <button onClick={handleClick}>{value}</button>

      <h1>useEffect</h1>
      <h1>Demo Conditional Rendering</h1>
      <LogButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <h1>JSX</h1>
      <h1>{element}</h1>
      {myButton}
      <h2>{isLoggedIn.toString()}</h2>
      <button onClick={() => setIsLoggedIn((previousValue) => !previousValue)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <h1>Ternary Operator conditional rendering</h1>
      {isLoggedIn && <p>Welcome back, dear user</p>}
    </>
  );
}

export default App;

//SayHello --> by clicking the button
//SayHello() --> by calling the function, at loading the page
