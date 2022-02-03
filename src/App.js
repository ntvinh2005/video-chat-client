import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Option from "./components/Option";
import { ContextProvider } from "./SocketContext";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        Video Chat
        {/* VideoPlayer */}
        <VideoPlayer></VideoPlayer>
        <Option>
          <Notifications />
        </Option>
      </div>
    </ContextProvider>
  );
}

export default App;
