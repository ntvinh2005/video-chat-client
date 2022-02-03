import React, {useState, useContext} from "react";
import { SocketContext } from "../SocketContext"

const Option = ({ children }) => {
    const { me, callEnded, name, setName, callAccepted, endCall, callUser} = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState('');
    console.log(me)

  return (
    <div>
        <div>
            <h3>Account </h3>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input>
        </div>
        <div>
            <h3>Make a call</h3>
            <p>Your ID: {me}</p>
            <label>ID to call: </label>
            <input type="text" value={idToCall} onChange={(e) => {setIdToCall(e.target.value)}}></input>
            {callAccepted && !callEnded ? (
                <button onClick={endCall}>
                    Hang up
                </button>
            ):(
                <button onClick={() => callUser(idToCall)}>
                    Call
                </button>
            )}
        </div>
      Options
      {children}{" "}
    </div>
  );
};

export default Option;
