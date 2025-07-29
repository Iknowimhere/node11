import { useEffect, useRef, useState } from "react";

const App = () => {
  let [messages, setMessages] = useState(["hello", "hi"]);
  let inputRef = useRef();
  let wsRef = useRef();

  useEffect(() => {
    let ws = new WebSocket("ws://localhost:5000");

    ws.addEventListener("message",(event)=>{
      console.log(event);
        setMessages((prev) => [...prev, event.data]);
    })
    wsRef.current = ws;
  ws.addEventListener("open",(event)=>{
       let object = {
        type: "join",
        payload: {
          roomId: "123",
        },
      };
      ws.send(JSON.stringify(object));
  })

    return () => {
      return ws.close();
    };
  }, []);
  return (
    <div className="h-screen bg-slate-900 relative">
      <div className="messages flex flex-col p-5">
        {messages.map((message) => {
          return (
            <span key={message} className="bg-white p-2 m-1 rounded-sm w-fit">
              {message}
            </span>
          );
        })}
      </div>
      <div className="input bg-white flex p-2 gap-2 absolute bottom-0 left-0 w-full">
        <input type="text" className="flex-1" ref={inputRef} />
        <button
          type="submit"
          className="bg-slate-400 p-2"
          onClick={() => {
            let message = inputRef.current.value;
            wsRef.current.send(
              JSON.stringify({
                type: "message",
                payload: {
                  message,
                },
              })
            );
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default App;
