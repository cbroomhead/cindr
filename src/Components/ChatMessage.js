import logoSvg from '../logo.svg';
import '../App.css';
import {Stack, ListItem, Box, Avatar} from "@mui/material/";

export default function ChatMessage(message) {
    //console.log(message);
    message = message.data;


    return (
      <Box>
          <div className={'chat-message ${message.user == "gpt" && "chatgpt"}'}>
            <Stack direction="row" className="chat-message-center">
            <button className="copy-text-button" onClick={() =>  navigator.clipboard.writeText(message.message)}>Copy</button>
                <div className ={'avatar ${message.user == "gpt" && "chatgpt" }'}>
                  <img src={logoSvg} width='50px' height='50px' alt="my SVG" />
                </div>
                <div className="message">
                  {message.message}
                </div>
            </Stack>
          </div>      
      </Box>
    )
}

//<button className="copy-text-button" onClick={() =>  navigator.clipboard.writeText(message.message)}>Copy</button>