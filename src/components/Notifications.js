import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return <div>Notification
    {call.isReceived && !callAccepted && (
      <div>
        <h4>{call.name} is calling: </h4>
        <button onClick={answerCall}>Answers</button>
      </div>
    )}
  </div>;
};

export default Notifications;
