import React, {useContext} from 'react';
import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);

  return <div>
      Video Player
      {/* Our video */}
      {stream && (
        <div>
      <h4>{name}</h4>
      <video playsInline muted ref={myVideo} autoPlay/></div>
      )}
      
      {/* User video */}
      {callAccepted && !callEnded && (
        <div>
      {call.name}
      <video playsInline muted ref={userVideo} autoPlay/>
      </div>
      )}

  </div>;
};

export default VideoPlayer;
