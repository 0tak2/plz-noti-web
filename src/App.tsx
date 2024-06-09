import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

function App() {
  const [count, setCount] = useState(0);

  const handleSubscribeBtn = async () => {
    try {
      const currentToken = await getToken(messaging, {
        vapidKey:
          "BDMpZtMEstyDsKkKABjsOXiiV4EGDmGjZ4uPhSK0zhkbuQWfIKdQKEJcE1J85ILXkvZCwm7L6mh4DbYtXJ_fUY4",
      });

      if (!currentToken) {
        console.error("Current token is not valid");
        return;
      }

      sendTokenToServer(currentToken);
      console.log(`Get current token. currentToken:${currentToken}`);
    } catch (err) {
      console.error("An error occurred while retrieving token. ", err);
    }
  };

  const sendTokenToServer = async function (currentToken: string) {
    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        body: JSON.stringify({
          token: currentToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();

      return jsonData;
    } catch (error) {
      console.error("subscribe failed. detail: ", error);
    }
  };

  const handlePushMessageBtn = async () => {
    try {
      await fetch("http://localhost:3000/message", {
        method: "POST",
      });
    } catch (error) {
      console.error("subscribe failed. detail: ", error);
    }
  };

  return (
    <>
      <button onClick={handleSubscribeBtn}>구독</button>&nbsp;
      <button onClick={handlePushMessageBtn}>전송</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
