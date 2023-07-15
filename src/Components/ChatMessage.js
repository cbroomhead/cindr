import logoSvg from '../logo.svg';
import '../App.css';
import {Stack, ListItem, Box, Avatar} from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import BookIcon from '@mui/icons-material/Book';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Button } from "@mui/material";

import { useRef, useState, useEffect } from 'react';
import { firestore, db } from '../firebase.js';
import { addDoc, collection } from '@firebase/firestore'



export default function ChatMessage(message) {
    
    message = message.data;
    //console.log(message);

    const messageRef = useRef();
    const colRef = collection(firestore, 'messages')

    //Save message
    const handleSave = async(e) => {
      e.preventDefault();
      //console.log(messageRef.current.value);
      let data = {
          //message: messageRef.current.value,
          message: message.message,
      }
      try {
          addDoc(colRef, data);
      } catch (e) {
          console.log(e);
      }
    };

    return (
      <Box>
          <div className={'chat-message ${message.user == "gpt" && "chatgpt"}'}>
            <Stack direction="row" className="chat-message-center">
              <IconButton onClick={handleSave}>
                <Button 
                  sx={{ borderRadius: 10 }}
                  variant="outlined"
                  startIcon={<BookIcon />}
                >
                  Save
                </Button>
              </IconButton>
              <IconButton onClick={() => navigator.clipboard.writeText(message.message)}>
                  <Button 
                    sx={{ borderRadius: 10 }}
                    variant="outlined"
                    startIcon={<FileCopyIcon />}
                  >
                    Copy
                </Button>
              </IconButton>
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