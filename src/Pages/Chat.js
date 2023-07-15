import {useState, useEffect} from 'react';
import ChatMessage from '../Components/ChatMessage.js'

import '../App.css';
import {Typography, Box, Grid, Container, ListItem, Stack, Button, Select, MenuItem, FormControl, 
  InputLabel, Divider, TextField, Paper} from "@mui/material/";
import { spacing } from '@mui/system';

export default function Chat() {

  useEffect(() => {
    getEngines();
  }, [])

  const [input, setInput] = useState("");
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("");
  const [text, setText] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [pronouns, setPronouns] = useState("");
  const [requestType, setRequestTypes] = useState("");


  function clearChat(){
    setChatLog([]);
  }

  function getEngines(){
    fetch("http://localhost:3080/models")
    .then(res => res.json())
    .then(data => {
      setModels(data.models)})
  }

  async function onKeyPress(e){
    if (e.key === "Enter") {
      //console.log('Input value', e.target.value);
      handleSubmit(e);
      e.preventDefault();
    }
  }

  async function handleSubmit(e){
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: input} ]
    await setInput("");
    setChatLog(chatLogNew)

    
    const messages = chatLogNew.map((message) => message.message).join("\n")

    //console.log(messages)

    const response = await fetch("http://localhost:3080", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages,
        currentModel,
        pronouns,
        requestType,
      })
    });
    const data = await response.json();
    await setChatLog([...chatLogNew, { user: "gpt", message: data.message } ])
  }
  
  return (
    <Container maxWidth='false' disableGutters style={{ border: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <Grid container style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}> 
          <Grid xs={12} 
            sx={{
              width: 'auto',
            }}>
            <Stack direction="row" spacing={1}>
              <Box>
                <Button 
                    variant="contained" 
                    sx={{
                      m: 4,
                      bgcolor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                    onClick={clearChat}
                    >New Chat
                </Button>
              </Box>
              <FormControl 
                variant="filled" 
                sx={{ 
                  width: 300 }}>
                  <InputLabel 
                    id='model-label' 
                    sx={{ 
                      minWidth: "max-content",
                      m: 4 }} >Chose a Model </InputLabel>
                    <Select 
                      onChange={(e) => {setCurrentModel(e.target.value)}}
                      sx={{ 
                        minWidth: "max-content",
                        m: 4 }}
                      >
                      {models.map((model, index) => (
                        <MenuItem key={model.id} value={model.id}>
                          {model.id}
                        </MenuItem>
                      ))}
                    </Select>
              </FormControl >
              
              <FormControl variant="filled" 
                sx={{ 
                  width: 300 }}>
                <InputLabel 
                      id='request-type-label' 
                      sx={{ 
                        minWidth: "max-content",
                        m: 4 }} >Chose Request Type </InputLabel>
                      <Select 
                        onChange={(e) => {setRequestTypes(e.target.value)}}
                        sx={{ 
                          minWidth: "max-content",
                          m: 4 }}
                        >
                          <MenuItem value={"Note"}>Note</MenuItem>
                          <MenuItem value={"Letter"}>Letter</MenuItem>
                      </Select>
              </FormControl>

              <FormControl variant="filled" 
                sx={{ 
                  width: 300 }}>
                <InputLabel 
                      id='pronoun-label' 
                      sx={{ 
                        minWidth: "max-content",
                        m: 4 }} >Chose Pronouns </InputLabel>
                      <Select 
                        onChange={(e) => {setPronouns(e.target.value)}}
                        sx={{ 
                          minWidth: "max-content",
                          m: 4 }}
                        >
                          <MenuItem value={"They"}>They</MenuItem>
                          <MenuItem value={"She"}>She</MenuItem>
                          <MenuItem value={"He"}>He</MenuItem>
                      </Select>
              </FormControl>

              </Stack>
          </Grid>
      </Grid>  
      <Box className="chat-log">
        {chatLog.map((message, index) => (
              <ChatMessage key={index} data ={message}/>
            ))}
      </Box>
      <Box 
            position="absolute" 
            bottom="0px" 
            className="chat-input-holder"
          >
            <FormControl
              onSubmit={handleSubmit}
              onKeyPress={onKeyPress}
              >
              <TextField
                sx={{ 
                  width: 900,
                  m: 4,
                 }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chat-input-textarea" 
                placeholder="Type your question here"></TextField>
            </FormControl>
          </Box >  
    </Container>
  )
}