import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store";
import SocketProvider from "./context/SocketProvider";
const myclientID =
  "1087396237579-r3aestnkj3tsp85jlsu30s8emcvhv1qr.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={myclientID}>
      <Provider store={store}>
        <SocketProvider>
          <App />
        </SocketProvider>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
