import {useState, useEffect} from 'react';
import ChatMessage from '../Components/ChatMessage.js'


export default function Chat() {

  useEffect(() => {
    getEngines();
  }, [])

  const [input, setInput] = useState("");
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("ada");
  const [text, setText] = useState('');
  const [chatLog, setChatLog] = useState([]);

  function clearChat(){
    setChatLog([]);
  }

  function getEngines(){
    fetch("http://localhost:3080/models")
    .then(res => res.json())
    .then(data => {
      setModels(data.models)})
  }

  async function handleSubmit(e){
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: input} ]
    await setInput("");
    setChatLog(chatLogNew)
    // fetch response to the API combining the caht log array of message snad sending it as a message tp localhose:3000 as a post
    const messages = chatLogNew.map((message) => message.message).join("\n")
    
    const response = await fetch("http://localhost:3080", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages,
        //message: chatLog.map((message) => message.message).join("")
        currentModel,
      })
    });
    // const data = await response.json();
    // await setChatLog([...chatLogNew, { user: "gpt", message: data.message } ])
    // console.log(data);
    const data = await response.json();
    //console.log(data.message)
    await setChatLog([...chatLogNew, { user: "gpt", message: data.message } ])
  }
  
  return (
    <div>
      <div rows="1">
        <button onClick={clearChat}>New Chat</button>
        <select className="custom-select" onChange={(e) => {
          setCurrentModel(e.target.value)
        }}>
        <option value="" disabled selected hidden>Choose a model</option>
          {models.map((model, index) => (
            <option key={model.id} value={model.id}>{model.id}</option>
            ))}
        </select>
      </div>
      
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} data ={message}/>
          ))}
          <div className="chat-input-holder">
            <form onSubmit={handleSubmit}>
            <input 
              rows="1" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input-textarea" 
              placeholder="Type your question here"></input>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}