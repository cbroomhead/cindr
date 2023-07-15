import { useState } from 'react';
import {Typography, Box, Grid, Container, ListItem, Stack, Button, Select, MenuItem, FormControl, 
    InputLabel, Divider, TextField, Paper} from "@mui/material/";


export default function MoreInputs() {

    const [pronouns, setPronouns] = useState("");
    const [requestType, setRequestTypes] = useState("");

    

    return (
      <div>
        <div>More Inputs form</div>
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
      </div>
    )
  }