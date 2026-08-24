import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
const [showHelp, setShowHelp] = useState(false);

<button onClick={() => setShowHelp(!showHelp)}>
  Toggle Help
</button>

{showHelp && (
  <p>Please enter your message above.</p>
)}
<p>Characters: {message.length}</p>

  return (
    <div className="card">
      <h2>Contact</h2>

      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <p>+91 92 163 96 163</p>

      <h3>{message}</h3>
    </div>
  );
}

export default Contact;