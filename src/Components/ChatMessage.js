import logoSvg from '../logo.svg';

export default function ChatMessage(message) {
    //console.log(message);
    message = message.data;
    return (
        <div className={'chat-message ${message.user == "gpt" && "chatgpt"}'}>
    {message.user}
      <div className="chat-message-center">
          <div className ={'avatar ${message.user == "gpt" && "chatgpt" }'}>
            <img src={logoSvg} alt="my SVG" />
          </div>
          <div className="message">
            {message.message}
          </div>
      </div>
    </div>
    )
}

//<button className="copy-text-button" onClick={() =>  navigator.clipboard.writeText(message.message)}>Copy</button>