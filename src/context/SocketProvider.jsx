import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { io } from "socket.io-client";
export const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {
  const [activeUsers, setActiveUsers] = useState([]);
  const socket = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:4000");
  }, []);
  return (
    <SocketContext.Provider value={{ socket, activeUsers, setActiveUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
