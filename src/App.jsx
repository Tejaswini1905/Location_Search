import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]); // State to store multiple messages

  function handleClick() {
    setCount(count + 1);
    setMessages([...messages, `You clicked the button! `]); // Add new message to array
  }

  return (
    <>
      <h1>Count</h1>
      <button 
        onClick={handleClick} 
        style={{backgroundColor: "#007BFF",color: "white",padding: "10px 20px",fontSize: "16px",border: "none",borderRadius: "5px",cursor: "pointer"}}>
        Click
      </button>
      
      {/* Display all messages below the button */}
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      
    </>
  );
}

export default MyButton;
