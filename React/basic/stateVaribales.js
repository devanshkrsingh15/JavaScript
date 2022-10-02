import { useState } from 'react'

function App() {
  const [emotion, setEmotion] = useState("HAPPY 😁");

  return (
    <div>
      <h1>Current Emotion is {emotion}</h1>
      <button onClick={()=> setEmotion("SAD 😢")}> Sad</button>
      <button onClick={()=> setEmotion("SLEEPY 😴")}>Sleepy</button>
    </div>
  );
}



ReactDOM.render(<App />, document.getElementById("root"));

